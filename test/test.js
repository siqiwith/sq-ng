import "../grid/grid.js";

export default angular.module('testApp', ["sq.ng.grid"])
	.controller('TestCtrl', function ($scope, $sce, $interval) {
		var i = 4;
		$scope.gridColumns = [{
			name: "name",
			label: "Name",
			forceRender: true,
			sortable: true,
			formatter: null,
			rawSort: false,
			comparator: null

		}, {
			name: "address",
			label: "Address",
			sortable: true,
			formatter: null
		}, {
			name: "company",
			label: "Company",
			sortable: true,
			formatter: function(rawValue, rowData){
				if(rawValue){
					var company = rowData["company"];
					var classStr = "";
					var result = '<a href="#" data-compnay-name="' + company + '" class="' + classStr + '">'
					+ company
					+ '</a>'
					return $sce.trustAsHtml(result);
				}else{
					return rawValue;
				}
			}
		}];
		
		var initData = [{
            "id": 1, 
            "name": "Xiao Ming, Zhang",
            "address": "555, West Rd, Shanghai, China",
            "company": "Xi Min Inc",
            "status": 3,
            "timestamp": "2015-03-25T13:53:05.480082+08:00"
        },
        {
            "id": 2,
            "name": "Steve, Million",
            "address": "155, Forest Rd, Torondo, Canada",
            "company": "Wood Flavor Inc",
            "status": 3,
            "timestamp": "2015-03-25T14:06:18.010658+08:00"
        },
        {
            "id": 3,
            "name": "Ferondo, Zimanak",
            "address": "521, Smanki, Tokyo, Japan",
            "company": "Sushi Cart Inc",
            "status": 3,
            "timestamp": "2015-03-25T14:06:18.010658+08:00"
        }];
		
		$scope.gridData = initData;
		
		$scope.gridOptions = {
			hasClearState: false	
		};
		
		$scope.$on("onServerSideSort", function(event, sortInfo){
			console.log(event);
			if(sortInfo.sortType == "ascending"){
				$scope.gridData.sort(function(a, b){
					return a[sortInfo.sortBy] > b[sortInfo.sortBy] ? 1 : -1;
				});
			}else if(sortInfo.sortType == "descending"){
				$scope.gridData.sort(function(a, b){
					return a[sortInfo.sortBy] < b[sortInfo.sortBy] ? 1 : -1;
				});
			}else if(sortInfo.sortType == "clear"){
				// Currently cannot clear the sort
//				$scope.gridData.sort(function(a, b){
//					sortInfo.sortType
//				});
			}

		});
	});