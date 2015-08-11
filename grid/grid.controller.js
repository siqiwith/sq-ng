var widgetId = 1;

export default class GridController{
	constructor($scope){
		this.$scope = $scope;
		this.id = "sq-grid-" + widgetId++;
	}
	
	sort(e, column){
		if(!column.sortable){
			return;
		}
		if(column.sortType == "ascending"){
			if(this.options.hasClearState){
				this.columns.forEach(function(val, idx){
					val.sortType = null;
				});

				this.$scope.$emit("onServerSideSort", {
					sortBy: column.name,
					sortType: "clear"
				});
			}else{
				this.columns.forEach(function(val, idx){
					if(val.name != column.name){
						val.sortType = null;
					}else{
						val.sortType = "descending";
					}
					
				});
				this.$scope.$emit("onServerSideSort", {
					sortBy: column.name,
					sortType: "descending"
				});
			}

		}else if(column.sortType == "descending"){
			this.columns.forEach(function(val, idx){
				if(val.name != column.name){
					val.sortType = null;
				}else{
					val.sortType = "ascending";
				}
				
			});
			this.$scope.$emit("onServerSideSort", {
				sortBy: column.name,
				sortType: "ascending"
			});
		}else{
			this.columns.forEach(function(val, idx){
				if(val.name != column.name){
					val.sortType = null;
				}else{
					val.sortType = "descending";
				}
				
			});
			this.$scope.$emit("onServerSideSort", {
				sortBy: column.name,
				sortType: "descending"
			});
		}
	}
}