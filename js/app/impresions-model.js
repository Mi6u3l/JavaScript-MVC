define(() => {
    const SERVICE_URL = 'http://localhost:3000/impresion';
    class Impresions {
        constructor(tabletColor, smartPhoneColor) {
            this.tabletColor = tabletColor;
            this.smartPhoneColor = smartPhoneColor;
        }
        getDeviceValues() {
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open('GET', SERVICE_URL, false);
            xmlHttp.send(null);
            this.tabletValue = JSON.parse(xmlHttp.responseText).tablet;
            this.smartPhoneValue = JSON.parse(xmlHttp.responseText).smartPhone;
        }
    }
    return Impresions;
});
