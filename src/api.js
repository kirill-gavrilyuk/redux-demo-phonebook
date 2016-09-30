export const loadPhonebook = (cb) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/data.json");
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                try {
                    const phonebook = JSON.parse(xmlhttp.responseText);
                    cb(null, phonebook);
                } catch (e) {
                    cb(e, null);
                }
            } else {
                cb(new Error(xmlhttp.statusText), null);
            }
        }
    };
    xmlhttp.send();
};
