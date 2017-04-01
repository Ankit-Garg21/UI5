sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.wt.controller.HelloPanel", {
        onShowHello: function () {
            //alert("Hello World");
            //MessageToast.show("Hello World");
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();
        },
        onCloseDialog: function() {
            this.getView().byId("helloDialog").close();
        }
    });
});