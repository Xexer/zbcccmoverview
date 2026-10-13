sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"rewe/bc/zbcccmoverview/test/integration/pages/DashboardMain.gen"
], function (JourneyRunner, DashboardMainGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('rewe/bc/zbcccmoverview') + '/test/flp.html#app-preview',
        pages: {
			onTheDashboardMainGenerated: DashboardMainGenerated
        },
        async: true
    });

    return runner;
});

