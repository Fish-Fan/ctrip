﻿
var sso_consts = {
    sso_logintype_member: '0',
    sso_logintype_card: '1',
    sso_logintype_quick: '3',
    sso_logintype_phone: '6',

    sso_tip_name: '用户名/卡号/手机/邮箱',
    sso_tip_mobile: '请输入注册手机号',
    sso_tip_dyncpwd: '动态密码',
    sso_tip_cardname: '中文/拼音',
    sso_tip_verycode: '不区分大小写',

    sso_error_emptyuid: '请您输入登录名。',
    sso_error_emptypwd: '请您输入密码。',
    sso_error_emptyverycode: '请您输入验证码。',
    sso_error_verycode: '验证码错误。',

    sso_error_emptyDyncPwd: '请输入动态密码。',
    sso_error_emptyDyncPhone: '请输入手机号码。',

    sso_error_emptyCardName: '请您输入卡名。',
    sso_error_wrongUid: '您输入的登录名不正确。',
    sso_error_wrongPwd: '您输入的密码不符合规则。',
    sso_error_wrongPhone: '请填写正确的手机号。',

    sso_error_WaitForTry: '请稍后再试。',
    rootUrl: ssoVariables.H1 + '://' + ssoVariables.AjaxUrl

};

//公有配置
var sso_Config = {
    url: {
        verifyCodeUrl: sso_consts.rootUrl + '/member/ajax/NewVerifyCodeHandler.ashx',
        verifyCodePhoneUrl: sso_consts.rootUrl + '/member/ajax/VerifyCodePhoneHandler.ashx'
    },
    jsonpUrl: {
        checkIsBlack: sso_consts.rootUrl + '/member/ajax/AjaxChkBWGAndVerifyCode.ashx?jsonp=JSP.checkIsBlack', //返回值： N：不需要验证码，T:需要验证码
        checkIsBlackForMobile: sso_consts.rootUrl + '/member/ajax/AjaxChkBWGAndVerifyCode.ashx?st=sls&jsonp=JSP.checkIsBlackForMobile', //返回值： N：不需要验证码，T:需要验证码
        checkVerifyCode: sso_consts.rootUrl + '/member/ajax/CheckVerifyCode.aspx?', //返回值 ：1 ：验证码正确，0：验证码错误
        getCodePhoneImage: sso_consts.rootUrl + '/member/ajax/VerifyCodeHandlerChange.aspx?jsonp=JSP.getImageCodePhone', //返回值：getImageCode({"code":"07EC0D7642F57FC2A5AF4CE21BACF25B68326DDAF164A51C7AACA00425F8A6DA27D971CF33E8271B"})
        login: sso_consts.rootUrl + '/member/NewPostLogin.aspx?jsonp=JSP.login',
        sendDyncPwd: sso_consts.rootUrl + '/member/ajax/GetDynamicPwdHandler.ashx?jsonp=JSP.sendDyncPwd',
        getChannelData: sso_consts.rootUrl + '/member/ajax/GetChannelData.ashx?jsonp=getChannelData',
        checkCoCard: sso_consts.rootUrl + '/member/ajax/AjaxCheckCoCard.aspx',
        AjaxGetCoCardUid: sso_consts.rootUrl + '/member/ajax/AjaxGetCoCardUid.aspx',
        simpleValidateCode: sso_consts.rootUrl + '/member/ajax/NewVerifyCodeByLevelHandler.ashx',
        checkLoginStatus: sso_consts.rootUrl + '/member/ajax/AjaxCheckLoginStatus.aspx',
        CheckIsCtripCard: sso_consts.rootUrl + '/member/ajax/CheckIsCtripCard.ashx',
        CheckIsDisplayPhoneCode: sso_consts.rootUrl + '/member/ajax/CheckDynamicPwdIsVCode.ashx'
    },
    thirdUrl: {
        popalipay: sso_consts.rootUrl + '/member/alipayLogin/AlipayAuthorize.aspx', //支付宝
        popqq: sso_consts.rootUrl + '/member/QQLogin/QQAuthorize.aspx', //QQ
        popweibo: sso_consts.rootUrl + '/member/SinaLogin/SinaAuthorize2.aspx', //新浪微博
        popnete: sso_consts.rootUrl + '/member/neteLogin/NeteAuthorize.aspx', //网易
        poprenren: sso_consts.rootUrl + '/member/RenrenLogin/Authorize.aspx', //人人
        popbaidu: sso_consts.rootUrl + '/member/BaiduLogin/BauiduAuthorize.aspx' //百度
    }
};


//    var ssoMaskType = $__SSO_ID("sso_MaskType"); //蒙版类型，读隐藏域，个PD配置
var ssoMaskDivHtml = "<div class='login_popup login_popup_gs' id='sso_maskDIv' style='display:none' >"
+ "<div class='lg_main' id='sso_memberlogin'><div class='lg_hd'>"
+ "<div class='lg_sale'><i class='lg_ico_sale'></i>登录可享：积分换礼、预订返现、更快速的预订</div></div>"
+ "<div class='lg_switch'><label class='lg_label' id='sso_domUser' ><input type='radio' name='2' checked='checked' id='sso_memberRadio'>普通登录</label>"
+ "<label class='lg_label' id='sso_phonePwd' ><input type='radio' name='2' id='sso_cardRadio'>手机动态密码登录</label></div>"
+ "<ul class='lg_form' style='display: block;' id='sso_domUserUl'>"
+ "<li><label class='lg_form_label'>登 录 名</label><input type='text' value='用户名/卡号/手机/邮箱' class='lg_input_text lg_input_unfocus' id='sso_txtUid' value='" + sso_consts.sso_tip_name + "'></li>"
+ "<li><label class='lg_form_label'>密&nbsp; &nbsp;码</label><input type='password' class='lg_input_text' id='sso_txtPwd' maxlength='20' onpaste='return false;' onkeydown='sso_member_enter();' oncontextmenu='return false;' oncopy='return false;' oncut='return false;'>"
+ "&nbsp;<a href='https://accounts.ctrip.com/member/PassWord/VerifyUserInfo.aspx' id='sso_forgetPwd' target='_blank'>忘记密码？</a></li>"
+ "<li id='sso_divVerifyCode' style='display: none;'><label class='lg_form_label' >验 证 码</label>"
+ "<input type='text' class='lg_input_text lg_input_small lg_input_unfocus' maxlength='6' name='verifyCode' id='sso_verifyCode' autocomplete='off' value='" + sso_consts.sso_tip_verycode + "' onkeydown='sso_member_enter();'>"
+ "&nbsp;<img width='88' height='32' alt='' id='sso_imgCode'></li>"
+ "<li id='sso_domErrorli' style='display: none;'><div class='lg_form_wrap' ><div class='base_error' id='sso_membererror' style='visibility: hidden;'><i class='lg_ico_alert'></i>登录名或密码错误</div></div></li>"
+ "<li><div class='lg_form_wrap'><label class='lg_label'><input type='checkbox' name='' checked='checked' id='sso_chkAutoLogin'>30天内自动登录</label></div>"
+ "</li><li class='lg_form_btn'><div class='lg_form_wrap'><input type='button' value='登 录' class='lg_btn' id='sso_btnSubmit'>&nbsp;<a href='javascript:;' id='sso_register'>免费注册</a></div></li></ul>"
+ "<ul class='lg_form' style='display: none;' id='sso_phonePwdUl'><li><label class='lg_form_label'>手 机 号</label><input type='text' id='sso_mobilePhone' value='" + sso_consts.sso_tip_mobile + "' class='lg_input_text lg_input_unfocus'></li>"
+ "<li id='sso_phoneCodeLi' style='display:none'><label class='lg_form_label'>验 证 码</label><input type='text' class='lg_input_text lg_input_small lg_input_unfocus' maxlength='6' id='sso_txtCodePwd' value='" + sso_consts.sso_tip_verycode + "'>"
+ "&nbsp;<img width='88' height='32' alt='' id='sso_imgCodePhone'></li>"
+ "<li><label class='lg_form_label'>密&nbsp; &nbsp;码</label><input type='password'  class='lg_input_text lg_input_small lg_input_unfocus' id='sso_dyPwdFirst' onkeydown='sso_phone_enter();'>&nbsp;<a href='javascript:;' class='lg_btn3' id='sso_reSend'>发送动态密码</a></li>"
+ "<li id='sso_phoneLoginErr' style='display: none'><div class='lg_form_wrap' style='display: ;'><div class='base_error' id='sso_dymembererror'><i class='lg_ico_alert'></i>登录名或密码错误</div></div></li>"
+ "<li id='sso_phoneLoginTip' style='display: none'><div class='lg_form_wrap' style='display: ;'><div class='base_success'><i class='lg_ico_success'></i>动态密码已发送至您的手机，请注意查收。</div></div></li>"
+ "<li><div class='lg_form_wrap'><label class='lg_label'><input type='checkbox' name='' checked='checked' id='sso_chkAutoLoginDy'>30天内自动登录</label></div>"
+ "<li class='lg_form_btn'><div class='lg_form_wrap'><input type='button' value='登&emsp;录' class='lg_btn' id='sso_btnSubmitLogin' />&nbsp;<a href='javascript:;' id='sso_register2'>免费注册</a></div></li></ul>"
+ "<div class='lg_others'>"
+ "其他登录：<a href='javascript:;' id='sso_clogin'>合作卡</a> | <a href='http://www.ctrip.com/crptravel/' target='_parent'>公司客户</a></div></div>"

+ "<div class='lg_main' id='sso_commonlogin' style='display: none'><div class='lg_hd'><strong>合作卡登录</strong></div><input type='hidden' id='sso_hidSourceId' name='sso_hidSourceId' value='1' /><ul class='lg_form'>"
+ "<li><label class='lg_form_label'>合 作 卡</label><input type='text' id='sso_cardName' class='lg_input_text lg_input_unfocus' mod='address' mod_address_source='Alliance' mod_address_reference='sso_hidSourceId' mod_notice_tip='" + sso_consts.sso_tip_cardname + "' value='" + sso_consts.sso_tip_cardname + "' /></li>"
+ "<li><label class='lg_form_label'>登 录 名</label><input type='text' id='sso_txtCUid'  value='" + sso_consts.sso_tip_name + "' class='lg_input_text lg_input_unfocus' /></li>"
+ "<li><label class='lg_form_label'>密&nbsp;&emsp;&nbsp;码</label><input type='password' class='lg_input_text'  maxlength='20' id='sso_txtcPwd' onpaste='return false;' oncontextmenu='return false;' oncopy='return false;' onkeydown='sso_card_enter();' oncut='return false;' />"
+ "&nbsp;<a href='javascript:;' id='sso_lkbtnGetPwd'>忘记密码？</a> </li><li id='sso_cardError' style='display: none'><div class='lg_form_wrap' style='display: ;'><div class='base_error'  id='sso_commonerror'><i class='lg_ico_alert'></i>登录名或密码错误</div></div></li>"
+ "<li class='lg_form_btn'><div class='lg_form_wrap'><input type='button' value='登&emsp;录' class='lg_btn' id='sso_btnCSubmit' />&nbsp;<a href='javascript:;' id='sso_openCard'>注册开卡</a></div></li>"
+ "</ul><div class='lg_others'><a href='javascript:;' class='lg_goback' id='sso_mlogin'>&lt; 返回普通会员登录</a></div></div>"

+ "<div class='lg_gs'><h3>第三方帐号登录</h3><ul class='lg_account_list'><li><a href='javascript:;'><span><i class='lg_ico_sina' id='sso_sina'></i></span>新浪微博</a></li><li><a href='javascript:;'><span><i class='lg_ico_qq' id='sso_qq'></i></span><p>QQ</p></a></li></ul>"
+ "<ul class='lg_account_list_m'><li><a href='javascript:;' id='sso_baidu'><span><i class='lg_ico_baidu_m' ></i></span>百度</a></li>"
+ "<li><a href='javascript:;' id='sso_renren'><span><i class='lg_ico_renren_m' ></i></span>人人网</a></li>"
+ "<li><a href='javascript:;' id='sso_nete'><span><i class='lg_ico_wangyi_m' ></i></span>网易</a></li><li><a href='javascript:;' id='sso_pay'><span><i class='lg_ico_alipay_m' ></i></span>支付宝</a></li></ul>"
+ "</div><a href='javascript:;' class='lg_close' id='sso_divClose'>×</a></div><iframe id='sso_ifrprocxy' style='display: none;'></iframe>"
//+"<script type='text/javascript' src='" + sso_Config.jsonpUrl.getChannelData + "'></script>";

//var s = document.createElement('div');
//var h = document.getElementsByTagName('body')[0];
//s.innerHTML = ssoMaskDivHtml;
//h.appendChild(s);
document.write(ssoMaskDivHtml);


// 登陆失败
function loginFail(data) {
    var corphost = "http://ct.ctrip.com/crptravel/index.aspx?cardno=" + data.uid;
    var errmsg = ['RiskInputVerifyCode', 'RiskControlRule', 'BaojieActivedRule', 'UIDExitsAfterFindRule',
                         'UIDInvaildRule', 'UIDLockedRule', 'UIDInBlackListRule', 'CheckNullUserName',
                         'CheckNullPassword', 'CheckPasswordRule', 'statuslock', 'canResetPwd', 'expireResetPwd', 'TicketSecurityRedirect', 'Exception', 'UnKnowmError',
                         'UIDForbidenRuler', 'DynamicPwdError', 'DynamicPwdPast', 'DynamicPwdIsNull', 'DynamicPwdPhoneIsNull', 'DyException',
                         'NotService', 'CardNotMatch', 'NoSuchUserType', 'NoSuchSourceId', 'CardNotActive', 'CannotLogin', 'CardPleaseActive', 'ResetPasswordByPwdIsNull', "CorpLogin"],

        errmsg_st = ['请输入正确验证码！', '用户名或密码错误！', '激活邮件已发至您宝洁邮箱，请点击链接激活！', '用户名或密码错误！',
                         '已经注销的用户！', '您连续输错密码，锁定30分钟！', '很抱歉，携程无法满足您的服务需求！', '缺少用户名！',
                         '缺少密码！', '用户名或密码错误！', '您的登录密码存在风险，请点击“忘记密码”', '可以重置密码！', '临时码过期！', '<![CDATA[<a href="login.aspx" target="_blank">登录页面</a>登录！]]', '系统错误！', '未知错误！',
                         '您帐号已锁定,如有疑问请拨打客服电话！', '请填写正确的动态密码！', '动态密码已失效，请重新获取！', '请输入动态密码！', '请输入手机号！', '出错了，请稍后再试！',
                         '很抱歉，携程无法满足您的服务需求！', '卡号和公司不匹配！', '没有该类用户！', '没有指定渠道！', '卡号未开通！', '该渠道不允许登录！', '请先激活您的卡！', '您的登录密码存在风险，请点击忘记密码！', '请进入商旅首页<a href=' + corphost + ' target=\"_blank\">登录</a>查询'],

        errmsg_bt = ['請輸入正確驗證碼！', '用戶名或密碼錯誤！', '啟動郵件已發至您寶潔郵箱，請點選連結啟動！', '用戶名或密碼錯誤！',
                         '已經註銷的用戶！', '您連續丟失錯誤密碼，鎖30分鐘！', '很抱歉，攜程無法滿足您的服務需求！', '缺少用戶名！',
                         '缺少密碼！', '用戶名或密碼錯誤！', '您的登錄密碼存在風險，請點擊“忘記密碼”', '可以重置密碼！', '臨時碼過期！', '<![CDATA[<a href="login.aspx" target="_blank">登錄頁面</a>登錄！]]', '系統錯誤！', '未知錯誤！',
                         '您帳號已鎖定,如有疑問請撥打客服電話！', '請填寫正確的動態密碼！', '動態密碼已失效，請重新獲取！', '請輸入動態密碼！', '請輸入手機號！', '出錯了，請稍後再試！',
                         '很抱歉，攜程無法滿足您的服務需求！', '卡號和公司不匹配！', '沒有該類用戶！', '沒有指定渠道！', '卡號未開通！', '該渠道不允許登錄！', '請先激活您的卡！', '您的登錄密碼存在風險，請點擊忘記密碼！'];
    var IsBig5 = function () {
        var thisURL = window.location.hostname.toLowerCase();
        if (thisURL.indexOf(".big5") >= 0 || thisURL.indexOf(".hk") >= 0)
            return true;
        else
            return false;
    }
    if (data.rurl) {
        window.location.href = unescape(data.rurl);
        return;
    }
    var displayMsg = "";
    var notfindMsg = true;
    if (data.errmessage) {
        var i = errmsg.indexOf(data.errmessage);
        if (i > -1) {
            if (IsBig5()) {
                displayMsg = errmsg_bt[i];
            } else {
                displayMsg = errmsg_st[i];
            }
            notfindMsg = false;
        }
    }
    if (data.actionName) {
        var i = errmsg.indexOf(data.actionName);
        if (i > -1) {
            if (IsBig5()) {
                displayMsg = errmsg_bt[i];
            } else {
                displayMsg = errmsg_st[i];
            }
            notfindMsg = false;
        }
    }
    //如果errmessage和actionName都没找到相关的提示语句,说明是直接从前端传回来的,使用场景:任务系统错误提示
    if (!!notfindMsg) {
        if (!!data.errmessage) {
            displayMsg = decodeURIComponent(escape(data.errmessage));   //获取data对象时,调用了一次unescape,此处需要调一下escape再解码
        }
    }
    if (displayMsg === "")
        displayMsg = "系统错误";

    sso_popLogin.showErrors(data.loginType, displayMsg);
    if (sso_divVerifyCode.style.display != 'none' && data.loginType === "0") {
        returnFlag = true;
        sso_popLogin.isBlack();
    }
}
function getReturn(search) {
    var getQueryString = function (search, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    var success = getQueryString(search, 'success'),
    result = {};
    if (success == 'T') {
        result.success = success;
        result.errmessage = getQueryString(search, 'errmessage');
        result.buttonId = getQueryString(search, 'buttonId');
        //        result.merchantsurl = getQueryString(search, 'merchantsurl');
    } else {
        result.success = success;
        result.errmessage = getQueryString(search, 'errmessage');
        result.rurl = getQueryString(search, 'rurl');
        result.actionName = getQueryString(search, 'ActionName');
        result.isNeedModifyPwd = getQueryString(search, 'IsNeedModifyPwd');
        result.uid = getQueryString(search, 'Uid');
        result.coopName = getQueryString(search, 'coopName');
        result.verifyCodeFlag = getQueryString(search, 'VerifyCodeFlag');
        result.loginType = getQueryString(search, 'loginType');
    }
    return result;
}

var $__SSO_ID = function (id) { return document.getElementById(id) }
// 页面元素
var sso_maskDIv = $__SSO_ID('sso_maskDIv'),
//大蒙版DIV
    sso_domUser = $__SSO_ID("sso_domUser"),
//member login & 动态密码 redio
    sso_phonePwd = $__SSO_ID("sso_phonePwd"),
    sso_domUserUl = $__SSO_ID('sso_domUserUl'),
    sso_phonePwdUl = $__SSO_ID('sso_phonePwdUl'),

    sso_memberlogin = $__SSO_ID('sso_memberlogin'),
//memberlogin
    sso_txtUid = $__SSO_ID('sso_txtUid'),
// 用户id输入框
    sso_txtPwd = $__SSO_ID('sso_txtPwd'),
// 密码输入框
    sso_chkAutoLogin = $__SSO_ID('sso_chkAutoLogin'),
//30自动登录
    sso_chkAutoLoginDy = $__SSO_ID('sso_chkAutoLoginDy'),
    //动态密码30天自动登录
    sso_imgCode = $__SSO_ID('sso_imgCode'),
//验证码图片
    sso_divVerifyCode = $__SSO_ID('sso_divVerifyCode'),
// 验证码div
    sso_verifyCode = $__SSO_ID('sso_verifyCode'),
//验证码输入框
    sso_btnSubmit = $__SSO_ID('sso_btnSubmit'),
// 登陆按钮
    sso_membererror = $__SSO_ID('sso_membererror'),
// 错误提示
    sso_mobilePhone = $__SSO_ID('sso_mobilePhone'),
// 用户id输入框
    sso_txtCodePwd = $__SSO_ID('sso_txtCodePwd'),
// 验证码输入框
    sso_dyPwd = $__SSO_ID('sso_dyPwd'),
// 密码输入框
    sso_dyPwdFirst = $__SSO_ID('sso_dyPwdFirst'),
    sso_divVerifyCodes = $__SSO_ID('sso_divVerifyCodes'),
// 验证码div
    sso_imgCodePhone = $__SSO_ID('sso_imgCodePhone'),
//验证码图片
    sso_reSend = $__SSO_ID('sso_reSend'),
//发送验证码按钮
    sso_btnSubmitLogin = $__SSO_ID('sso_btnSubmitLogin'),
//动态密码登录按钮
    sso_dymembererror = $__SSO_ID('sso_dymembererror'),
// 错误提示
    sso_commonlogin = $__SSO_ID('sso_commonlogin'),
//合作卡
    sso_openCard = $__SSO_ID('sso_openCard'),
    sso_cardName = $__SSO_ID('sso_cardName'),
    sso_hidSourceId = $__SSO_ID('sso_hidSourceId'),
//卡名
    sso_txtCUid = $__SSO_ID('sso_txtCUid'),
//用户id输入框
    sso_txtcPwd = $__SSO_ID('sso_txtcPwd'),
//密码
    sso_btnCSubmit = $__SSO_ID('sso_btnCSubmit'),
    sso_cardError = $__SSO_ID('sso_cardError'),

    sso_lkbtnGetPwd = $__SSO_ID('sso_lkbtnGetPwd'),
//登录按钮
    sso_commonerror = $__SSO_ID('sso_commonerror'),
// 错误提示
    sso_noneloginDiv = $__SSO_ID('sso_noneloginDiv'),

//关闭按钮
    sso_divClose = $__SSO_ID('sso_divClose'),
//第三方登录按钮
    sso_pay = $__SSO_ID('sso_pay'),
    sso_qq = $__SSO_ID('sso_qq'),
    sso_sina = $__SSO_ID('sso_sina'),
    sso_nete = $__SSO_ID('sso_nete'),
    sso_renren = $__SSO_ID('sso_renren'),
    sso_baidu = $__SSO_ID('sso_baidu'),

    sso_clogin = $__SSO_ID('sso_clogin'),
//合作卡登录
    sso_mlogin = $__SSO_ID('sso_mlogin'),

    sso_register = $__SSO_ID('sso_register'),
    sso_register2 = $__SSO_ID('sso_register2'),
//返回会员登录
    sso_ifrprocxy = $__SSO_ID('sso_ifrprocxy'),
//代理页iframe
    sso_ie6 = ! -[1, ] && !window.XMLHttpRequest,
//判断是否ie6
    jpIsBlack = false,
    jpIsBlackForMobile = false,
    jsptoken = 'N',
    vcodeLen = 4,
    riskLevel,   //风控返回的Level值
    //手机动态密码登录验证码
    sso_phoneCodeLi = $__SSO_ID('sso_phoneCodeLi');
    returnFlag = false; //是否是提交页面的标记

// JSONP回调函数，及回调变量
(function () {
    var imgCode = '',
    jpVerifyCode = false;

    //callback object
    return JSP = {
        checkIsBlack: function (data) {
            //jpIsBlack = (data.code == 'T'); // N：不需要验证码，T:需要验证码
            var retCode = data.Code;

            if (retCode == 295) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_member, "您帐号已锁定,如有疑问请拨打客服电话。");
                sso_divVerifyCode.style.display = "none";
                jpIsBlack = "block";
            } else if (retCode == 285) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_member, "您连续输错密码，锁定30分钟。");
                sso_divVerifyCode.style.display = "none";
                jpIsBlack = "block";
            } else if (retCode == 1) {
                sso_divVerifyCode.style.display = "block";
                jpIsBlack = "true";
                var imgUrl = "data:image/gif;base64," + data.Image;
                var Hash = data.CaptchaId;
                sso_imgCode.datahash = Hash;
                sso_imgCode.src = imgUrl;
            }
            else {
                sso_divVerifyCode.style.display = "none";
                jpIsBlack = "false";
            }

            jsptoken = data.jsptoken;
        },
        checkIsBlackForMobile: function (data) {            
            var retCode = data.Code;
            //jpIsBlack = (data.code == 'T'); // N：不需要验证码，T:需要验证码
            if (retCode == 295) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "您帐号已锁定,如有疑问请拨打客服电话。");
                sso_phoneCodeLi.style.display = "none";
                $__SSO_ID('sso_phoneLoginTip').style.display = "none";
                jpIsBlackForMobile = "block";
            } else if (retCode == 285) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "您连续输错密码，锁定30分钟。");
                sso_phoneCodeLi.style.display = "none";
                $__SSO_ID('sso_phoneLoginTip').style.display = "none";
                jpIsBlackForMobile = "block";
            } else if (retCode == 1) {
                sso_phoneCodeLi.style.display = "block";
                jpIsBlackForMobile = "true";
                var imgUrl = "data:image/gif;base64," + data.Image;
                var Hash = data.CaptchaId;
                sso_imgCodePhone.datahash = Hash;
                sso_imgCodePhone.src = imgUrl;
            }
            else {
                sso_phoneCodeLi.style.display = "none";
                jpIsBlackForMobile = "false";
            }

            jsptoken = data.jsptoken;
        },
        checkVerifyCode: function (data) {
            jpVerifyCode = data.code === '1'; //1 ：验证码正确，0：验证码错误
        },
        getImageCode: function (data) {
            imgCode = data.code;
            sso_imgCode.src = sso_Config.url.verifyCodeUrl + '?' + imgCode;
        },
        getImageCodePhone: function (data) {
            imgCode = data.code;
            sso_imgCodePhone.src = sso_Config.url.verifyCodePhoneUrl + '?' + imgCode;
        },
        sendDyncPwd: function (data) {
            if (data.code != "5")    //发送失败强制刷新验证码
                sso_popLogin.isBlackForMobile();

            switch (data.code) {
                case '1':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPhone);
                        sso_mobilePhone.focus();
                        return;
                    }
                case '2':
                case '3':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "用户未注册");
                        sso_mobilePhone.focus();
                        return;
                    }
                case '5':
                    //case '6':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone);
                        $__SSO_ID('sso_phoneLoginTip').style.display = consts.display.block;
                        sso_popLogin.countDownPhone();
                        sso_dyPwdFirst.focus();;
                        break;
                    }
                case '7':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyverycode);
                        sso_txtCodePwd.focus();
                        break;
                    }
                case '8':
                    {                                                
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "验证码错误");
                        sso_txtCodePwd.focus();
                        break;
                    }
                case '9':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "动态密码获取频繁，请一分钟后再试");
                        $__SSO_ID('sso_phoneLoginTip').style.display = consts.display.none;
                        break;
                    }
                case '285':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "您连续输错密码，锁定30分钟");
                        break;
                    }
                case '295':
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, "您帐号已锁定,如有疑问请拨打客服电话。");
                        break;
                    }
                case '0':
                case '4':
                default:
                    {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_WaitForTry);
                        return;
                    }

            }
        }
    }
})();


function sso_member_enter() {
    var event = arguments.callee.caller.arguments[0] || window.event; //消除浏览器差异  
    if (event.keyCode == 13) {
        event.returnValue = false;
        //alert(3);
        sso_btnSubmit.click();
    }

    return false;
}
function sso_phone_enter() {
    var event = arguments.callee.caller.arguments[0] || window.event; //消除浏览器差异  
    if (event.keyCode == 13) {
        event.returnValue = false;
        //alert(3);
        sso_btnSubmitLogin.click();
    }

    return false;
}
function sso_card_enter() {
    var event = arguments.callee.caller.arguments[0] || window.event; //消除浏览器差异  
    if (event.keyCode == 13) {
        event.returnValue = false;
        //alert(3);
        sso_btnCSubmit.click();
    }

    return false;
}

//根据渠道号返回渠道名称
function getChannelName(channelid) {
    var arrCard = Alliances.split('@');
    for (var i = 0; i < arrCard.length; i++) {
        var cardinfo = arrCard[i].length > 0 ? arrCard[i].split('||') : null;
        if (cardinfo == null) continue;
        var channelID = cardinfo[1].split('|')[0];
        if (channelID == channelid) {
            return cardinfo[0];
        }
    }
    return null;
}

function isPwd1(pwd) {
    return /^\S{4,20}$/.test(pwd);
};



// 浮动登录对象（静态类）
var sso_popLogin = {
    // 成员方法
    // 初始化浮层登陆
    init: function () {
        this.binder(); // 绑定事件

        sso_txtUid.onclick = function () {
            if (sso_txtUid.value == "" || sso_txtUid.value == sso_consts.sso_tip_name) {
                sso_txtUid.value = "";
            }
            sso_txtUid.style.color = 'black';
        }

        sso_popLogin.sso_showTip(sso_mobilePhone, sso_consts.sso_tip_mobile);
        sso_popLogin.sso_showTip(sso_txtCodePwd, sso_consts.sso_tip_verycode);
        //        sso_popLogin.sso_showTip(sso_dyPwdFirst, sso_consts.sso_tip_dyncpwd);
        sso_popLogin.sso_showTip(sso_cardName, sso_consts.sso_tip_cardname);
        sso_popLogin.sso_showTip(sso_txtCUid, sso_consts.sso_tip_name);
        sso_popLogin.sso_showTip(sso_verifyCode, sso_consts.sso_tip_verycode);
    },
    // 页面事件
    // 绑定所有浮层登陆事件
    binder: function () {
        this.onuidblur();
        this.onbtnclick();
        //this.onkeyenter();
        this.onthridlogin();
        this.onrefreshvcode();
        this.onrefreshPhonevcode();

    },
    // 按钮click事件
    onbtnclick: function () {

        sso_register.onclick = sso_register2.onclick = function () {
            window.open(sso_consts.rootUrl + '/member/emailregist.aspx');
        };

        //member login 合作卡切换
        sso_mlogin.onclick = function () {
            sso_memberlogin.style.display = "block";
            sso_commonlogin.style.display = "none";

            var selectCard = $__SSO_ID('selectCardName');
            if (selectCard)
                selectCard.style.display = 'none';
            var searchCard = $__SSO_ID('searchCardName');
            if (searchCard)
                searchCard.style.display = 'none';
        };
        sso_clogin.onclick = function () {
            sso_memberlogin.style.display = "none";
            sso_commonlogin.style.display = "block";
            $ss.bind(sso_cardName, "sso_hidSourceId");

        }
        $__SSO_ID('sso_memberRadio').onclick = function () {
            sso_domUserUl.style.display = "block";
            sso_phonePwdUl.style.display = "none";
            $__SSO_ID('sso_memberRadio').checked = true;
        }
        $__SSO_ID('sso_cardRadio').onclick = function () {
            sso_popLogin.onmobileblur();
            sso_domUserUl.style.display = "none";
            sso_phonePwdUl.style.display = "block";
            $__SSO_ID('sso_cardRadio').checked = true;
        }
        sso_divClose.onclick = function () {
            sso_popLogin.showErrors(sso_consts.sso_logintype_member);
            sso_popLogin.showErrors(sso_consts.sso_logintype_card);
            sso_popLogin.showErrors(sso_consts.sso_logintype_phone);
            sso_maskShow(null, true);
        };

        sso_reSend.onclick = sso_popLogin.SendSmsByLogin;

        sso_btnSubmit.onclick = function () {
            var uid = sso_txtUid.value,
            psd = sso_txtPwd.value,
            vcode = encodeURI(sso_verifyCode.value),
            vcodeID = sso_imgCode.datahash;
            autolog = 'F',
            // T：自动登录 F：非自动登录
            valid_status = true; //所有验证是否通过 True:通过 False:未通过
            var validForm = function (uid, psd, vcode) {
                if (uid) {
                    if (uid === sso_consts.sso_tip_name || sso_trim(uid) === '') {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_emptyuid);
                        sso_txtUid.focus();
                        return false;
                    }

                } else {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_emptyuid);
                    return false;
                }

                if (jpIsBlack === "block")
                    return false;

                if (!psd) {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_emptypwd);
                    sso_txtPwd.focus();
                    return false;
                }
                return true;
            }

            // 做登录动作,是否是商旅在后台进行判断
            // iframe，执行Post操作
            var loginIfm = function () {                
                if (valid_status) {
                    sso_popLogin.hideErrors();
                    if (sso_chkAutoLogin.checked) {
                        autolog = 'T';
                    }
                    var backUrl = sso_popLogin.getProcxyUrl() + sso_popLogin.gettmp('?', 10000),
                idoc = sso_ifrprocxy.contentDocument || sso_ifrprocxy.contentWindow.document,
                ifrm = idoc.createElement('form');
                    if (!idoc.body) { // ie
                        var bd = document.createElement('body');
                        idoc.appendChild(bd);
                    }
                    var createHidden = function (frm, id, val) {
                        var hid = idoc.createElement('input');
                        hid.id = hid.name = id;
                        hid.value = val;
                        frm.appendChild(hid);
                    };

                    // 加表单
                    ifrm.name = 'NewPostLogin';
                    ifrm.id = 'NewPostLogin';
                    ifrm.action = sso_Config.jsonpUrl.login + sso_popLogin.gettmp('&', 1000);
                    ifrm.method = 'POST';
                    createHidden(ifrm, 'buttonId', sso_buttonID);
                    createHidden(ifrm, 'signin_uid', uid);
                    createHidden(ifrm, 'signin_pwd', psd);
                    createHidden(ifrm, 'txtCode', vcode || '');
                    createHidden(ifrm, 'vcodeID', vcodeID);
                    createHidden(ifrm, 'IsAuto', autolog);
                    createHidden(ifrm, 'NewSSO', 'T');
                    createHidden(ifrm, 'NewSSOBackURL', backUrl);
                    createHidden(ifrm, 'NewSSOToken', jsptoken);
                    createHidden(ifrm, 'NewSSOLoginType', sso_consts.sso_logintype_member); //0：个人用户登陆 1：合作卡登陆 6:动态密码登陆 3:直接登录
                    idoc.body.appendChild(ifrm);
                    ifrm.submit();
                }                
            }
            // 验证页面输入
            valid_status = validForm(uid, psd, vcode);
            if (valid_status) {
                if (sso_divVerifyCode.style.display != 'none') {
                    if (vcode) {
                        if (vcode === encodeURI(sso_consts.sso_tip_verycode) || sso_trim(vcode) === '') {
                            sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_emptyverycode);
                            sso_verifyCode.focus();
                            return;
                        }

                        else {
                            sso_popLogin.showErrors(sso_consts.sso_logintype_member);
                            loginIfm();
                            //                            var callback = 'tmp_' + parseInt(Math.random() * 1000000, 10);
                            //                            var url = sso_Config.jsonpUrl.checkVerifyCode + "t=3&username=" + uid + "&code=" + vcode + sso_popLogin.gettmp('&', 1000) + "&jsonp=" + callback;
                            //                            window[callback] = function (data) {
                            //                                if (data.code == "1") {
                            //                                    sso_popLogin.showErrors(sso_consts.sso_logintype_member);
                            //                                    loginIfm();
                            //                                } else {
                            //                                    sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_verycode);
                            //                                    sso_verifyCode.value = '';
                            //                                    sso_verifyCode.focus();
                            //                                    sso_popLogin.showVcode(true, vcodeLen);
                            //                                    valid_status = false;
                            //                                }
                            //                            };
                            //                            sso_popLogin.jsonpRequest(url);
                        }
                    } else {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_member, sso_consts.sso_error_emptyverycode);
                        sso_verifyCode.focus();
                        return;
                    }
                } else {
                    loginIfm();
                }
            }

        };

        sso_btnSubmitLogin.onclick = function () {

            $__SSO_ID('sso_phoneLoginTip').style.display = "none";

            var uid = sso_mobilePhone.value,
            psd = sso_dyPwdFirst.value,
            vcode = sso_txtCodePwd.value,
            autolog = 'F',
            // T：自动登录 F：非自动登录
            valid_status = true; //所有验证是否通过 True:通过 False:未通过
            var validForm = function (uid, psd) {
                if (uid) {
                    if (!isMobile_SSO(sso_trim(uid))) {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_wrongPhone);
                        return false;
                    }
                    if (uid === sso_consts.sso_tip_mobile || sso_trim(uid) === '') {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPhone);
                        return false;
                    }
                } else {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPhone);
                    return false;
                }

                if (jpIsBlackForMobile === "block")
                    return false;

                if (!psd || psd === sso_consts.sso_tip_dyncpwd || sso_trim(psd) === '') {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPwd);
                    return false;
                }
                return true;
            }

            // 做登录动作
            // iframe，执行Post操作
            var loginIfm = function () {
                if (valid_status) {
                    sso_popLogin.hideErrors();
                    if (sso_chkAutoLoginDy.checked) {
                        autolog = "T";
                    }
                    var backUrl = sso_popLogin.getProcxyUrl() + sso_popLogin.gettmp('?', 10000),
                    idoc = sso_ifrprocxy.contentDocument || sso_ifrprocxy.contentWindow.document,
                    ifrm = idoc.createElement('form');
                    if (!idoc.body) { // ie
                        var bd = document.createElement('body');
                        idoc.appendChild(bd);
                    }
                    var createHidden = function (frm, id, val) {
                        var hid = idoc.createElement('input');
                        hid.id = hid.name = id;
                        hid.value = val;
                        frm.appendChild(hid);
                    };

                    // 加表单
                    ifrm.name = 'NewPostLogin';
                    ifrm.id = 'NewPostLogin';
                    ifrm.action = sso_Config.jsonpUrl.login + sso_popLogin.gettmp('&', 1000);
                    ifrm.method = 'POST';
                    createHidden(ifrm, 'buttonId', sso_buttonID);
                    createHidden(ifrm, 'signin_uid', uid);
                    createHidden(ifrm, 'signin_pwd', psd);
                    createHidden(ifrm, 'txtCode', vcode || '');
                    createHidden(ifrm, 'IsAuto', autolog);
                    createHidden(ifrm, 'NewSSO', 'T');
                    createHidden(ifrm, 'NewSSOBackURL', backUrl);
                    createHidden(ifrm, 'NewSSOToken', jsptoken);
                    createHidden(ifrm, 'NewSSOLoginType', sso_consts.sso_logintype_phone); //0：个人用户登陆 1：合作卡登陆 6:动态密码登陆 3:直接登录
                    idoc.body.appendChild(ifrm);
                    ifrm.submit();
                }
            }
            // 验证页面输入
            valid_status = validForm(uid, psd);
            if (valid_status) {
                loginIfm();
            }
        };

        sso_openCard.onclick = function () {

            //合作卡开卡按钮
            if ((sso_cardName.value === sso_consts.sso_tip_cardname ? "" : sso_cardName.value).length === 0) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptyCardName);
                return;
            } else {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card);
                // alert('动作 合作卡注册页面');
                var sourceid = sso_hidSourceId.value;

                logn(sourceid);
            }

        };

        sso_lkbtnGetPwd.onclick = function () {
            if ((sso_cardName.value === sso_consts.sso_tip_cardname ? "" : sso_cardName.value).length === 0) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptyCardName);
                return false;
            }
            if ((sso_txtCUid.value === sso_consts.sso_tip_name ? "" : sso_txtCUid.value).length === 0) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptyuid);
                return false;
            } else {

                var callbackcheckcard = 'tmp_' + parseInt(Math.random() * 1000000, 10);
                var url = sso_Config.jsonpUrl.checkCoCard + "?sourceid=" + sso_hidSourceId.value + "&cardno=" + sso_txtCUid.value + "&tmp=" + Math.floor(Math.random() * 1000) + "&jsonp=" + callbackcheckcard;
                sso_popLogin.jsonpRequest(url);
                window[callbackcheckcard] = function (data) {
                    if (data.code === "F") {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_wrongUid);
                        return false;
                    } else {

                        //get uid
                        var callbackgetuid = 'tmp_' + parseInt(Math.random() * 1000000, 10);
                        var url2 = sso_Config.jsonpUrl.AjaxGetCoCardUid + "?sourceid=" + sso_hidSourceId.value + "&cardno=" + sso_txtCUid.value + "&tmp=" + Math.floor(Math.random() * 1000) + "&jsonp=" + callbackgetuid;
                        sso_popLogin.jsonpRequest(url2);

                        window[callbackgetuid] = function (data) {
                            if (data.code === "ssof") {
                                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_wrongUid);
                                return false;
                            } else {
                                window.location.href = "https://accounts.ctrip.com/member/PassWord/VerifyUserInfo.aspx?uid=" + data.code;
                            }
                        }
                    }
                }

            }
        };
        sso_btnCSubmit.onclick = function () {

            if ((sso_cardName.value === sso_consts.sso_tip_cardname ? "" : sso_cardName.value).length === 0) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptyCardName);
                return false;
            }
            if ((sso_txtCUid.value === sso_consts.sso_tip_name ? "" : sso_txtCUid.value).length === 0) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptyuid);
                return false;
            } else {

                var callbackcheckcard = 'tmp_' + parseInt(Math.random() * 1000000, 10);
                var url = sso_Config.jsonpUrl.checkCoCard + "?sourceid=" + sso_hidSourceId.value + "&cardno=" + sso_txtCUid.value + "&tmp=" + Math.floor(Math.random() * 1000) + "&jsonp=" + callbackcheckcard;
                window[callbackcheckcard] = function (data) {
                    if (data.code === "F") {
                        sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_wrongUid);
                        return false;
                    } else {
                        if (sso_txtcPwd.value.length === 0) {
                            sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_emptypwd);
                            return false;
                        } else {
                            if (isPwd1(sso_txtcPwd.value)) {
                                sso_popLogin.showErrors(sso_consts.sso_logintype_card);
                            } else {
                                sso_popLogin.showErrors(sso_consts.sso_logintype_card, sso_consts.sso_error_wrongPwd);
                                return false;
                            }

                            //todo 登陆
                            sso_popLogin.showErrors(sso_consts.sso_logintype_card);
                            var backUrl = sso_popLogin.getProcxyUrl() + sso_popLogin.gettmp('?', 10000),
                            idoc = sso_ifrprocxy.contentDocument || sso_ifrprocxy.contentWindow.document,
                            ifrm = idoc.createElement('form');
                            if (!idoc.body) { // ie
                                var bd = document.createElement('body');
                                idoc.appendChild(bd);
                            }
                            var createHidden = function (frm, id, val) {
                                var hid = idoc.createElement('input');
                                hid.id = hid.name = id;
                                hid.value = val;
                                frm.appendChild(hid);
                            };

                            // 加表单
                            ifrm.name = 'NewPostLogin';
                            ifrm.id = 'NewPostLogin';
                            ifrm.action = sso_Config.jsonpUrl.login + sso_popLogin.gettmp('&', 1000);
                            ifrm.method = 'POST';
                            createHidden(ifrm, 'buttonId', sso_buttonID);
                            createHidden(ifrm, 'signin_uid', sso_txtCUid.value);
                            createHidden(ifrm, 'signin_pwd', sso_txtcPwd.value);
                            createHidden(ifrm, 'sso_hidSourceId', sso_hidSourceId.value);
                            createHidden(ifrm, 'NewSSO', 'T');
                            createHidden(ifrm, 'NewSSOBackURL', backUrl);
                            createHidden(ifrm, 'NewSSOToken', jsptoken);
                            createHidden(ifrm, 'NewSSOLoginType', sso_consts.sso_logintype_card); //0：个人用户登陆 1：合作卡登陆 6:动态密码登陆 3:直接登录
                            idoc.body.appendChild(ifrm);
                            ifrm.submit();
                        }
                    }
                }
                sso_popLogin.jsonpRequest(url);
            }
        };
    },

    // 第三方登陆事件
    onthridlogin: function () {
        //        var refreshUrl = '?refreshUrl=' + window.location.href,
        var aliurl = sso_Config.thirdUrl.popalipay,
        qqurl = sso_Config.thirdUrl.popqq,
        wburl = sso_Config.thirdUrl.popweibo,
        nete = sso_Config.thirdUrl.popnete,
        renren = sso_Config.thirdUrl.poprenren,
        baidu = sso_Config.thirdUrl.popbaidu;

        openwin = function (url, h, w, t, l) {
            window.open(url + "?DivMaskFlagBackUrl=" + sso_popLogin.getProcxyUrl(), 'newwindow', 'height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + ',toolbar=no,menubar=no,scrollbars=no, resizable=yes,location=no, status=no');
        }

        sso_pay.onclick = function () {
            openwin(aliurl, 600, 800, 300, 300);
        };
        sso_qq.onclick = function () {
            openwin(qqurl, 600, 800, 300, 300);
        };
        sso_sina.onclick = function () {
            openwin(wburl, 600, 800, 300, 300);
        };
        sso_nete.onclick = function () {
            openwin(nete, 600, 800, 300, 300);
        };
        sso_renren.onclick = function () {
            openwin(renren, 600, 800, 200, 300);
        };
        sso_baidu.onclick = function () {
            openwin(baidu, 600, 800, 300, 300);
        };
    },
    // 刷新验证码事件
    onrefreshvcode: function () {
        sso_imgCode.onclick = function () {
            sso_popLogin.isBlack();
            //sso_popLogin.showVcode(true);
            sso_verifyCode.focus();
        };
    },
    onrefreshPhonevcode: function () {
        sso_imgCodePhone.onclick = function () {
            sso_popLogin.isBlackForMobile();
            sso_txtCodePwd.focus();
        };
    },
    // 焦点离开调用判黑逻辑事件
    onuidblur: function () {
        sso_txtUid.onblur = function () {
            sso_popLogin.isBlack();
        };
    },
    // 手机动态密码登录焦点离开调用判黑逻辑事件
    onmobileblur: function () {
        sso_mobilePhone.onblur = function () {
            sso_popLogin.isBlackForMobile();
        };
    },
    gettmp: function (c, r) {
        return c + "tmp=" + Math.floor(Math.random() * r);
    },
    // 跨域Ajax请求
    jsonpRequest: function (url, isAsync, fuc) {
        var script = document.createElement("script");
        //FF:onload IE:onreadystatechange
        script.onload = script.onreadystatechange = function () {
            //onreadystatechange，仅IE
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                script.onload = script.onreadystatechange = null; //请内存，防止IE memory leaks
            }
        }
        script.type = "text/javascript";
        script.async = isAsync || false;
        script.src = url;
        //在head之后添加js文件
        document.body.insertBefore(script, document.body.firstChild);
    },

    getCookie: function (c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    },
    setCookie: function (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },
    // 判断是否已登陆
    isLogin: function (isNoneLogin) {
        var ticketStr = "";
        ticketStr = sso_popLogin.getCookie("ticket_ctrip");
        if (ticketStr === "")
            ticketStr = sso_popLogin.getCookie("ticket%5Fctrip");
        if (ticketStr === "") {
            SSO_NotLoginCallBack(isNoneLogin);
        } else {
            var callbackislogin = 'tmp_' + parseInt(Math.random() * 1000000, 10);
            var url = sso_Config.jsonpUrl.checkLoginStatus + "?ticketStr=" + encodeURIComponent(ticketStr) + sso_popLogin.gettmp('&', 1000) + "&jsonp=" + callbackislogin;

            window[callbackislogin] = function (data) {
                if (data.code != 'T') {
                    SSO_NotLoginCallBack(isNoneLogin);
                } else {
                    sso_hideMask();
                }
            }
            sso_popLogin.jsonpRequest(url, false);
        }
    },


    // iframe防击穿遮罩
    createIframe: function (o) {
        if (sso_ie6 && o) {
            var ifr = document.createElement("iframe"),
            w = o.clientWidth + 10,
            h = o.clientHeight + 10;
            ifr.style.cssText = "display:none;_display:block;position:absolute;top:0;left:-5;z-index:-1;filter:mask();width:" + w + "px;height:" + h + "px;";
            if (!document.body) { // ie
                var bd = document.createElement('body');
                document.appendChild(bd);
            }
            o.appendChild(ifr);
        }
    },
    SendSmsByLogin: function () {
        if (jpIsBlackForMobile === "block")
            return false;

        sso_popLogin.hideDynamicErrors();
        $__SSO_ID('sso_phoneLoginTip').style.display = "none";
        sso_dyPwdFirst.value = "";

        var uid = sso_mobilePhone.value,
        vcode = sso_txtCodePwd.value,
        valid_status = true; //所有验证是否通过 True:通过 False:未通过
        var validForm = function (uid, vcode) {
            if (uid) {
                if (!isMobile_SSO(sso_trim(uid))) {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_wrongPhone);
                    sso_mobilePhone.focus();
                    return false;
                }
                if (uid === sso_consts.sso_tip_mobile || sso_trim(uid) === '') {
                    sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPhone);
                    sso_txtCodePwd.focus();
                    return false;
                }
            } else {
                sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyDyncPhone);
                return false;
            }

            if (sso_phoneCodeLi.style.display == "block" && (!vcode || vcode === sso_consts.sso_tip_verycode || sso_trim(vcode) === '')) {
                sso_popLogin.showErrors(sso_consts.sso_logintype_phone, sso_consts.sso_error_emptyverycode);
                sso_txtCodePwd.value = '';
                sso_txtCodePwd.focus();
                return false;
            }

            return true;
        }
        valid_status = validForm(uid, vcode);
        if (valid_status) {
            var sendPwdUrl = sso_Config.jsonpUrl.sendDyncPwd + sso_popLogin.gettmp('&', 1000) + '&mobile=' + uid + "&vcode=" + escape(vcode) + "&captchaID=" + sso_imgCodePhone.datahash;
            sso_popLogin.jsonpRequest(sendPwdUrl);
        }
    },
    //倒数事件
    countDownPhone: function () {
        sso_reSend.onclick = function () {
            return false;
        };
        sso_reSend.className = "lg_btn3_disabled";
        countDown(60,
        function () {
            if (sso_reSend.value) {
                sso_reSend.value = "发送动态密码";
            } else {
                sso_reSend.innerHTML = "发送动态密码";
            }
            sso_reSend.className = "lg_btn3";
            sso_reSend.onclick = sso_popLogin.SendSmsByLogin;
        },
        sso_reSend, "秒后重发");
    },
    sso_showTip: function (obj, defaultvalue) {
        obj.onfocus = obj.onclick = function () {
            if (obj.value == "" || obj.value == defaultvalue) {
                obj.value = "";
            }
            obj.style.color = 'black';
        }
        obj.onblur = function () {
            if (obj.value == "" || obj.value == defaultvalue) {
                obj.value = defaultvalue;
                obj.style.color = 'gray';
            }
        }
    },
    showErrors: function (logintype, msg) {
        if (logintype == sso_consts.sso_logintype_member)
            sso_popLogin.showMemberErrors(msg);
        if (logintype == sso_consts.sso_logintype_card)
            sso_popLogin.showCommonErrors(msg);
        if (logintype == sso_consts.sso_logintype_phone)
            sso_popLogin.showDynamicErrors(msg);
    },
    //显示验证错误信息
    showMemberErrors: function (t) {
        if (t) {
            $__SSO_ID("sso_domErrorli").style.display = "block";
            sso_membererror.innerHTML = "<i class='lg_ico_alert'></i>" + t;
            sso_membererror.style.visibility = "visible";
        } else {
            $__SSO_ID("sso_domErrorli").style.display = "none";
            sso_membererror.style.visibility = "hidden";
        }
    },
    //显示验证错误信息
    showCommonErrors: function (t) {
        if (t) {
            sso_cardError.style.display = consts.display.block;
            sso_commonerror.style.visibility = consts.visibility.visible;
            sso_commonerror.innerHTML = "<i class='lg_ico_alert'></i>" + t;
        } else {
            sso_cardError.style.display = "none";
            sso_commonerror.style.visibility = "hidden";
        }
    },
    //显示验证错误信息
    showDynamicErrors: function (t) {
        if (t) {
            $__SSO_ID("sso_phoneLoginErr").style.display = "block";
            sso_dymembererror.innerHTML = "<i class='lg_ico_alert'></i>" + t;
            sso_dymembererror.style.visibility = "visible";
            //            progress.style.display = 'none';
        } else {
            $__SSO_ID("sso_phoneLoginErr").style.display = "none";
            sso_dymembererror.style.visibility = "hidden";
        }
    },
    //隐藏验证错误信息
    hideErrors: function () {
        $__SSO_ID("sso_domErrorli").style.display = "none";
        sso_membererror.style.visibility = "hidden";
    },
    hideDynamicErrors: function () {
        $__SSO_ID("sso_phoneLoginErr").style.display = "none";
        sso_dymembererror.style.visibility = "hidden";
    },
    // 获取登陆后代理页
    getProcxyUrl: function () {
        //各PD配置应对代理页可能不同状况
        var sso_loginprocxyPath = $__SSO_ID("sso_loginprocxyPath");
        if (sso_loginprocxyPath)
            return sso_loginprocxyPath.value;
        else {
            var pathName = window.location.pathname.substring(1);
            var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
            //return window.location.protocol + '//' + window.location.host + '/'+ webName + '/';
            return window.location.protocol + '//' + window.location.host + '/' + webName + '/' + 'loginprocxy.html';
        }
    },
    // 判断是否黑名单，决定是否需要出现验证码
    isBlack: function () {
        if (!returnFlag) {
            sso_popLogin.hideErrors();
        } else {
            returnFlag = false;
        }
        var uid = sso_txtUid.value;
        if (uid) {
            if (uid === sso_consts.sso_tip_name || sso_trim(uid) === '') {
                sso_txtUid.value = sso_consts.sso_tip_name;
                sso_txtUid.style.color = 'gray';
                return;
            }
            if (uid.length <= 60) {
                sso_verifyCode.value = sso_consts.sso_tip_verycode;
                sso_verifyCode.style.color = 'gray';
                this.jsonpRequest(sso_Config.jsonpUrl.checkIsBlack + this.gettmp('&', 1000) + "&username=" + uid);
            } else {
                this.showErrors(sso_consts.sso_logintype_member, "登陆名最多只能输入60个字符");
            }
        } else {
            sso_txtUid.value = sso_consts.sso_tip_name;
            sso_txtUid.style.color = 'gray';
        }
        return jpIsBlack;
    },
    // 判断是否黑名单，决定是否需要出现验证码，用于动态密码登录
    isBlackForMobile: function () {
        sso_popLogin.hideDynamicErrors();        
        var mobile = sso_mobilePhone.value;
        if (mobile) {
            sso_txtCodePwd.value = sso_consts.sso_tip_verycode;
            sso_txtCodePwd.style.color = 'gray';
            this.jsonpRequest(sso_Config.jsonpUrl.checkIsBlackForMobile + this.gettmp('&', 1000) + "&username=" + mobile);
        } else {
            sso_mobilePhone.value = sso_consts.sso_tip_mobile;
            sso_phoneCodeLi.style.display = "none";
            sso_mobilePhone.style.color = 'gray';
        }
        return jpIsBlackForMobile;
    },
    // 显示验证码
    showVcode: function (show) {
        if (show) {
            sso_divVerifyCode.style.display = 'block';
            //sso_imgCode.src = sso_Config.jsonpUrl.simpleValidateCode + "?t=3&len=" + len + "&tmp=" + Math.round(Math.random() * 10000);
            var callbacksend = 'tmp_' + parseInt(Math.random() * 1000000, 10);
            var url = sso_Config.jsonpUrl.simpleValidateCode + "?t=div&resultLevel=" + riskLevel + "&tmp=" + Math.round(Math.random() * 10000) + "&jsonp=" + callbacksend;
            window[callbacksend] = function (data) {
                if (data.code == "1") {
                    var imgUrl = "data:image/gif;base64," + data.imageStr;
                    var Hash = data.captcbaid;
                    sso_imgCode.datahash = Hash;
                    sso_imgCode.src = imgUrl;
                }
            };
            sso_popLogin.jsonpRequest(url);
        } else {
            sso_divVerifyCode.style.display = 'none';
        }
    },
    showPhoneVcode: function (show) {
        if (show) {
            sso_phoneCodeLi.style.display = 'block';

            var callbacksend = 'tmp_' + parseInt(Math.random() * 1000000, 10);
            var url = sso_Config.jsonpUrl.simpleValidateCode + "?resultLevel=" + riskLevel + "&tmp=" + Math.round(Math.random() * 10000) + "&jsonp=" + callbacksend;
            window[callbacksend] = function (data) {
                if (data.code == "1") {
                    var imgUrl = "data:image/gif;base64," + data.imageStr;
                    var Hash = data.captcbaid;
                    sso_imgCodePhone.datahash = Hash;
                    sso_imgCodePhone.src = imgUrl;
                }
            };
            sso_popLogin.jsonpRequest(url);

        } else {
            sso_phoneCodeLi.style.display = 'none';
        }
    },
    IsCardNum: function (txtVal) {
        return /^[0-9][0-9]{7}|^[0-9][0-9]{9}$/.test(txtVal);
    }
};

sso_popLogin.init();