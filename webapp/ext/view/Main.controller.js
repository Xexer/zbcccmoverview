sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/ui/model/Filter',
        'sap/ui/model/FilterOperator'
    ],
    function(PageController, Filter, FilterOperator) {
        'use strict';

        // Empty key = "Standard" calculation method
        const DEFAULT_CALCULATION_METHOD = '';

        return PageController.extend('rewe.bc.zbcccmoverview.ext.view.Main', {
            onInit: function () {
                PageController.prototype.onInit.apply(this, arguments);
                this._applyCalculationMethodFilter();
            },

            onSearch: function () {
                this._applyCalculationMethodFilter();
            },

            onTilePress: function (oEvent) {
                const oTileData = oEvent.getSource().getBindingContext().getObject();
                this.getExtensionAPI().getIntentBasedNavigation().navigateOutbound('toCcmDashboard', {
                    ProviderID: oTileData.ProviderID,
                    CalculationMethod: oTileData.CalculationMethod
                });
            },

            _applyCalculationMethodFilter: async function () {
                const oFilterBar = this.byId('CalcMethodFilterBar');
                const oSelectionVariant = await oFilterBar.getSelectionVariant();
                const aOptions = oSelectionVariant.getSelectOption('CalculationMethod');
                const sCalculationMethod = aOptions && aOptions.length ? aOptions[0].Low : DEFAULT_CALCULATION_METHOD;

                const oBinding = this.byId('tileContainer').getBinding('items');
                oBinding.filter(new Filter('CalculationMethod', FilterOperator.EQ, sCalculationMethod));
                if (oBinding.isSuspended()) {
                    oBinding.resume();
                }
            },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf rewe.bc.zbcccmoverview.ext.view.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf rewe.bc.zbcccmoverview.ext.view.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf rewe.bc.zbcccmoverview.ext.view.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
