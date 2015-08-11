const moduleName = "sq.ng.grid";

import config from "../config.js"
import GridController from "./grid.controller.js";

export default angular.module(moduleName, [])
	.controller(moduleName + ".GridController", GridController)
	.directive("sqGridHeadEle", [function(){
		return {
			restrict: "AE",
			replace: true,
			require: "^sqGrid",
			bindToController: true,
			templateUrl: config.templatePath + 'grid/templates/gridHeadEle.html',
		}
	}])
	.directive("sqGridRow", [function(){
		return {
			restrict: "AE",
			replace: true,
			require: "^sqGrid",
			templateUrl: config.templatePath + 'grid/templates/gridRow.html',
		}
	}])
	.directive("sqGrid", [function(){
		return {
			restrict: "AE",
			replace: true,
			scope: {
				options: "=sqGridOptions",
				data: "=sqGridData",
				columns: "=sqGridColumns"
			},
			controller: moduleName+".GridController",
			controllerAs: "ctrl",
			bindToController: true,
			templateUrl: config.templatePath + 'grid/templates/grid.html'
		}
	}]);
