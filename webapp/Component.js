sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("", {
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
        }
    })
});