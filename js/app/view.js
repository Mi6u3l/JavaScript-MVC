define(['./graph'], (Graph) => {
    class View {
        constructor(model) {
            this.model = model;
        }

        convertNumberFormat(value) {
            const valueToReplace = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return this.model.type === 'revenue' ? `${valueToReplace}€` : valueToReplace;
        }

        render() {
            const total = this.convertNumberFormat(this.model.total);
            const tabletValue = this.convertNumberFormat(this.model.tabletValue);
            const smartPhoneValue = this.convertNumberFormat(this.model.smartPhoneValue);

            const graph = new Graph(this.model.type, this.model.smartPhonePercentage, total, this.model.tabletColor, this.model.smartPhoneColor);
            graph.init();

            const graphContainer = document.getElementById(`graph${this.model.type}`);
            const labelWrapper = document.createElement('div');
            labelWrapper.className = 'label-wrapper';
            graphContainer.appendChild(labelWrapper);

            const labelTablet = document.createElement('div');
            labelTablet.className = 'label-tablet';
            labelTablet.innerText = 'Tablet';
            labelTablet.setAttribute('style', `color:${this.model.tabletColor}`);
            labelWrapper.appendChild(labelTablet);

            const labelTabletPercentage = document.createElement('div');
            labelTabletPercentage.className = 'label-percentage';
            labelTabletPercentage.innerText = `${this.model.tabletPercentage}%`;
            labelTablet.appendChild(labelTabletPercentage);

            const labelTabletValue = document.createElement('span');
            labelTabletValue.className = 'label-tablet-value';
            labelTabletValue.innerText = tabletValue;
            labelTabletPercentage.appendChild(labelTabletValue);

            const labelSmartPhone = document.createElement('div');
            labelSmartPhone.className = 'label-smartphone';
            labelSmartPhone.innerText = 'Smartphone';
            labelSmartPhone.setAttribute('style', `color:${this.model.smartPhoneColor}`);
            labelWrapper.appendChild(labelSmartPhone);

            const labelSmartphonePercentage = document.createElement('div');
            labelSmartphonePercentage.className = 'label-percentage';
            labelSmartphonePercentage.innerText = `${this.model.smartPhonePercentage}%`;
            labelSmartPhone.appendChild(labelSmartphonePercentage);

            const labelSmartphoneValue = document.createElement('span');
            labelSmartphoneValue.className = 'label-smartphone-value';
            labelSmartphoneValue.innerText = smartPhoneValue;
            labelSmartphonePercentage.appendChild(labelSmartphoneValue);
        }
    }
    return View;
});
