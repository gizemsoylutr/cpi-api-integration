sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("cpiapiintegrationui.controller.Homepage", {
        onInit: function () {
        },

        onSubmit: function () {
            $.ajax({
                url: "/http/PaymentFile/Coupa",
                type: "POST",
                data: JSON.stringify({
                    "ID": "110S",
                    "Date": "08/06/24",
                    "PaymentCompany": "1100"
                }),
                contentType: "application/json",
                dataType: "json",
                success: function (data) {
                    console.log("Success:", data);
                },
                error: function (error) {
                    console.log("Error:", error);
                }
            });
        }
    });
});
