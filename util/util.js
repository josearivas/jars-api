exports.setColumnValue = function(value, name) {
	if(value === undefined)
		return 'COALESCE(' + null + ',' + name + ')';
	else
		return 'COALESCE("' + value + '",' + name + ')';	
}