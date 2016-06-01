var tplClasses = require('../tpl/classes.string');

SPA.defineView('classes',{
  html:tplClasses,
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

    