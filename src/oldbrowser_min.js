/*
 * The MIT License (MIT)
 * Old browser detect plugin
 * By dejan dudukovic
 * Email: dexterns88@gmail.com
 * Version: 1.1
 * */
(function(e){e.oldBrowser=function(t,n){var r={};var i={};t.data("oldBrowser",this);var s=false;var o=this;var u;this.init=function(t){r=e.extend({},e.oldBrowser.defaultOptions,t);this._getBrowser();this._checkIsOld();if(s==true){this._setupMessage()}if(r.debug){this._atachDebug()}if(r.closeBtn){this._createClose()}};this._createClose=function(){var t="<a href='javascript:;' class='closeBtn'>close</a>";var n=e(t).appendTo(u);n.on("click",function(){u.remove()})};this._setupMessage=function(){var n=t.find(r.holder);var i=r.text;var s;if(r.browserLink){s=this._browserLink();if(s!=false){i=i+" "+s}}var o="<div class='messages error oldbrowser-message'>"+i+"</div>";if(r.attachMode=="prependTo"){u=e(o).prependTo(n.eq(0))}else if(r.attachMode=="insertBefore"){u=e(o).insertBefore(n.eq(0))}};this._browserLink=function(){var e=false;var t={};t.defined=false;switch(i.type){case"mozilla":t.link="http://www.mozilla.org/en-US/firefox/new/";t.text="update mozila firefox";t.defined=true;break;case"safari":t.link="http://support.apple.com/downloads/#safari";t.text="update Safari";t.defined=true;break;case"chrome":t.link="https://www.google.com/intl/en/chrome/browser/";t.text="update Google Chrome";t.defined=true;break;case"msie":t.link="http://windows.microsoft.com/en-us/internet-explorer/download-ie";t.text="update Internet Explorer";t.defined=true;break;case"opera":t.link="http://www.opera.com/computer/";t.text="update Opera";t.defined=true;break;default:t.defined=false}if(t.defined){e="<a target='_blank' href='"+t.link+"'>"+t.text+"</a>"}return e};this._checkIsOld=function(){var e=r.version[i.type];if(i.version<=e){s=true}};this._getBrowser=function(){var t=e.browser;if(!!navigator.userAgent.match(/Trident\/7\./)){i.type="msie"}else if(t.mozilla){i.type="mozilla"}else if(t.webkit){var n=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);var r=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);if(n){i.type="chrome"}else if(r){i.type="safari"}}else if(t.opera){i.type="opera"}else if(t.msie){i.type="msie"}i.version=t.version;i.version=parseInt(i.version)};this._atachDebug=function(){var t="position:fixed; top: 150px; left: 0px; background: black; padding: 10px; color: #fff; font-size: 13px;";var n="<div style='"+t+"'><b>old browser plugin <br/> DEBUG: TRUE </b><hr style='margin: 2px 0 5px'><p> <b>Browser:</b> "+i.type+" <br/> <b>Version:</b> "+i.version+"</p></div>";e("body").append(n)};this.init(n)};e.oldBrowser.defaultOptions={text:"Your browser version is not supported. Please update to the latest version of your browser.",version:{mozilla:20,opera:10,msie:8,safari:520,chrome:25},browserLink:true,holder:"body",debug:false,attachMode:"prependTo",closeBtn:false};e.fn.oldBrowser=function(t){return this.each(function(){new e.oldBrowser(e(this),t)})}})(jQuery)