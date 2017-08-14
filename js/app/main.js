define(['./controller', './model', './view'],
    (Controller, Model, View) => {
        const revenueModel = new Model('revenue', '#59d026', '#056700');
        const revenueView = new View(revenueModel);

        const impresionsModel = new Model('impresions', '#18c9e2', '#054e64');
        const impresionsView = new View(impresionsModel);

        const visitsModel = new Model('visits', '#f9c300', '#d8571e');
        const visitsView = new View(visitsModel);

        const revenueController = new Controller(revenueModel, revenueView);
        const impresionsController = new Controller(impresionsModel, impresionsView);
        const visitsController = new Controller(visitsModel, visitsView);

        revenueController.renderView();
        impresionsController.renderView();
        visitsController.renderView();
    });
