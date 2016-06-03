
window.getajax = (function() {

		function getAction(server, params, fun1) {
			$.ajax({
			type: "get",
			url: server,
			dataType: 'json',
			data: params,
			success: function(result) {
				if(result.code == 0){
					if ($.isFunction(fun1)) {
//						console.log(result.data);
						fun1(result.data);
					}
				}
				else{
					alert("数据有误，请稍后重试！");
				}
			},
			error: function() {
				alert("服务器错误，请稍后重试！");
			}
		});
	}
		
	return {
		getAction: getAction
	};
		
})();
