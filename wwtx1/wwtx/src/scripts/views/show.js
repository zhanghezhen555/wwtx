var tplShow = require('../tpl/show.string');

SPA.defineView('show',{
  html:tplShow,
//plugins: ['delegated'],

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
    
