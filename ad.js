/*


     ::::::::   :::::::::    ::::::::   ::::::::::        ::::::::   :::::::::: 
    :+:    :+:  :+:    :+:  :+:    :+:  :+:              :+:    :+:  :+:        
    +:+         +:+    +:+  +:+         +:+              +:+         +:+        
    +#+         +#+    +:+  +#+         +#++:++#         +#+         :#::+::#   
    +#+         +#+    +#+  +#+         +#+              +#+         +#+        
    #+#    #+#  #+#    #+#  #+#    #+#  #+#         #+#  #+#    #+#  #+#        
     ########   #########    ########   ##########  ###   ########   ###        


*/

var BLACK_HOLE = "PROXY cdce.cf";
var DIRECT = "DIRECT";

function n(h, r, m) { return isInNet(h, r, m); }
function s(u, r) { return shExpMatch(u, r); }
function d(h, r){ return dnsDomainIs(h, r); }

function FindProxyForURL(url, host)
{
    var u = url.toLowerCase();
    var h = host.toLowerCase();

//youku
if( d(h, "ad.api.3g.youku.com") || d(h, "statis.api.3g.youku.com") ){ return BLACK_HOLE;}
//sohu
if( d(h, "agn.aty.sohu.com") || d(h, "mmg.aty.sohu.com") ){ return BLACK_HOLE;}
//letv
if( ( d(h, "n.mark.letv.com") && s(u, "*/m3u8api/*") ) || d(h, "irs01.com") ){ return BLACK_HOLE;}
//hunantv
if( d(h, "bs.da.hunantv.com" ) || d(h, "g.cn.miaozhen.com" ) ){ return BLACK_HOLE;}
//qq
if( d(h, "lives.l.qq.com" ) || d(h, "vqq.admaster.com.cn") ) {return BLACK_HOLE; }
//tudou
if( d(h, "ad.api.3g.tudou.com") ){  return BLACK_HOLE; }
//google
if( d(h, "2mdn.net" ) || d(h, "admob.com" ) || d(h, "doubleclick.com" ) || d(h, "googleadsserving.cn" ) || d(h, "googlecommerce.com" ) || d(h, "googletagmanager.com" ) || d(h, "ads.google.com" ) || d(h, "afd.l.google.com" ) || d(h, "pagead-tpc.l.google.com" ) || d(h, "pagead.google.com" ) || d(h, "pagead.l.google.com" ) || d(h, "partnerad.l.google.com" ) ){ return BLACK_HOLE;}
//baidu
if( d(h, "hm.baidu.com" ) || d(h, "eiv.baidu.com" ) || d(h, "pos.baidu.com" ) || d(h, "cpro.baidu.com" ) || d(h, "cpro.baidustatic.com" ) || d(h, "dup.baidustatic.com" ) ){ return BLACK_HOLE;}

    return DIRECT;
}
