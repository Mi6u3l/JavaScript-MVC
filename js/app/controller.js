define(['./impresions-model', './view'], (ImpresionsModel, View) => {
    class Controller {
        constructor(model, view) {
            this.model = model;
            this.view = view;
        }

        initValues() {
            this.model.getDeviceValues();
        } 

        renderView() {
            this.view.render();
        }

        init() {
            console.log('hello');
        }
    }
    return Controller;
});

