import React from "react";
import { connect } from "react-redux";
import { loadPhonebook } from "./api";
import { phonebookLoadingInProgress, phonebookLoadingError, phonebookLoaded, changeNumFilter, changeNameFilter } from "./actions";

const App = ({ filteredPhonebook: phonebook, setNameFilter, setNumFilter }) => {
    const onNameChange = event => setNameFilter(event.target.value);
    const onNumChange = event => setNumFilter(event.target.value);
    return (
        <table className="main">
            <tbody>
            <tr className="filter">
                <td>
                    NameFilter:
                </td>
                <td>
                    <input onInput={onNameChange}/>
                </td>
            </tr>

            <tr className="filter">
                <td>
                    NumFilter:
                </td>
                <td>
                    <input onInput={onNumChange}/>
                </td>
            </tr>

            {
                phonebook.map(item =>
                    <tr key={item.id} className="row">
                        <td className="name">
                            {item.name}
                        </td>
                        <td className="phoneNumber">
                            {item.num}
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
};

const filterBook = (phonebook, nameFilterChangedLast, nameFilter, numFilter) => {
    return phonebook
        .filter(({ name, num }) => {
            const nameMatch = name.indexOf(nameFilter) !== -1;
            const numMatch = num.indexOf(numFilter) !== -1;
            return nameMatch && numMatch;
        })
        .sort((a, b) => {
            const substr = nameFilterChangedLast ? nameFilter : numFilter;
            const aPos = (nameFilterChangedLast ? a.name : a.num).indexOf(substr);
            const bPos = (nameFilterChangedLast ? b.name : b.num).indexOf(substr);
            return aPos - bPos;
        });
};

const ConnectedApp = connect(state => {
    const { phonebook, nameFilterChangedLast, nameFilter, numFilter } = state;
    return {
        filteredPhonebook: filterBook(phonebook, nameFilterChangedLast, nameFilter, numFilter)
    };
}, dispatch => ({
    setNumFilter: newFilter => dispatch(changeNumFilter(newFilter)),
    setNameFilter: newFilter => dispatch(changeNameFilter(newFilter))
}))(App);

class Loader extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(phonebookLoadingInProgress());
        loadPhonebook((err, phonebook) => {
            if (err)
                return dispatch(phonebookLoadingError());
            dispatch(phonebookLoaded(phonebook));
        });
    }

    render() {
        const { phoneBookLoadingError, phoneBookLoadingInProgress, phoneBookLoaded } = this.props;
        if (phoneBookLoaded)
            return <ConnectedApp/>;
        if (phoneBookLoadingInProgress)
            return <div> Loading... Waith please </div>;
        if (phoneBookLoadingError)
            return <div> You should't see this :), but if you do, try to reload page </div>;

        return <div> Loading of your phonebook will start... soon... </div>;
    }
}

const ConnectedLoader = connect(state => {
    const { phoneBookLoadingError, phoneBookLoadingInProgress, phoneBookLoaded } = state;
    return {
        phoneBookLoadingError,
        phoneBookLoadingInProgress,
        phoneBookLoaded
    };
})(Loader);

export default ConnectedLoader;
