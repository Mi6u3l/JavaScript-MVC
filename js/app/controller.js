define(() => {
    class Controller {
        // initialize controller
        constructor(model, view) {
            this.model = model;
            this.view = view;
        }

        // initialize received model
        initModel() {
            this.model.init();
        }

        // call render from attached view
        renderView() {
            this.initModel();
            this.view.render();
        }
    }
    return Controller;
});

