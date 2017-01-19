function getBrowser(getVersion)
{
    var ua_str = navigator.userAgent.toLowerCase(), ie_Tridents, trident, match_str, ie_aer_rv, browser_chi_Type;
    if("ActiveXObject" in self){
        ie_aer_rv= (match_str = ua_str.match(/msie ([\d.]+)/)) ?match_str[1] :
              (match_str = ua_str.match(/rv:([\d.]+)/)) ?match_str[1] : 0;

        ie_Tridents = {"trident/7.0": 11, "trident/6.0": 10, "trident/5.0": 9, "trident/4.0": 8};

        trident = (match_str = ua_str.match(/(trident\/[\d.]+|edge\/[\d.]+)/)) ?match_str[1] : undefined;
        browser_chi_Type = (ie_Tridents[trident] || ie_aer_rv) > 0 ? "ie" : undefined;
    }else{

        browser_chi_Type = (match_str = ua_str.match(/edge\/([\d.]+)/)) ? "ie" :

                      (match_str = ua_str.match(/firefox\/([\d.]+)/)) ? "firefox" : 

                      (match_str = ua_str.match(/chrome\/([\d.]+)/)) ? "chrome" : 

                      (match_str = ua_str.match(/opera.([\d.]+)/)) ? "opera" : 

                      (match_str = ua_str.match(/version\/([\d.]+).*safari/)) ? "safari" : undefined;
    }

    var verNum, verStr;
    verNum = trident && ie_Tridents[trident] ? ie_Tridents[trident] : match_str[1];
    verStr = (getVersion != undefined) ? browser_chi_Type+"/"+verNum : browser_chi_Type;
    return verStr;
 }