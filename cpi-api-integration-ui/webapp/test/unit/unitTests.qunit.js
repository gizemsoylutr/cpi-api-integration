/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cpi-api-integration-ui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
