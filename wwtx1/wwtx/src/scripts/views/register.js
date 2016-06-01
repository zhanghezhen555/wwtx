var tplRegister = require('../tpl/register.string');

SPA.defineView('register',{
  html:tplRegister,
plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
     
    }
  },
      
       
   bindActions: {
       'hide-register': function() {
           this.hide();
       }
   }
})

   