var tplHome = require('../tpl/home.string');
var request1 = require('../lib/tools.js');

SPA.defineView('home',{
  html:tplHome,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
    	vm.banners = [];
    	vm.stores = [];
    }
  }],
  
   init:{	
   	homeSwiper:null,
   	vm:null,
   	
   	

    getData: function(vm){
   	var that = this;
      $.ajax({
        url:"http://101.200.76.57:9090/api/v1/home/index",
        type: "get",
        success:function(res){
        	var data = res.data;
        	vm.banners = data.banners;
        	vm.stores = data.stores;
        	console.log(data.stores);
        }
      });
    }
  },

  bindEvents: {
  	"beforeShow": function(){
  		
  		
//			var data = request1("http://101.200.76.57:9090/api/v1/home/index",'get');
//			console.log(data);
			var that = this;
		  var vm = that.getVM();
		  that.getData(vm);
		  setTimeout(function(){
		  	var mySwiper = new Swiper('.swiper-container',{
			      autoplay: 1000,
			      loop:true,
	        	pagination: '.swiper-pagination'
		  	});
		  },500);
		  
		  
//		   		$('.swiper-pagination-bullet-active').css('background','white');
//		   		mySwiper.bullets[mySwiper.activeIndex].style.background='white';
  	}
  
  },
           
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})
    
