var tplMy = require('../tpl/my.string');

SPA.defineView('my',{
  html:tplMy,
plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
      
    }
  },
      
       
   bindActions: {
       'go-register': function() {
       		console.log(1);
           SPA.open('register');
       }
   }
})
    
