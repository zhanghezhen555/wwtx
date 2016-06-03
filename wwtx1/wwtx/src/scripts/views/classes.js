var tplClasses = require('../tpl/classes.string');

SPA.defineView('classes',{
  html:tplClasses,
plugins: ['delegated',{
	name:'avalon',
	options:function(vm){
		
	}
	
}],

  bindEvents: {
    'beforeShow': function () {
     
    }
  },
      
       
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})

    