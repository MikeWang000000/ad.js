/*


     ::::::::   :::::::::    ::::::::   ::::::::::        ::::::::   :::::::::: 
    :+:    :+:  :+:    :+:  :+:    :+:  :+:              :+:    :+:  :+:        
    +:+         +:+    +:+  +:+         +:+              +:+         +:+        
    +#+         +#+    +:+  +#+         +#++:++#         +#+         :#::+::#   
    +#+         +#+    +#+  +#+         +#+              +#+         +#+        
    #+#    #+#  #+#    #+#  #+#    #+#  #+#         #+#  #+#    #+#  #+#        
     ########   #########    ########   ##########  ###   ########   ###        


*/

function FindProxyForURL(url, host){

    //符合以下规则的域名或IP地址将通过下面的代理服务器访问。由于example.com:80【不是代理服务器】，故符合以下规则的域名或IP地址将【无法访问】，可实现屏蔽广告效果。
    var BLACK_HOLE = "PROXY example.com:80";

    //不符合以下规则的域名或IP地址直连。
    var DIRECT = "DIRECT";

    var hosts = [
//=========域名Start=========
//<ad.js - test>
"sc.cdce.cf",
//<youku>
"ad.api.3g.youku.com",
"statis.api.3g.youku.com",
"atm.youku.com",
"stat.youku.com",
//<sohu>
"agn.aty.sohu.com",
"mmg.aty.sohu.com",
//<letv>
"n.mark.letv.com",
"ark.letv.com",
"irs01.com",
//<baofeng>
"xs.houyi.baofeng.net",
//<hunantv>
"da.hunantv.com",
"miaozhen.com",
//<qq>
"lives.l.qq.com",
"vqq.admaster.com.cn",
//<tudou>
"ad.api.3g.tudou.com",
//<pptv>
"de.as.pptv.com",
"pp2.pptv.com",
"stat.pptv.com",
"afp.pplive.com",
//<iqiyi>
"cm.passport.iqiyi.com",
"cupid.iqiyi.com",
"paopao.iqiyi.com",
"ckm.iqiyi.com",
//<google>
"2mdn.net",
"admob.com",
"doubleclick.com",
"doubleclick.net",
"googleadsserving.cn",
"googlecommerce.com",
"googletagmanager.com",
"ads.google.com",
"afd.l.google.com",
"pagead-tpc.l.google.com",
"pagead.google.com",
"pagead.l.google.com",
"partnerad.l.google.com",
//<baidu>
"hm.baidu.com",
"eiv.baidu.com",
"pos.baidu.com",
"cpro.baidu.com",
"cpro.baidustatic.com",
"dup.baidustatic.com",
//<taobao>
"tanx.com",
"alimama.com",
//<360>
"lianmeng.360.cn",
//<others>
"keydot.net",
"mengmob.com",
"zzzkxx.com",
"miaozhen.com",
"adsage.com",
"cocounion.com",
"admaster.com.cn",
"ipinyou.com",
"admin5.com",
"csbew.com",
"jusha.com",
"vsoon.com",
"soquair.com",
"guohead.com",
"live.chartboost.com",
"appodeal.com",
"fastapi.net",
"adsmogo.com",
"adsmogo.org",
"adsmogo.net",
"adsmogo.mobi",
"adlive.cn",
"sstc360.com",
"ad-brix.com",
"leadboltads.net",
"joyingmobi.com"
//=========域名End=========
//【在分界线上面可以追加域名，两边加上双引号，使用逗号分隔。】
    ]
    var ips = [
//=========IP地址Start=========
//<iqiyi>
"101.227.14.80",
"101.227.14.81",
"101.227.14.82",
"101.227.14.83",
"101.227.14.84",
"101.227.14.85",
"101.227.14.86"
//=========IP地址End=========
//【在分界线上面可以追加IP地址，两边加上双引号，使用逗号分隔。】
    ]
    for (n in hosts){
        if(dnsDomainIs(host, hosts[n])){
            return BLACK_HOLE;
        }
    }
    for (n in ips){
        if(isInNet(host, ips[n], "225.225.225.225")){
            return BLACK_HOLE;
        }
    }
    return DIRECT;
}
