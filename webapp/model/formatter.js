sap.ui.define([], function() {
    "use strict";

    return {
        statusText: function(sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch(sStatus) {
                case "A":
                case "B":
                case "C":
                    return resourceBundle.getText("invoiceStatus" + sStatus);
                default:
                    return sStatus;
            }
        }
    };
});