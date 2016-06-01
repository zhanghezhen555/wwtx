var Request1 = function(url1,type1){
	$.ajax({
        url:url1,
        type: type1,
        success:function(res){
        	if(res.code == 0){
//      		console.log(res.data);
				var data = res.data;
				
        	}
        	else{
        		alert("数据有误，请稍后重试！");
        	}
        },
        error:function(){
        	alert("服务器发生错误，请稍后重试！");
        }
      });
	return a;
}

module.exports=Request1;
