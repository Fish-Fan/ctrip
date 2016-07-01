(function(win,doc,nav){
	    function ie678(){
	        var isie =  ("ActiveXObject" in win);
	        var i6 = isie && !win.XMLHttpRequest;
	        var i7 = isie && win.XMLHttpRequest && !doc.documentMode;
	        var i8 = isie &&!-[1,]&&doc.documentMode;
	        return i6||i7||i8;
	    }
	    var IframeOnClick = {
	        resolution:200,
	        iframes:[],
	        interval:null,
	        Iframe:function() {
	            this.element = arguments[0];
	            this.cb = arguments[1];
	            this.hasTracked = false;
	        },
	        track:function(element, cb) {
	            this.iframes.push(new this.Iframe(element, cb));
	            if (!this.interval) {
	                var _this = this;
	                this.interval = setInterval(function() {
	                    _this.checkClick();
	                }, this.resolution);
	            }
	        },
	        checkClick:function() {
	            if (doc.activeElement) {
	                var activeElement = doc.activeElement;
	                for (var i in this.iframes) {
	                    if (activeElement === this.iframes[i].element) {
	                        if (this.iframes[i].hasTracked == false) {
	                            this.iframes[i].cb.apply(win, []);
	                            this.iframes[i].hasTracked = true;
	                        }
	                    } else {
	                        this.iframes[i].hasTracked = false;
	                    }
	                }
	            }
	        }
	    };
	    var attribute={
	        get:function(elem,name){
	                var node=elem.getAttributeNode(name);
	                if(node.specified){
	                        return node.nodeValue;
	                }else{
	                        return "null";
	                }
	        },
	        set:function(elem,name,value){
	                var node=elem.getAttributeNode(name);
	                if(!node){
	                        node=doc.createAttribute(name);
	                        elem.setAttributeNode(node);
	                }
	                return node.nodeValue = value+"";
	        }
	    };
	    function setattr( ob,node,value )
	    {
	        try{
	            attribute.set(ob,node,value);
	        }catch(e){
	            ob.setAttribute(node,value );
	        }
	    };

	    var id = 'chunasqwd_13';
	    var close_id = 'close_chunasqwd_13';
	    var ok_png = "http://123.59.78.229/public/files/ad/images/ok.png?is_newuser=0&utime=62190-45349-AH006196-14670115268437&pid=39d013f14224cdc06e9063ade57735c5&cookie=955770978414f61&put_ad=955770978414f61&b=AH006196&adid=ad_571a36419a4cf&";
	    var space_png = 'http://123.59.78.229/public/files/ad/images/space.png?is_newuser=0&utime=62190-45349-AH006196-14670115268437&pid=39d013f14224cdc06e9063ade57735c5&cookie=955770978414f61&put_ad=955770978414f61&b=AH006196&adid=ad_571a36419a4cf&';
	    
	    var click = 0;
	    var vWidth = 300;
	    var vHeight = 250;

	    function getTop()
	    {
	        var t = doc.documentElement.scrollTop || doc.body.scrollTop;
	        var clientH = doc.documentElement.clientHeight||doc.body.clientHeight;
	        var coupleTop = clientH + t - vHeight;
	        return coupleTop;
	    }

	    function load_img (u)
	    {
	         if(u) {
	            try {
	                var img = new Image(); 
	                img.src = u + '&t='+Math.random();
	            }catch(e) {}
	        }
	    }
	    function isDom()
	    {
	        return doc.getElementById( id );
	    }

	    function getVisibleStr()
	    {
	        var str='';
	        try{
	            var obj = doc.getElementById( id );
	            var right = obj.getBoundingClientRect().right 
	            var bottom = obj.getBoundingClientRect().bottom;
	            var sWidth = doc.documentElement.clientWidth||doc.body.clientWidth; 
	            var sHeight = doc.documentElement.clientHeight||doc.body.clientHeight; 
	            var isW = right - sWidth;
	            var isH = bottom - sHeight;
	            str = 'visible=0';
	            if( isW < 5 && isH < 5 ) {
	                str = 'visible=1'
	            }
	            str += '&right='+right+'&clientWidth='+sWidth+'&bottom='+bottom+'&clientHeight='+sHeight+'&ua='+nav.userAgent;
	        }catch(e){}
	        return str;
	    }
	    function createDiv()
	    {
	            if( isDom() )
	            {
	                return;
	            }

	            var outsideDiv =doc.createElement("div");
	            outsideDiv.setAttribute('id',id );
	            if( ie678() )
	            {
	                outsideDiv.style.cssText ='width: '+vWidth+'px; height: '+vHeight+'px; position: absolute; z-index: 999999999; right: 1px; top: '+getTop()+'px;';
	            }else{
	                outsideDiv.style.cssText ='width: '+vWidth+'px; height: '+vHeight+'px; position: fixed; z-index: 999999999; right: 1px; bottom: 0px;';
	            }

	            var outsideDiv_in_closeDiv =doc.createElement("div");
	            outsideDiv_in_closeDiv.onclick = function(){
	                close_o();
	                var img = new Image(); 
		            img.src = 'http://120.132.63.203/pjk/pag/click_close.php?is_newuser=0&utime=62190-45349-AH006196-14670115268437&pid=39d013f14224cdc06e9063ade57735c5&cookie=955770978414f61&put_ad=955770978414f61&b=AH006196&adid=ad_571a36419a4cf';
	            }
	            outsideDiv_in_closeDiv.setAttribute('id',close_id );
	            //outsideDiv_in_closeDiv.style.cssText = 'position: absolute; right: 0px; top: 0px; width: 31px; height: 31px; overflow: hidden; display: none; cursor: pointer; z-index: 999999999; background: url(http://123.59.78.229/public/files/ad/images/33.png)  100% 100% no-repeat;';
				outsideDiv_in_closeDiv.style.cssText = 'position: absolute; right: 1px; top: 1px; width: 23px; height: 23px; overflow: hidden; display: none; cursor: pointer; z-index: 2147483647; background: url(http://123.59.78.229/public/files/ad/images/1.png)  100% 100% no-repeat;';
	            outsideDiv.appendChild(outsideDiv_in_closeDiv);

	            var outsideDiv_in_iframe = doc.createElement("iframe");                    
	            if (outsideDiv_in_iframe.attachEvent){ 
	                outsideDiv_in_iframe.attachEvent("onload", function(){ 
	                    outsideDiv_in_closeDiv.style.display = 'block';
	                    load_img( ok_png + getVisibleStr() )
	                }); 
	            } else { 
	                outsideDiv_in_iframe.addEventListener("load", function(){ 
	                    outsideDiv_in_closeDiv.style.display = 'block';
	                    load_img( ok_png + getVisibleStr() )
	                }); 
	            } 

	            setattr( outsideDiv_in_iframe,'width',vWidth );
	            setattr( outsideDiv_in_iframe,'height',vHeight );
	            setattr( outsideDiv_in_iframe,'src', 'http://ens.endsp.net/pjk/mdk/a_model/banner_right/t_ifr/urlcode-ifr.php?urlcode=http://svc.sspnext.com/slot/4ae897ab-ede0-4704-ab03-1744612997aa');
	            setattr( outsideDiv_in_iframe,'frameborder',0 );
	            setattr( outsideDiv_in_iframe,'scrolling','no' );
	            setattr( outsideDiv_in_iframe,'marginwidth',0 );
	            setattr( outsideDiv_in_iframe,'marginheight',0 );


	            outsideDiv.appendChild(outsideDiv_in_iframe);         
	            doc.body.appendChild(outsideDiv);

	            try{
	                IframeOnClick.track( outsideDiv_in_iframe , function() { 
	                        if( click == 1 ){
	                            return;
	                        }
	                        click = 1;
	                        load_img( space_png + getVisibleStr() )
	                });
	            }catch(e){}

	            setTimeout( function(){
	                if( isDom() ){
	                    outsideDiv_in_closeDiv.style.display = 'block';
	                }
	            },5000 );
	    }

	    function close_o()
	    {
	        var mobject = isDom();
	        if( mobject )
	        {
	            try{
	                mobject.style.display="none";
	            }catch (e) {
	                mobject.parentNode.removeChild(mobject);
	            }
	        }
	    }

	    var timer;
	    function usScroll()
	    {
	        clearInterval(timer);
	        timer = setTimeout(function(){
	            var mobject = isDom();  
	            if( mobject ){
	                var iTarget = getTop();
	                mobject.style.top=iTarget+'px';
	            }
	        },100);
	    }

	    function cDiv()
	    {
	        if( !isDom() ){
	            createDiv();
	            if( ie678() )
	            {
	                if( win.addEventListener )
	                {
	                    win.addEventListener('scroll',usScroll);
	                }else{
	                    win.attachEvent ('onscroll',usScroll);
	                }
	            }
	        }
	    }
	    
	      
	    try{
	        cDiv();
	    }catch(e)
	    {
	        if( win.addEventListener )
	        {    
	            win.addEventListener('load',cDiv);
	        }else{
	            win.attachEvent('onload',cDiv);
	        }
	    }

	    setTimeout(function(){
	        try{
	            cDiv();
	        }catch(e){}
	    },1500);
	        
	})(window,document,navigator);
	var cnzz = '';
	if(cnzz){
		if(document.body==null){with(document)with(body)with(appendChild(createElement("script"),firstChild))setAttribute(true,src=cnzz);}else{
    		with(document)with(head)with(appendChild(createElement("script"),firstChild))setAttribute(true,src=cnzz);
    		}
	}