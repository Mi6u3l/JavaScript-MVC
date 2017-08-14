define(['./graph'], (Graph) => {
    class View {
        constructor(model) {
            this.model = model;
        }

        render() {
        //    const graphsContainer = document.getElementById('graphsContainer');
        //    graphsContainer.innerHTML =  `${this.model.type} `;
        //    graphsContainer.innerHTML += `${this.model.tabletPercentage} ${this.model.smartPhonePercentage}`;
        //    graphsContainer.innerHTML += ` ${this.model.total}`;
        //    graphsContainer.innerHTML += ` ${this.model.smartPhoneColor} ${this.model.tabletColor}`;
        //    graphsContainer.innerHTML += ` ${this.model.smartPhoneValue} ${this.model.tabletValue}`;
            const graph = new Graph(this.model.type, this.model.smartPhonePercentage, this.model.total, this.model.tabletColor, this.model.smartPhoneColor);
            graph.init();
        }
    }
    return View;
});
