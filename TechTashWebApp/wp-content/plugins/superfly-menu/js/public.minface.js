var SF_DEBUG=!0;!function(e){var a={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},t=document.createElement("div");for(var i in a)if(void 0!==t.style[i]){e.transitionEnd=a[i];break}e.transitionEnd||(e.transitionEnd=!1)}(window),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function a(t){t.preventDefault(),e.event.remove(y,"click",a)}function t(e,a){return(b?a.originalEvent.touches[0]:a)["page"+e.toUpperCase()]}function i(t,i,o){var r=e.Event(i,C);e.event.trigger(r,{originalEvent:t},t.target),r.isDefaultPrevented()&&(~i.indexOf("tap")&&!b?e.event.add(y,"click",a):t.preventDefault()),o&&(e.event.remove(y,g+"."+w,s),e.event.remove(y,h+"."+w,n))}function s(a){if(C.x=t("x",a),C.y=t("y",a),C.dx=C.x-x.x,C.dy=C.y-x.y,C.adx=Math.abs(C.dx),C.ady=Math.abs(C.dy),o=C.adx>M.motionThreshold||C.ady>M.motionThreshold){for(clearTimeout(c),C.orientation||(C.adx>C.ady?(C.orientation="horizontal",C.direction=C.dx>0?1:-1):(C.orientation="vertical",C.direction=C.dy>0?1:-1));a.target&&a.target!==x.target;)a.target=a.target.parentNode;return a.target!==x.target?(a.target=x.target,void n.call(this,e.Event(h+"."+w,a))):void i(a,"drag")}}function n(e){var a,t=e.timeStamp||+new Date,s=t-x.time;if(clearTimeout(c),o||r||e.target!==x.target)e.target=x.target,s<M.flickDuration&&i(e,"flick"),C.end=!0,a="drag";else{var n=d===e.target&&t-u<M.doubleTapInterval;a=n?"doubletap":"tap",d=n?null:x.target,u=t}i(e,a,!0)}var o,r,l,c,d,u,m=navigator.userAgent,f=/chrome/i.exec(m),p=/android/i.exec(m),b="ontouchstart"in window&&!(f&&!p),v=b?"touchstart":"mousedown",h=b?"touchend touchcancel":"mouseup mouseleave",g=b?"touchmove":"mousemove",w="finger",y=e("html")[0],x={},C={},M=e.Finger={pressDuration:300,doubleTapInterval:300,flickDuration:150,motionThreshold:5};return e.event.add(y,v+"."+w,function(d){var u=d.timeStamp||+new Date;l!=u&&(l=u,x.x=C.x=t("x",d),x.y=C.y=t("y",d),x.time=u,x.target=d.target,C.orientation=null,C.end=!1,o=!1,r=!1,c=setTimeout(function(){r=!0,i(d,"press")},M.pressDuration),e.event.add(y,g+"."+w,s),e.event.add(y,h+"."+w,n),M.preventDefault&&(d.preventDefault(),e.event.add(y,"click",a)))}),e.each("tap doubletap press drag flick".split(" "),function(a,t){e.fn[t]=function(e){return e?this.on(t,e):this.trigger(t)}}),M}),eval(function(e,a,t,i,s,n){if(s=function(e){return(e<62?"":s(parseInt(e/62)))+((e%=62)>35?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;t--;)n[s(t)]=i[t]||s(t);i=[function(e){return n[e]}],s=function(){return"\\w+"},t=1}for(;t--;)i[t]&&(e=e.replace(new RegExp("\\b"+s(t)+"\\b","g"),i[t]));return e}("9 17={3i:'0.1.3',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8'['+7.4.2K(', ')+']'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K('\\n')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!='1f'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)=='1f'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)=='1f'&&1g(a.W)=='1f'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)=='1f'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;",0,206,"||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ".split("|"),0,{}));var _T={rotate:function(e){var a=parseFloat(e)*(Math.PI/180),t=Math.cos(a),i=Math.sin(a),s=t,n=i,o=-i,r=t;return $M([[s,o,0],[n,r,0],[0,0,1]])},skew:function(e,a){var t=parseFloat(e)*(Math.PI/180),i=parseFloat(a)*(Math.PI/180),s=Math.tan(t),n=Math.tan(i);return $M([[1,s,0],[n,1,0],[0,0,1]])},translate:function(e,a){var t=e||0,i=a||0;return $M([[1,0,t],[0,1,i],[0,0,1]])},scale:function(e,a){var t=e||0,i=a||0;return $M([[t,0,0],[0,i,0],[0,0,1]])},toString:function(e){var a,t,i="matrix(";for(t=1;t<=3;t++)for(a=1;a<=2;a++)i+=e.e(a,t)+", ";return i=i.substr(0,i.length-2)+")"},fromString:function(e){var a=/^matrix\((\S*), (\S*), (\S*), (\S*), (\S*), (\S*)\)$/g.exec(e),t=parseFloat(a?a[1]:1),i=parseFloat(a?a[2]:0),s=parseFloat(a?a[3]:0),n=parseFloat(a?a[4]:1),o=parseFloat(a?a[5]:0),r=parseFloat(a?a[6]:0);return $M([[t,s,o],[i,n,r],[0,0,1]])}};!function(e){function a(e){if(document.body){var a=document.createElement("style");a.type="text/css",/WebKit|MSIE/i.test(navigator.userAgent)?a.styleSheet?a.styleSheet.cssText=e:a.innerText=e:a.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(a)}else document.write('<style type="text/css">'+e+"</style>")}function t(e){var a,t,i=["Moz","Webkit","O","ms"],s=document.createElement("div"),n=e.charAt(0).toUpperCase()+e.substr(1);if(e in s.style)return e;for(t=0;t<i.length;++t)if((a=i[t]+n)in s.style)return a;this.div=null}function i(e){var a,t,i,s,n,o={};if("?"===e.slice(0,1)&&(e=e.slice(1)),""!==e)for(a=e.split("&"),t=0;t<a.length;t+=1)i=a[t].split("="),s=decodeURIComponent(i[0]),n=i.length>1?decodeURIComponent(i[1]):void 0,o[s]=n;return o}var s=window.console&&window.SF_DEBUG?window.console:{log:function(){}},n=location.href.replace(/\#.+/,""),o=!1;e.fn.hasClasses=function(a){var t=a.replace(/\s/g,"").split(","),i=this;for(var s in t)if(e(i).hasClass(t[s]))return!0;return!1},e.fn.addClasses=function(a){var t=a.replace(/\s/g,"").split(","),i=this;for(var s in t)e(i).addClass(t[s]);return this},jQuery(document).one("sfm_doc_body_arrived ready",function(){if(!o){o=!0;var r=e(window),l=e("html"),c=e("body"),d=document.write,u=window.SF_Opts;document.write=function(){s.log("Superfly plugin debug: using document.write is bad practice and not supported")},c.prepend(window.SFM_template),document.write=d,(u.alt_menu?e:setTimeout)(function(){var o=window.LM||function(){function d(e){if(F){var a={opacity:"",visibility:"",transProp:"",backgroundColor:""};e?(a[K]=E,a.width=""):a[K]=H.data("startPos")||E,H.css(a),H.find(".sfm-active").removeClass("sfm-active")}}function m(){var a=window.innerHeight||document.documentElement.offsetHeight||document.documentElement.clientHeight,t=a-e(".sfm-logo").outerHeight()-e(".sfm-social").outerHeight()-60,t=a-(e(".sfm-logo img").length?80:0)-(e(".sfm-social").children().length?85:0)-30,i=A.find(".sfm-nav .sfm-menu li > a"),s=t/i.length,n=Math.min(s-2*u.item_padding,k?45:65);i.css({fontSize:n,lineHeight:s-u.item_padding+"px"})}function f(){if("hidden"===ae)return clearTimeout(O),h(),A.addClass("sfm-sidebar-exposed"),j.find(".sfm-navicon-button").add("#sfm-mob-navbar .sfm-navicon-button").addClass("sfm-open"),q.css("visibility","visible"),c.addClass("sfm-body-pushed"),"push"===u.sidebar_behaviour&&"full"!=u.sidebar_style&&c.children().not("[id*=sfm-], script, style").find("*").each(function(e,a){g(e,a,r.scrollTop(),r.scrollLeft())}),ae="open",!1}function p(){clearTimeout(O),U&&"push"===u.sidebar_behaviour&&e(".sfm-inner-fixed").each(w),"always"!==u.sidebar_behaviour&&"full"!==u.sidebar_style||setTimeout(function(){q.css("visibility","hidden")},400),A.find(".sfm-active-item").removeClass("sfm-active-item"),d(!0),c.removeClass("sfm-body-pushed sfm-view-pushed-custom sfm-view-pushed-1 sfm-view-pushed-2 sfm-view-pushed-3  sfm-view-pushed-4 sfm-view-visible-1 sfm-view-visible-2 sfm-view-visible-3 sfm-view-visible-4"),A.removeClass("sfm-sidebar-exposed"),j.find(".sfm-navicon-button").add("#sfm-mob-navbar .sfm-navicon-button").removeClass("sfm-open"),ae="hidden"}function b(a){function t(){var a,t,s=i.find("a"),o=s.prop("href"),r="_blank"===s.attr("target"),l=s.prop("hash");if(l&&l.length>0&&o==n+l)p(),"#"!==l&&((t=e(l)).length||(t=e('[name="'+l.replace("#","")+'"]'))),a=t&&t.length?t.offset().top:0,e("html, body").stop().animate({scrollTop:a},600);else if(r)window.open(o,"_blank");else if("yes"===u.fade){if(-1!==o.indexOf("#")&&""===l)return;c.fadeOut(200,function(){location.href=o})}else location.href=o}if(!C){C=setTimeout(function(){C=null},_),a.stopImmediatePropagation();var i=e(this);if(a.type===S)"mouseenter"===B?t():e(a.target).closest(".sfm-sm-indicator").length||k||"yes"===u.sub_type||"full"===u.sidebar_style?(s.log("ev 1",a.target),v(i,a)):(a.stopImmediatePropagation(),t());else{if(a.type!==B)return;var o=this;setTimeout(function(){o===L&&v(i,a)},225);L=this}}}function v(a,t){if(!se){s.log("event for"),ne=!1,clearTimeout(O);var i,o,r,l,m,f,b,v,h,g,w,y=parseInt((a.closest("ul").attr("class")||"0").match(/\d/)[0])+1,x=a.siblings(".sfm-active-item"),C=a.find("a"),M=X,_=Y;if(d(y<=ee),a.is(".sfm-has-child-menu"))if((i=a.children(".sfm-child-menu").first()).length)if(ie<M&&!k&&"yes"!==u.sub_type&&"full"!==u.sidebar_style){if(ne=!0,c.is(".sfm-view-pushed-"+y)&&!x.length&&(ne=!1),x.removeClass("sfm-active-item"),c.removeClass("sfm-view-pushed-custom sfm-view-pushed-"+(y+1)+" sfm-view-visible-"+(y+1)+" sfm-view-pushed-"+(y+2)+" sfm-view-visible-"+(y+2)),!A.is(".sfm-sidebar-exposed")&&"always"!==u.sidebar_behaviour)return;e(".sfm-view-level-"+y).attr("class",function(e,a){return a.replace(/(^|\s)sfm-current-\S+/g,"")}).html('<ul class="sfm-menu-level-'+y+' sfm-menu">'+i.html()+"</ul>").addClass("sfm-current-"+a.data("sfmId")),O=setTimeout(function(){c.addClass("sfm-view-pushed-"+y),"always"===u.sidebar_behaviour&&q.css("visibility","visible"),ee=y},25),a.addClass("sfm-active-item")}else{o=e(t.target),l=C.attr("href");var j=C.prop("hash");(o.closest(".sfm-sm-indicator").length||"#"===j||"#"===l||"/"===l)&&(a.is(".sfm-submenu-visible")?C.length&&t.type===S&&(a.removeClass("sfm-submenu-visible"),i.slideUp(),ne=!0):(s.log("sub",i),a.siblings().filter(".sfm-submenu-visible").removeClass("sfm-submenu-visible").find("> ul").slideUp(),a.addClass("sfm-submenu-visible"),i.slideDown(),ne=!0))}else if(v=a.attr("data-extra-width"),g=a.attr("data-bg"),h=parseInt(v||u["width_panel_"+(y+1)]),D[y-1]+h<M&&"full"!==u.sidebar_style){if(ne=!0,w=H.find("#sfm-cc-"+a.attr("data-sfm-id")),c.is(".sfm-view-pushed-"+y)&&!x.length&&(ne=!1),x.removeClass("sfm-active-item"),c.removeClass("sfm-view-pushed-custom sfm-view-pushed-"+y+" sfm-view-visible-"+y+" sfm-view-pushed-"+(y+1)+" sfm-view-visible-"+(y+1)).addClass("sfm-view-pushed-custom"),!A.is(".sfm-sidebar-exposed")&&"always"!==u.sidebar_behaviour)return;"always"===u.sidebar_behaviour&&q.css("visibility","visible"),a.addClass("sfm-active-item"),k||u.sub_type,b=_T.toString(_T.translate("right"===u.sidebar_pos?D[y-1]-D[0]:D[y-1]-h)),s.log("startPos",u.sidebar_pos,D[y-1],D[0],b),(r={opacity:1,visibility:"visible",backgroundColor:g,width:h})[K]=b,H.css(r).data("startPos",b),H.find(".sfm-active").removeClass("sfm-active"),w.width(h),_>w.outerHeight()?w.addClass("sfm-vert-align sfm-active"):w.removeClass("sfm-vert-align").addClass("sfm-active"),setTimeout(function(){H.css(K,_T.toString(_T.translate("right"===u.sidebar_pos?-h-(D[y-1]-D[0]):D[y-1])))},0),setTimeout(function(){},600),F=!0}else((o=e(t.target)).closest(".sfm-sm-indicator").length||k||"yes"===u.sub_type)&&(a.is(".sfm-submenu-visible")||(s.log("sub",i),g=a.attr("data-bg"),a.siblings().filter(".sfm-submenu-visible").removeClass("sfm-submenu-visible").find("> ul").slideUp(),H.addClass("sfm-modal"),r={opacity:1,visibility:"visible",backgroundColor:g,width:M},H.find(".sfm-active").removeClass("sfm-active"),H.find("#sfm-cc-"+a.attr("data-sfm-id")).addClass("sfm-active"),H.css(r),ne=!0));else ie<M+200&&(a.siblings(".sfm-active-item").removeClass("sfm-active-item"),O=setTimeout(function(){c.removeClass("sfm-view-pushed-custom sfm-view-pushed-"+y+" sfm-view-visible-"+y+" sfm-view-pushed-"+(y+1)+" sfm-view-visible-"+(y+1)+" sfm-view-pushed-"+(y+2)+" sfm-view-visible-"+(y+2))},50));var P=oe?"mouseenter":S;!C.length||t.type!==P||ne||oe||(l=C.prop("href"),m="_blank"===C.attr("target"),(j=C.prop("hash"))&&j.length>1&&l==n+j?(p(),a.addClass("sfm-active-item"),f="#"===C.prop("hash")?0:e(C.prop("hash")).offset().top,e("html, body").stop().animate({scrollTop:f},600)):m?window.open(l,"_blank"):location.href=l)}}function h(e){Y=window.innerHeight?window.innerHeight:r.height(),X=window.innerWidth?window.innerWidth:r.width();var a=!h.cache;a&&A.addClass("sfm-compact");var t=2*parseInt(u.item_padding);h.cache=h.cache||{headerHeight:N.is(":empty")?0:N.outerHeight()+70+t,footerHeight:(P.is(":empty")?0:P.outerHeight())+A.find(".sfm-copy").outerHeight(),contentHeight:M.outerHeight()},a&&A.removeClass("sfm-compact");var i=h.cache.contentHeight,n=h.cache.headerHeight,o=h.cache.footerHeight,l=Y-i,c="",d="",f=!1;s.log("availableSpace",Y,i,l),l<n+o+t||k||"yes"===u.sub_type?"full"!==u.sidebar_style&&(c="sfm-compact",l/2<n&&(c+=" sfm-compact-header",f=!0,l/2>o&&(d+="sfm-compact-footer")),f?Y-(n+100+t+i)<o&&(c+=" sfm-compact-footer",l/2>n&&(d+="sfm-compact-header",f=!1)):l/2<o&&(c+=" sfm-compact-footer",l/2>n&&(d+="sfm-compact-header",f=!1)),s.log("classesToAdd: "+c),s.log("classesToRemove: "+d)):d="sfm-compact sfm-compact-header sfm-compact-footer",ie>X||k||"yes"===u.sub_type||"full"===u.sidebar_style?(c+=" sfm-vertical-nav",B=S):(d+=" sfm-vertical-nav",B="mouseenter"),-1!=navigator.appVersion.indexOf("Mac")&&(c+=" sfm-mac"),d&&!a&&A.removeClass(d),c&&A.addClass(c),"full"===u.sidebar_style&&"yes"==u.dynamic&&m(Y)}function g(a,t,i,s,n,o){var l,d,u,m,f,p,b,v,h,g,w=e(t);if("fixed"===w.css("position"))if(w.addClass("sfm-inner-fixed"),U)"none"!==(d=w.css(K))?(w.data("sfm-old-matrix",d),u=(d=_T.fromString(d)).x(z),w.css(K,_T.toString(u)).data("sfm-transformed",1)):w.css(K,_T.toString(z)).data("sfm-transformed",1);else{for(l=w;(l=l.parent())&&!((g=l.css("webkitTransform"))&&"none"!==g||l.is("body")););f=(m=l.offset()).left,p=m.top,J&&w.is(":visible")&&w.hide().data("sfm-ff-hidden",1),b={left:w.css("left"),right:w.css("right"),top:w.css("top"),bottom:w.css("bottom")},J&&w.data("sfm-ff-hidden")&&w.show(),v={},h=parseInt(b.bottom),h=isNaN(h)?0:h,"auto"!==b.left?(b.toChangeHor="left",v[b.toChangeHor]="-="+(f-s)):"auto"!==b.right?(b.toChangeHor="right",v[b.toChangeHor]="-="+(f-s)):b.toChangeHor="left","auto"!==b.top?(b.toChangeVert="top",v[b.toChangeVert]=p-i>0?parseInt(b.top)-(p-i):parseInt(b.top)+(i-p)):"auto"!==b.bottom?(b.toChangeVert="bottom",v[b.toChangeVert]=c.height()+W.top+W.bottom+h-r.height()-i+"px"):(b.toChangeVert="top",v[b.toChangeVert]=i),w.css(v).data("sfm-old-pos",b)}}function w(a,t){var i,s,n=e(t);U?n.data("sfm-old-matrix")?n.css(K,n.data("sfm-old-matrix")).data("sfm-old-matrix",""):n.css(K,E).data("sfm-transformed",""):(s={},(i=n.data("sfm-old-pos"))?(s[i.toChangeHor]=i[i.toChangeHor],s[i.toChangeVert]=i[i.toChangeVert],"bottom"===i.toChangeVert&&(s.top=""),n.css(s),n.data("sfm-old-pos","")):n.css({left:"",top:"",bottom:"",right:""}))}function y(a){var t;for(t in a)a.hasOwnProperty(t)&&("skype"===t?e('<li class="sfm-icon-'+t+'"><a href="skype:'+a[t]+'?call"></a></li>').appendTo(P):"email"===t?e('<li class="sfm-icon-'+t+'"><a href="mailto:'+a[t]+'"></a></li>').appendTo(P):e('<li class="sfm-icon-'+t+'"><a href="'+a[t]+'" target="_blank"></a></li>').appendTo(P))}function x(){var e,a,t,i,s;A.add(q).bind("touchstart",function(i){"open"===ae&&(t=(new Date).getTime(),e=i.originalEvent.touches[0].pageX,a=i.originalEvent.touches[0].clientY)}).bind("touchmove",function(e){"open"===ae&&(i=e.originalEvent.touches[0].pageX,s=e.originalEvent.touches[0].clientY)}).bind("touchend",function(){if("open"===ae){var n=i>e?"right":"left",o=s-a>30||-30>s-a,r=i-e>60||-60>i-e;if(!((new Date).getTime()-t>200||o)&&r)switch(n){case"left":"left"===I?p():f();break;case"right":"left"===I?f():p()}}})}var C,M,k=window.SFM_is_mobile,S=k?e.mobile?"vclick":"tap":"click",_=u.eventsInterval||51,j=e(".sfm-rollback"),A=e("#sfm-sidebar"),q=e("#sfm-overlay-wrapper"),P=e(".sfm-social",A),T=e(u.alt_menu?u.alt_menu:"#sfm-nav"),H=e(".sfm-view-level-custom"),F=!1,N=e(".sfm-logo"),D=[];D.push(parseInt(u.width_panel_1)),D.push(D[0]+parseInt(u.width_panel_2)),D.push(D[1]+parseInt(u.width_panel_3)),D.push(D[2]+parseInt(u.width_panel_4)),u.alt_menu&&T.length?e("#sfm-nav").remove():T=e("#sfm-nav");var R,V,G,I=u.sidebar_pos,U=/msie|trident.*rv\:11\./.test(navigator.userAgent.toLowerCase()),J=/firefox/.test(navigator.userAgent.toLowerCase()),K=t("transform"),z=_T.translate("left"===I?u.width_panel_1:-u.width_panel_1,0),E=_T.toString(_T.translate(0,0)),W={top:parseInt(l.css("marginTop")),bottom:parseInt(l.css("marginBottom"))},B="mouseenter",Q=c.css("backgroundImage");"push"===u.sidebar_behaviour&&"none"!==Q&&(c.prepend('<div id="sfm-body-bg"></div>'),V=e("#sfm-body-bg"),((R={backgroundColor:c.css("backgroundColor"),backgroundImage:c.css("backgroundImage"),backgroundAttachment:c.css("backgroundAttachment"),backgroundSize:c.css("backgroundSize"),backgroundPosition:c.css("backgroundPosition"),backgroundRepeat:c.css("backgroundRepeat"),backgroundOrigin:c.css("backgroundOrigin"),backgroundClip:c.css("backgroundClip")}).backgroundColor.indexOf("(0, 0, 0, 0")+1||R.backgroundColor.indexOf("transparent")+1)&&(R.backgroundColor="#fff"),G=c.children().not("#sfm-body-bg, #sfm-fixed-container, script, style"),(parseInt(G.first().css("marginTop"))||parseInt(G.last().css("marginBottom")))&&c.addClass("sfm-body-float"),"fixed"===R.backgroundAttachment&&(R.position="fixed",R.backgroundAttachment="scroll"),V.css(R),a("body > * {position: relative} body {overflow-x:hidden!important}"));var L,O,X,Y,Z={search:u.search,addHomeLink:"yes"===u.addHomeLink,addHomeText:u.addHomeText||"Home",subMenuSupport:"yes"===u.subMenuSupport,subMenuSelector:u.subMenuSelector,activeClassSelector:u.activeClassSelector||"",allowedTags:"DIV, NAV, UL, OL, LI, A, P, H1, H2, H3, H4, SPAN, STRONG",transitionDuration:300,extra:u.menuData},$={unique:1,build:function(){var a;a=T.clone().removeAttr("id class"),a=this.processDefMenu(a),T.remove(),Z.addHomeLink&&a.prepend('<li><a href="http://'+window.location.hostname+'">'+Z.addHomeText+"</a></li>"),"UL"===a.prop("tagName")?a.addClass("sfm-menu-level-0"):a.find("ul").first().addClass("sfm-menu-level-0").siblings("ul").addClass("sfm-menu-level-0"),Z.subMenuSelector&&Z.subMenuSupport?this.buildSubMenus(a):this.removeSubMenus(a),a.find("a").each(function(){var a=e(this);a.children("span").length||e(this).wrapInner(e("<span/>")),Z.subMenuSupport&&a.parent().is(".sfm-has-child-menu")&&a.append('<ins class="sfm-sm-indicator"><i></i></ins>')}),Z.extra&&this.attachExtraTo(a.find("[class*=menu-item]")),a.prependTo(".sfm-nav .sfm-va-middle").show(),"show"===Z.search&&e(".sfm-va-middle").prepend('<form role="search" method="get" class="sfm-search-form" action="'+u.siteBase+'"><input type="text" class="search-field" placeholder="" value="" name="s"><span></span><input type="submit" class="search-submit" value="Search"></form>'),M=e(".sfm-nav"),a.removeClass("sfm-has-child-menu").addClass("sfm-menu")},processDefMenu:function(a){var t=Z.activeClassSelector?Z.activeClassSelector:"",i=Z.subMenuSelector?Z.subMenuSelector:"",s=Z.allowedTags.replace(/\s/g,"").split(","),n=a.find("[class*=menu-item]");return a.find('.skip-link, .menu-toggle, a[title*="Skip to content"]').remove(),n.each(function(){var a=this.id?this.id.replace("menu-item-",""):this.className.match(/menu-item-(\d+):?\b/)?this.className.match(/menu-item-(\d+):?\b/)[1]:"";e(this).data("sfm-id",a)}),a.find("*").each(function(){var a=e(this),n=a.prop("tagName");a.prop("className");if(-1===s.indexOf(n)||""===e.trim(a.text())||a.is(".uber-close"))return a.remove();a.hasClasses(i)?a.removeAttr("class id").addClass(i.split(",").join(" ")):a.hasClasses(t)?a.removeAttr("class id").addClass("sfm-active-class"):a.removeAttr("class id"),a.removeAttr("style"),"LI"===n&&a.addClass("sfm-menu-item-"+a.data("sfm-id"))}),a},buildSubMenus:function(a){for(var t=Z.subMenuSelector.replace(/\s/g,"").split(","),i=0,s=t.length;i<s;i++)a.find("."+t[i]).each(function(){e(this).removeAttr("id class").addClass("sfm-child-menu ").parent().addClass("sfm-has-child-menu")});this.detectLevel(a)},attachExtraTo:function(a){var t="https:"===location.protocol;a.each(function(){var a,s=e(this),n=s.data("sfm-id");if(Z.extra[n])if((a=i(Z.extra[n])).hidemob&&k)s.remove();else{if(a.img)"right"==I&&"skew"==u.sidebar_style?s.find("> a").append('<img src="'+(t?a.img.replace("http:","https:"):a.img)+'"/>'):s.find("> a").prepend('<img src="'+(t?a.img.replace("http:","https:"):a.img)+'"/>');else if(a.icon){var o=a.icon_color?"color: "+a.icon_color+";":"",r=a.icon;"####"===(LAIconManagerUtil.getSet(r)?LAIconManagerUtil.getSet(r):"Font Awesome")?(r=LAIconManagerUtil.getIcon(r),"right"==I&&"skew"==u.sidebar_style?s.find("> a").append('<i style="background-image:url('+r+')" class="la_icon la_icon_manager_custom">'):s.find("> a").prepend('<i style="background-image:url('+r+')" class="la_icon la_icon_manager_custom">')):(r=-1!==r.indexOf("fa-")?"la"+md5("Font Awesome")+"-"+r.substr(3):LAIconManagerUtil.getIconClass(r),"right"==I&&"skew"==u.sidebar_style?s.find("> a").append('<i style="'+o+'" class="la_icon '+r+'">'):s.find("> a").prepend('<i style="'+o+'" class="la_icon '+r+'">'))}a.sline&&s.find("> a span").append('<br><i class="sfm-sl">'+a.sline.replace(/\+/g," ")+"</i>"),a.chapter&&s.before('<li class="sfm-chapter"><div>'+a.chapter.replace(/\+/g," ")+"</div></li>"),a.content&&!s.find(".sfm-sm-indicator").length&&Z.subMenuSupport&&(s.addClass("sfm-has-child-menu"),s.find(" > a").append('<ins class="sfm-sm-indicator"><i></i></ins>')),s.data("sfm-extra",a),a.width&&s.attr("data-extra-width",a.width),a.bg&&s.attr("data-bg",a.bg),s.attr("data-sfm-id",n)}})},detectLevel:function(a){a.find(".sfm-child-menu").each(function(){var a=e(this),t=a.parents(".sfm-child-menu").length+1;a.addClass("sfm-menu-level-"+t),A.find(".sfm-view-level-"+t).length||A.append(e('<div class="sfm-view sfm-view-level-'+t+'"></div>'))})},removeSubMenus:function(a){if(!Z.subMenuSupport)return a.children().each(function(){e(this).find("ul").remove()});var t=Z.subMenuSelector.replace(/\s/g,"").split(",");for(var i in t)a.find("."+t[i]).each(function(){e(this).remove()})},toggleActiveClasses:function(a){a.find(".sfm-has-child-menu").each(function(){var a=e(this);a.find("*").children(".sfm-active-class").length>0&&(a.toggleClass("sfm-child-menu-open"),setTimeout(function(){a.addClass("sfm-child-menu-open"),a.find(".sfm-child-menu").first().show()},Z.transitionDuration))})}},ee=0,ae="hidden",te="off",ie=0,se=!1,ne=!1,oe=/MSIE 9/.test(navigator.userAgent);return{init:function(){$.build(),A.parent().is("body")||c.prepend(e("#sfm-body-bg, .sfm-rollback, #sfm-sidebar, #sfm-mob-navbar, #sfm-overlay-wrapper"));for(var a=Math.min(1+A.find(".sfm-view").length,4),t=1;t<=a;t++)ie+=parseInt(u["width_panel_"+t]);"always"===u.sidebar_behaviour?A.on("mouseenter "+S,".sfm-menu li:not(.sfm-chapter)",b):"full"===u.sidebar_style?A.on(S,".sfm-menu li:not(.sfm-chapter)",b):A.bind(window.transitionEnd,function(a){if(e(a.target).is(A))if(A.is(".sfm-sidebar-exposed")&&"off"===te)A.on("mouseenter "+S,".sfm-menu li:not(.sfm-chapter)",b),te="on";else if(!A.is(".sfm-sidebar-exposed")&&(A.off("mouseenter "+S,".sfm-menu-level-0 > li, .sfm-view ul > li"),te="off",q.css("visibility","hidden"),"push"===u.sidebar_behaviour)){var t=e(".sfm-inner-fixed");U||t.each(w),t.removeClass("sfm-inner-fixed")}}),oe&&A.on("mouseenter",".sfm-menu-level-0 > li:not(.sfm-chapter), .sfm-view ul > li:not(.sfm-chapter)",b),e(".sfm-view").mouseenter(function(){clearTimeout(O)}),H.on("hover"!==u.sub_opening_type||k||"yes"===u.sub_type?S:"mouseenter",function(){L=this}),"hover"!==u.opening_type||k?("click"===u.opening_type||k||"yes"===u.sub_type)&&(e("#sfm-overlay").on(S,p),"hover"===u.sub_opening_type&&A.mouseleave(function(e){setTimeout(function(){c.removeClass("sfm-view-pushed-custom sfm-view-pushed-1 sfm-view-visible-1 sfm-view-pushed-2 sfm-view-visible-2 sfm-view-pushed-3 sfm-view-visible-3"),d(!0),A.find(".sfm-active-item").removeClass("sfm-active-item"),"always"===u.sidebar_behaviour&&setTimeout(function(){q.css("visibility","hidden")},400)},250)})):("always"!==u.sidebar_behaviour&&j.mouseenter(function(a){e(a.relatedTarget).is(".sfm-sidebar-close")||f()}),A.mouseleave(function(e){setTimeout(function(){p()},250)})),u.togglers&&c.on(S,u.togglers,function(e){if(!C)return C=setTimeout(function(){C=null},_),e.preventDefault(),e.stopImmediatePropagation(),"hidden"===ae?f():p(),!1}),A.on("click",".sfm-menu a",function(e){s.log("preventing"),oe||e.preventDefault()}),r.on("resize orientationchange",h),A.on("touchmove",function(){se=!0}),A.on("touchend",function(){se=!1}),j.find(".sfm-navicon-button").add("#sfm-mob-navbar .sfm-navicon-button, .sfm-sidebar-close").on(S,function(a){if(!C)return C=setTimeout(function(){C=null},_),"hidden"===ae?(f(),e(this).addClass("sfm-open")):(p(),e(this).removeClass("sfm-open")),!1}),e("#sfm-sidebar .sfm-search-form span").on(S,function(){s.log("yo"),e(this).closest("form").submit()}),k&&(/iPad|iPhone/.test(navigator.userAgent)&&A.on("focus","input",function(a){c.css("overflowX","visible"),A.css({position:"absolute",top:"-62px"}),e(document).scrollTop(0)}).on("blur","input",function(){A.css("position",""),c.css("overflowX","hidden")}),x()),y(u.social);var i="full"==u.sidebar_style?"full":u.sidebar_behaviour,n="superfly-on sfm-style-"+u.sidebar_style+" sfm-sidebar-"+i+" sfm-toggle-"+u.opening_type+("blur"===u.blur?" sfm-blur":"");return s.log(n),c.addClass(n),e(document).ajaxComplete(function(){setTimeout(function(){c.is(".superfly-on")||c.addClass(n)},0)}),setTimeout(function(){"always"===u.sidebar_behaviour?setTimeout(function(){h(),A.css("opacity","1")},300):A.css("opacity","1")},0),"yes"===u.test_mode&&A.addClass("sfm-test-mode"),e(".sfm-close").bind(S,function(){H.removeClass("sfm-modal");var e={opacity:"",visibility:""};H.css(e),H.find(".sfm-active").removeClass("sfm-active")}),e(function(){setTimeout(function(){var a=e("#sfm-sidebar .wpcf7 form");a.length&&a.each(function(){var a=e(this);wpcf7&&wpcf7.initForm(a),wpcf7&&wpcf7.cached&&wpcf7.refill(a)})},0)}),o.init=function(){},this},showSidebar:f,hideSidebar:p,getState:function(){return ae}}}();window.LM=o.init()},0)}}),window.SFM_EVENT_DISPATCHED&&e(document).trigger("sfm_doc_body_arrived")}(window.jQuery);
//# sourceMappingURL=public.min.js.map
