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
            var oView = this.getView();
            var oDialog = oView.byId("helloDialog");

            if(!oDialog) {
                oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.wt.view.HelloDialog", this);
                oView.addDependent(oDialog);
            }

            oDialog.open();
        },
        onCloseDialog: function() {
            this.getView().byId("helloDialog").close();
        }
    });
});