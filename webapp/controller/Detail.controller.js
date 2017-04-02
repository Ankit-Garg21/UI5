sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.wt.controller.Detail", {
        onInit: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(oEvent) {

            var oData = JSON.parse(oEvent.getParameter("arguments").invoicePath);
            var oModel = new JSONModel(oData);

            this.getOwnerComponent().setViewModel(oModel, "invoiceItem");

            this.getView().bindElement({
                path: "/" + oEvent.getParameter("arguments").invoicePath,
                model: "invoiceItem"
            });
        },
        onNavBack: function() {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("overview", {}, true);
            }
        }
    });
});