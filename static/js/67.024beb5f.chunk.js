(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{753:function(e,n,r){!function(e){"use strict";var n=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],r=["Date","Subject","Comments","Keywords","Resent-Date"];e.registerHelper("hintWords","mbox",n.concat(r));var t=/^[ \t]/,a=/^From /,i=new RegExp("^("+n.join("|")+"): "),o=new RegExp("^("+r.join("|")+"): "),d=/^[^:]+:/,s=/^[^ ]+@[^ ]+/,c=/^.*?(?=[^ ]+?@[^ ]+)/,m=/^<.*?>/,u=/^.*?(?=<.*>)/;function l(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(t))return null;if(n.inHeader=!1,n.header=null,e.match(a))return n.inHeaders=!0,n.inSeparator=!0,"atom";var r,l=!1;return(r=e.match(o))||(l=!0)&&(r=e.match(i))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=l,n.header=r[1],"atom"):n.inHeaders&&(r=e.match(d))?(n.inHeader=!0,n.emailPermitted=!0,n.header=r[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(s)?"link":e.match(c)?"atom":(e.skipToEnd(),"atom");if(n.inHeader){var p=function(e){return"Subject"===e?"header":"string"}(n.header);if(n.emailPermitted){if(e.match(m))return p+" link";if(e.match(u))return p}return e.skipToEnd(),p}return e.skipToEnd(),null}e.defineMode("mbox",function(){return{startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:l,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1}}}),e.defineMIME("application/mbox","mbox")}(r(35))}}]);