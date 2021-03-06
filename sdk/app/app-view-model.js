var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable = require("data/observable");
var AppViewModel = (function (_super) {
    __extends(AppViewModel, _super);
    function AppViewModel() {
        _super.call(this);
        this.set("actionBarTitle", "{N} RichUI Examples");
        this.set("isExamplesPage", true);
        this._examples = new Array();
        this.loadData();
    }
    AppViewModel.prototype.loadData = function () {
        this._examples.push({ Id: "1", title: "Chart", group: "controls", description: "Telerik Chart for NativeScript", isControl: true });
        this._examples.push({ Id: "2", title: "Series", group: "chart series", description: "All available chart series", isExampleGroup: true });
        this._examples.push({ Id: "3", title: "Line series", group: "chart series", description: "", moduleName: "./chart/series/line/line-series" });
        this._examples.push({ Id: "4", title: "Spline series", group: "chart series", description: "", moduleName: "./chart/series/spline/spline-series" });
        this._examples.push({ Id: "5", title: "Area series", group: "chart series", description: "", moduleName: "./chart/series/area/area-series" });
        this._examples.push({ Id: "6", title: "Stacked Area series", group: "chart series", description: "", moduleName: "./chart/series/area/stacked-area-series" });
        this._examples.push({ Id: "7", title: "Bar series", group: "chart series", description: "", moduleName: "./chart/series/bar/bar-series" });
        this._examples.push({ Id: "8", title: "Stacked Bar series", group: "chart series", description: "", moduleName: "./chart/series/bar/stacked-bar-series" });
        this._examples.push({ Id: "9", title: "Bubble series", group: "chart series", description: "", moduleName: "./chart/series/bubble/bubble-series" });
        this._examples.push({ Id: "10", title: "Scatter Bubble series", group: "chart series", description: "", moduleName: "./chart/series/bubble/scatter-bubble-series" });
        this._examples.push({ Id: "11", title: "Donut series", group: "chart series", description: "", moduleName: "./chart/series/donut/donut-series" });
        this._examples.push({ Id: "12", title: "Pie series", group: "chart series", description: "", moduleName: "./chart/series/pie/pie-series" });
        this._examples.push({ Id: "13", title: "Candlestick series", group: "chart series", description: "", moduleName: "./chart/series/financial/candlestick-series" });
        this._examples.push({ Id: "14", title: "Ohlc series", group: "chart series", description: "", moduleName: "./chart/series/financial/ohlc-series" });
        this._examples.push({ Id: "15", title: "Scatter series", group: "chart series", description: "", moduleName: "./chart/series/scatter/scatter-series" });
        this._examples.push({ Id: "16", title: "Legend", group: "chart series", description: "Chart legend", isExampleGroup: true });
        this._examples.push({ Id: "17", title: "Legend overview", group: "chart series", description: "", moduleName: "./chart/legend/chart-legend" });
        this._examples.push({ Id: "18", title: "Styling", group: "chart series", description: "Chart styling", isExampleGroup: true });
        this._examples.push({ Id: "19", title: "Styling chart axes", group: "chart series", description: "", moduleName: "./chart/styling/styling-axes" });
        this._examples.push({ Id: "20", title: "Styling chart grid", group: "chart series", description: "", moduleName: "./chart/styling/styling-grid" });
        this._examples.push({ Id: "21", title: "Styling series", group: "chart series", description: "", moduleName: "./chart/styling/styling-series" });
        this._examples.push({ Id: "18", title: "Axes", group: "chart series", description: "Demos of the different axes", isExampleGroup: true });
        this._examples.push({ Id: "19", title: "Multiple axes", group: "chart series", description: "", moduleName: "./chart/axes/multiple/multiple-axes" });
        this._examples.push({ Id: "20", title: "Customization", group: "chart series", description: "", moduleName: "./chart/axes/customization/axes-customization" });
        this._examples.push({ Id: "21", title: "SideDrawer", group: "controls", description: "Telerik SideDrawer for NativeScript", isControl: true });
        this._examples.push({ Id: "22", title: "Getting started", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/getting-started/getting-started" });
        this._examples.push({ Id: "23", title: "Position", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/position/drawer-position" });
        this._examples.push({ Id: "24", title: "Transitions", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/transitions/drawer-transitions" });
    };
    Object.defineProperty(AppViewModel.prototype, "examples", {
        get: function () {
            return this._examples;
        },
        enumerable: true,
        configurable: true
    });
    return AppViewModel;
})(observable.Observable);
exports.AppViewModel = AppViewModel;
exports.appModel = new AppViewModel();
