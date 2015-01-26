/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses
For usage and examples: colpick.com/plugin
 */
(function(e){var t=function(){var t='<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',n={showEvent:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},colorScheme:"light",color:"3289c7",livePreview:true,flat:false,layout:"full",submit:1,submitText:"OK",height:156},o=function(t,n){var r=s(t);e(n).data("colpick").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()},a=function(t,n){e(n).data("colpick").fields.eq(4).val(Math.round(t.h)).end().eq(5).val(Math.round(t.s)).end().eq(6).val(Math.round(t.b)).end()},f=function(t,n){e(n).data("colpick").fields.eq(0).val(u(t))},l=function(t,n){e(n).data("colpick").selector.css("backgroundColor","#"+u({h:t.h,s:100,b:100}));e(n).data("colpick").selectorIndic.css({left:parseInt(e(n).data("colpick").height*t.s/100,10),top:parseInt(e(n).data("colpick").height*(100-t.b)/100,10)})},c=function(t,n){e(n).data("colpick").hue.css("top",parseInt(e(n).data("colpick").height-e(n).data("colpick").height*t.h/360,10))},h=function(t,n){e(n).data("colpick").currentColor.css("backgroundColor","#"+u(t))},p=function(t,n){e(n).data("colpick").newColor.css("backgroundColor","#"+u(t))},d=function(t){var n=e(this).parent().parent(),h;if(this.parentNode.className.indexOf("_hex")>0){n.data("colpick").color=h=r(_(this.value));o(h,n.get(0));a(h,n.get(0))}else if(this.parentNode.className.indexOf("_hsb")>0){n.data("colpick").color=h=O({h:parseInt(n.data("colpick").fields.eq(4).val(),10),s:parseInt(n.data("colpick").fields.eq(5).val(),10),b:parseInt(n.data("colpick").fields.eq(6).val(),10)});o(h,n.get(0));f(h,n.get(0))}else{n.data("colpick").color=h=i(M({r:parseInt(n.data("colpick").fields.eq(1).val(),10),g:parseInt(n.data("colpick").fields.eq(2).val(),10),b:parseInt(n.data("colpick").fields.eq(3).val(),10)}));f(h,n.get(0));a(h,n.get(0))}l(h,n.get(0));c(h,n.get(0));p(h,n.get(0));n.data("colpick").onChange.apply(n.parent(),[h,u(h),s(h),n.data("colpick").el,0])},v=function(t){e(this).parent().removeClass("colpick_focus")},m=function(){e(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus");e(this).parent().addClass("colpick_focus")},g=function(t){t.preventDefault?t.preventDefault():t.returnValue=false;var n=e(this).parent().find("input").focus();var r={el:e(this).parent().addClass("colpick_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:t.pageY,field:n,val:parseInt(n.val(),10),preview:e(this).parent().parent().data("colpick").livePreview};e(document).mouseup(r,b);e(document).mousemove(r,y)},y=function(e){e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val-e.pageY+e.data.y,10))));if(e.data.preview){d.apply(e.data.field.get(0),[true])}return false},b=function(t){d.apply(t.data.field.get(0),[true]);t.data.el.removeClass("colpick_slider").find("input").focus();e(document).off("mouseup",b);e(document).off("mousemove",y);return false},w=function(t){t.preventDefault?t.preventDefault():t.returnValue=false;var n={cal:e(this).parent(),y:e(this).offset().top};e(document).on("mouseup touchend",n,S);e(document).on("mousemove touchmove",n,E);var r=t.type=="touchstart"?t.originalEvent.changedTouches[0].pageY:t.pageY;d.apply(n.cal.data("colpick").fields.eq(4).val(parseInt(360*(n.cal.data("colpick").height-(r-n.y))/n.cal.data("colpick").height,10)).get(0),[n.cal.data("colpick").livePreview]);return false},E=function(e){var t=e.type=="touchmove"?e.originalEvent.changedTouches[0].pageY:e.pageY;d.apply(e.data.cal.data("colpick").fields.eq(4).val(parseInt(360*(e.data.cal.data("colpick").height-Math.max(0,Math.min(e.data.cal.data("colpick").height,t-e.data.y)))/e.data.cal.data("colpick").height,10)).get(0),[e.data.preview]);return false},S=function(t){o(t.data.cal.data("colpick").color,t.data.cal.get(0));f(t.data.cal.data("colpick").color,t.data.cal.get(0));e(document).off("mouseup touchend",S);e(document).off("mousemove touchmove",E);return false},x=function(t){t.preventDefault?t.preventDefault():t.returnValue=false;var n={cal:e(this).parent(),pos:e(this).offset()};n.preview=n.cal.data("colpick").livePreview;e(document).on("mouseup touchend",n,N);e(document).on("mousemove touchmove",n,T);var r,i;if(t.type=="touchstart"){pageX=t.originalEvent.changedTouches[0].pageX,i=t.originalEvent.changedTouches[0].pageY}else{pageX=t.pageX;i=t.pageY}d.apply(n.cal.data("colpick").fields.eq(6).val(parseInt(100*(n.cal.data("colpick").height-(i-n.pos.top))/n.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*(pageX-n.pos.left)/n.cal.data("colpick").height,10)).get(0),[n.preview]);return false},T=function(e){var t,n;if(e.type=="touchmove"){pageX=e.originalEvent.changedTouches[0].pageX,n=e.originalEvent.changedTouches[0].pageY}else{pageX=e.pageX;n=e.pageY}d.apply(e.data.cal.data("colpick").fields.eq(6).val(parseInt(100*(e.data.cal.data("colpick").height-Math.max(0,Math.min(e.data.cal.data("colpick").height,n-e.data.pos.top)))/e.data.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(e.data.cal.data("colpick").height,pageX-e.data.pos.left))/e.data.cal.data("colpick").height,10)).get(0),[e.data.preview]);return false},N=function(t){o(t.data.cal.data("colpick").color,t.data.cal.get(0));f(t.data.cal.data("colpick").color,t.data.cal.get(0));e(document).off("mouseup touchend",N);e(document).off("mousemove touchmove",T);return false},C=function(t){var n=e(this).parent();var r=n.data("colpick").color;n.data("colpick").origColor=r;h(r,n.get(0));n.data("colpick").onSubmit(r,u(r),s(r),n.data("colpick").el)},k=function(t){t.stopPropagation();var n=e("#"+e(this).data("colpickId"));n.data("colpick").onBeforeShow.apply(this,[n.get(0)]);var r=e(this).offset();var i=r.top+this.offsetHeight;var s=r.left;var o=A();var u=n.width();if(s+u>o.l+o.w){s-=u}n.css({left:s+"px",top:i+"px"});if(n.data("colpick").onShow.apply(this,[n.get(0)])!=false){n.show()}e("html").mousedown({cal:n},L);n.mousedown(function(e){e.stopPropagation()})},L=function(t){if(t.data.cal.data("colpick").onHide.apply(this,[t.data.cal.get(0)])!=false){t.data.cal.hide()}e("html").off("mousedown",L)},A=function(){var e=document.compatMode=="CSS1Compat";return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth)}},O=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},M=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},_=function(e){var t=6-e.length;if(t>0){var n=[];for(var r=0;r<t;r++){n.push("0")}n.push(e);e=n.join("")}return e},D=function(){var t=e(this).parent();var n=t.data("colpick").origColor;t.data("colpick").color=n;o(n,t.get(0));f(n,t.get(0));a(n,t.get(0));l(n,t.get(0));c(n,t.get(0));p(n,t.get(0))};return{init:function(s){s=e.extend({},n,s||{});if(typeof s.color=="string"){s.color=r(s.color)}else if(s.color.r!=undefined&&s.color.g!=undefined&&s.color.b!=undefined){s.color=i(s.color)}else if(s.color.h!=undefined&&s.color.s!=undefined&&s.color.b!=undefined){s.color=O(s.color)}else{return this}return this.each(function(){if(!e(this).data("colpickId")){var n=e.extend({},s);n.origColor=s.color;var r="collorpicker_"+parseInt(Math.random()*1e3);e(this).data("colpickId",r);var i=e(t).attr("id",r);i.addClass("colpick_"+n.layout+(n.submit?"":" colpick_"+n.layout+"_ns"));if(n.colorScheme!="light"){i.addClass("colpick_"+n.colorScheme)}i.find("div.colpick_submit").html(n.submitText).click(C);n.fields=i.find("input").change(d).blur(v).focus(m);i.find("div.colpick_field_arrs").mousedown(g).end().find("div.colpick_current_color").click(D);n.selector=i.find("div.colpick_color").on("mousedown touchstart",x);n.selectorIndic=n.selector.find("div.colpick_selector_outer");n.el=this;n.hue=i.find("div.colpick_hue_arrs");huebar=n.hue.parent();var u=navigator.userAgent.toLowerCase();var y=navigator.appName==="Microsoft Internet Explorer";var b=y?parseFloat(u.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]):0;var E=y&&b<10;var S=["#ff0000","#ff0080","#ff00ff","#8000ff","#0000ff","#0080ff","#00ffff","#00ff80","#00ff00","#80ff00","#ffff00","#ff8000","#ff0000"];if(E){var T,N;for(T=0;T<=11;T++){N=e("<div></div>").attr("style","height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="+S[T]+", endColorstr="+S[T+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+S[T]+", endColorstr="+S[T+1]+')";');huebar.append(N)}}else{stopList=S.join(",");huebar.attr("style","background:-webkit-linear-gradient(top,"+stopList+"); background: -o-linear-gradient(top,"+stopList+"); background: -ms-linear-gradient(top,"+stopList+"); background:-moz-linear-gradient(top,"+stopList+"); -webkit-linear-gradient(top,"+stopList+"); background:linear-gradient(to bottom,"+stopList+"); ")}i.find("div.colpick_hue").on("mousedown touchstart",w);n.newColor=i.find("div.colpick_new_color");n.currentColor=i.find("div.colpick_current_color");i.data("colpick",n);o(n.color,i.get(0));a(n.color,i.get(0));f(n.color,i.get(0));c(n.color,i.get(0));l(n.color,i.get(0));h(n.color,i.get(0));p(n.color,i.get(0));if(n.flat){i.appendTo(this).show();i.css({position:"relative",display:"block"})}else{i.appendTo(document.body);e(this).on(n.showEvent,k);i.css({position:"absolute"})}}})},showPicker:function(){return this.each(function(){if(e(this).data("colpickId")){k.apply(this)}})},hidePicker:function(){return this.each(function(){if(e(this).data("colpickId")){e("#"+e(this).data("colpickId")).hide()}})},setColor:function(t,n){n=typeof n==="undefined"?1:n;if(typeof t=="string"){t=r(t)}else if(t.r!=undefined&&t.g!=undefined&&t.b!=undefined){t=i(t)}else if(t.h!=undefined&&t.s!=undefined&&t.b!=undefined){t=O(t)}else{return this}return this.each(function(){if(e(this).data("colpickId")){var r=e("#"+e(this).data("colpickId"));r.data("colpick").color=t;r.data("colpick").origColor=t;o(t,r.get(0));a(t,r.get(0));f(t,r.get(0));c(t,r.get(0));l(t,r.get(0));p(t,r.get(0));r.data("colpick").onChange.apply(r.parent(),[t,u(t),s(t),r.data("colpick").el,1]);if(n){h(t,r.get(0))}}})}}}();var n=function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:e>>16,g:(e&65280)>>8,b:e&255}};var r=function(e){return i(n(e))};var i=function(e){var t={h:0,s:0,b:0};var n=Math.min(e.r,e.g,e.b);var r=Math.max(e.r,e.g,e.b);var i=r-n;t.b=r;t.s=r!=0?255*i/r:0;if(t.s!=0){if(e.r==r)t.h=(e.g-e.b)/i;else if(e.g==r)t.h=2+(e.b-e.r)/i;else t.h=4+(e.r-e.g)/i}else t.h=-1;t.h*=60;if(t.h<0)t.h+=360;t.s*=100/255;t.b*=100/255;return t};var s=function(e){var t={};var n=e.h;var r=e.s*255/100;var i=e.b*255/100;if(r==0){t.r=t.g=t.b=i}else{var s=i;var o=(255-r)*i/255;var u=(s-o)*(n%60)/60;if(n==360)n=0;if(n<60){t.r=s;t.b=o;t.g=o+u}else if(n<120){t.g=s;t.b=o;t.r=s-u}else if(n<180){t.g=s;t.r=o;t.b=o+u}else if(n<240){t.b=s;t.r=o;t.g=s-u}else if(n<300){t.b=s;t.g=o;t.r=o+u}else if(n<360){t.r=s;t.g=o;t.b=s-u}else{t.r=0;t.g=0;t.b=0}}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}};var o=function(t){var n=[t.r.toString(16),t.g.toString(16),t.b.toString(16)];e.each(n,function(e,t){if(t.length==1){n[e]="0"+t}});return n.join("")};var u=function(e){return o(s(e))};e.fn.extend({colpick:t.init,colpickHide:t.hidePicker,colpickShow:t.showPicker,colpickSetColor:t.setColor});e.extend({colpick:{rgbToHex:o,rgbToHsb:i,hsbToHex:u,hsbToRgb:s,hexToHsb:r,hexToRgb:n}})})(jQuery)