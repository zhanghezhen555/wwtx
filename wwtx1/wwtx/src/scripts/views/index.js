var tplIndex = require('../tpl/index.string');
var GetQueryString=function(name)
            {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return  unescape(r[2]);
                return 'classes';
            }
  var id = GetQueryString("id");
  //alert(id);
SPA.defineView('index',{
	html:tplIndex,
	plugins: ['delegated'],
	
	modules: [{
        name: 'indexContent',
        container: '.m-index-body',
        views: ['home', 'classes', 'show', 'shopcar', 'my'],
        defaultTag: id
    }],
    
    
    bindActions: {
        'tap.switch': function(el, data) {
            this.modules.indexContent.launch(data.tag);
			$(el.el).addClass('active').siblings().removeClass('active');
        }
    },
    bindEvents: {
        'beforeShow': function() {

        }
    }
})
