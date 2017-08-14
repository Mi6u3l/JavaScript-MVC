define(() => {
    const SERVICE_URL = 'http://localhost:3000';
    class Model {
        constructor(type, tabletColor, smartPhoneColor) {
            this.tabletColor = tabletColor;
            this.smartPhoneColor = smartPhoneColor;
            this.type = type;
        }

        getDeviceValues() {
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open('GET', `${SERVICE_URL}/${this.type}`, false);
            xmlHttp.send(null);
            this.tabletValue = JSON.parse(xmlHttp.responseText).tablet;
            this.smartPhoneValue = JSON.parse(xmlHttp.responseText).smartPhone;
        }

        getTotal() {
            this.total = this.tabletValue + this.smartPhoneValue;
        }

        getPercentages() {
            this.smartPhonePercentage = (this.smartPhoneValue * 100) / this.total;
            this.tabletPercentage = (this.tabletValue * 100) / this.total;
        }

        init() {
            this.getDeviceValues();
            this.getTotal();
            this.getPercentages();
        }
    }
    return Model;
});
