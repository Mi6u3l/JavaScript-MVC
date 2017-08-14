define(() => {
    class Controller {
        constructor(model, view) {
            this.model = model;
            this.view = view;
        }

        initModel() {
            this.model.init();
        }

        renderView() {
            this.initModel();
            this.view.render();
        }
    }
    return Controller;
});

