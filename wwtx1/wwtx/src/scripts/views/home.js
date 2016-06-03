var tplHome = require('../tpl/home.string');

SPA.defineView('home',{
  html:tplHome,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
    	vm.banners = [];
    	vm.stores = [];
    	vm.newss = [];
    	vm.news = [];
    	vm.adsbig = [];
    	vm.goods = [];
    }
  }],
  
   init:{	
   	homeSwiper:null,
   	vm:null,
   	
   	getData:function(vm,url,prams){
   		getajax.getAction(url,prams,function(data){
//		  	console.log(data);
		  	vm.banners = data.banners;
		  	vm.stores = data.stores;
        vm.adsbig = data.adsbig;
        var da = data.news;
        var da1 = data.goods;
        getData1(da);
        getData1(da1);
        vm.newss = da;
        da = da.slice(0,2);
        vm.news = da;
        vm.goods = da1;
        
        function getData1(da){
	      	for(var i=0; i<da.length; i++){
			    		da[i].goods_thumb = "http://www.wwtx.org/" + da[i].goods_thumb;
			    		da[i].market_price = "￥" + da[i].market_price;
			    }
	      	return da;
	      }
		  })		  
   	}
   	
//  getData: function(vm){
// 	var that = this;
//    $.ajax({
//      url:"http://101.200.76.57:9090/api/v1/home/index",
//      type: "get",
//      success:function(res){
//      	var data = res.data;
//      	vm.banners = data.banners;
//      	vm.stores = data.stores;
//      	vm.adsbig = data.adsbig;
//      	var da = data.news;
//      	var da1 = data.goods;
//      	getData1(da);
//      	getData1(da1);
//      	da = da.slice(0,2);
//      	vm.news = da;
//      	vm.goods = da1;
//    	console.log(data.goods);
//      	
//      }
//    });
//    
//    function getData1(da){
//    	for(var i=0; i<da.length; i++){
//		    		da[i].goods_thumb = "http://www.wwtx.org/" + da[i].goods_thumb;
//		    		da[i].market_price = "￥" + da[i].market_price;
//		    }
//    	return da;
//    }
//  },
    
	},

  bindEvents: {
  	"beforeShow": function(){
  		
			var that = this;
		  var vm = that.getVM();
		  //that.getData(vm);
		  
//		  that.getData(vm,'/wwtx/mock/home.json',{});
			that.getData(vm,'http://101.200.76.57:9090/api/v1/home/index',{});
      
		  setTimeout(function(){
		  	var mySwiper = new Swiper('.swiper-container',{
			      autoplay: 1000,
			      loop:true,
	        	pagination: '.swiper-pagination',
	        	autoplayDisableOnInteraction : false
		  	});
		  },1000);		  
//		 $('.swiper-pagination-bullet-active').css('background','white');
//		 mySwiper.bullets[mySwiper.activeIndex].style.background='white';
			
			
			setTimeout(function(){
				var n = 1;
	      var myScroll = that.widgets.homeScroll;
	      myScroll.scrollBy(0,-30);
	      
	      myScroll.on('scrollEnd', function () {
            if (this.y >= -30 && this.y < 0) {
              myScroll.scrollTo(0, -30);
            } 
            else if (this.y >= 0) {
//            ajax下拉刷新数据
//            that.getData(vm,'/wwtx/mock/home.json',{});       
							that.getData(vm,'http://101.200.76.57:9090/api/v1/home/index',{});
              myScroll.scrollTo(0, -30);
            }

            var maxY = this.maxScrollY - this.y;
            if (maxY > -30 && maxY < 0) {
              var self = this;
              myScroll.scrollTo(0, self.maxScrollY + 30);
            }
            else if (maxY >= 0) {
//            ajax上拉加载数据
              var self = this;
//            console.log(n)  
			
//							var url = '/wwtx/mock/home'+ n++ +'.json';
							var url = 'http://101.200.76.57:9090/api/v1/home/index?page='+n++;
							getajax.getAction(url,{},function(data){
								var da = data.goods;
								getData1(da);
								var str = "";
								for(var i=0; i<da.length; i++){
									str += '<div>'+
														'<a href = "#"><img src = '+da[i].goods_thumb+' /></a>'+
														'<div>'+
															'<p text = '+da[i].goods_name+'></p>'+
															'<p text = '+da[i].market_price+'></p>'+
														'</div>'+
													'</div>';
								}
								$('.goods1').append(str);
								
								function getData1(da){
					      	for(var i=0; i<da.length; i++){
							    		da[i].goods_thumb = "http://www.wwtx.org/" + da[i].goods_thumb;
							    		da[i].market_price = "￥" + da[i].market_price;
							    }
					      	return da;
					      }
							});
							
							if(n == 5){
								n=1;
							}
              myScroll.scrollTo(0, self.y + 30);
            }
        })
      
			},0);
	
  	}
  },
           
   bindActions: {
    "change-one":function(){
   		var vm = this.getVM();
   		var new2 = [];
   		var new1 = vm.news[1];
   		var n;
   		for(var i=0; i<vm.newss.length; i++){
   			new2[i] = vm.newss[i];
   			if(new1.goods_id == vm.newss[i].goods_id){
   				n = i+1;
   			}
   		}
// 		设置为奇数
// 		new2 = new2.slice(0,9);
   		if(n == new2.length){
   			n = 0;
   			vm.news = new2.slice(n,n+2);
   		}
   		else if(n == new2.length-1){
   			var a = new2[new2.length-1];
   			var b = new2[0];
   			n = 0;
   			vm.news = [a,b];
   		}
   		else{
   			vm.news = new2.slice(n,n+2);
   		}
   		
    },
 }
 
 
})
    
