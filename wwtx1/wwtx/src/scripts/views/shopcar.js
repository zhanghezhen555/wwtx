var tplShopcar = require('../tpl/shopcar.string');

SPA.defineView('shopcar',{
  html:tplShopcar,
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
    
