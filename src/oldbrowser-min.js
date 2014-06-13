if(typeof jQuery=="undefined"){throw new Error("oldBrowser plugin require jQuery")}(function(a){a.oldBrowser=function(e,d){var g,f={},i={},b=false,c={},h=this;e.data("oldBrowser",this);this.init=function(j){f=a.extend({},a.oldBrowser.defaultOptions,j);this.checkBrowsCp();this._getBrowser();this._checkIsOld();if(b==true){this._setupMessage()}if(f.debug){this._atachDebug()}if(f.closeBtn){this._createClose()}};this.checkBrowsCp=function(){if(a.browser==undefined){this.createBrowser()}else{c=a.browser}};this.createBrowser=function(){matched=h.uaMatch(navigator.userAgent);if(matched.browser){c[matched.browser]=true;c.version=matched.version}if(c.chrome){c.webkit=true}else{if(c.webkit){c.safari=true}}};this.uaMatch=function(k){k=k.toLowerCase();var j=/(chrome)[ \/]([\w.]+)/.exec(k)||/(webkit)[ \/]([\w.]+)/.exec(k)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(k)||/(msie) ([\w.]+)/.exec(k)||k.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(k)||[];return{browser:j[1]||"",version:j[2]||"0"}};this._createClose=function(){var j="<a href='javascript:;' class='closeBtn'>close</a>";var k=a(j).appendTo(g);if(a().on){k.on("click",function(l){l.preventDefault();g.remove()})}else{k.click(function(l){l.preventDefault();g.remove()})}};this._setupMessage=function(){var m,k=e.find(f.holder),l=f.text;if(f.browserLink){m=this._browserLink();if(m!=false){l=l+" "+m}}var j="<div class='messages error oldbrowser-message'>"+l+"</div>";if(f.attachMode=="prependTo"){g=a(j).prependTo(k.eq(0))}else{if(f.attachMode=="insertBefore"){g=a(j).insertBefore(k.eq(0))}}};this._browserLink=function(){var k=false,j={};j.defined=false;switch(i.type){case"mozilla":j.link="http://www.mozilla.org/en-US/firefox/new/";j.text="update mozila firefox";j.defined=true;break;case"safari":j.link="http://support.apple.com/downloads/#safari";j.text="update Safari";j.defined=true;break;case"chrome":j.link="https://www.google.com/intl/en/chrome/browser/";j.text="update Google Chrome";j.defined=true;break;case"msie":j.link="http://windows.microsoft.com/en-us/internet-explorer/download-ie";j.text="update Internet Explorer";j.defined=true;break;case"opera":j.link="http://www.opera.com/computer/";j.text="update Opera";j.defined=true;break;default:j.defined=false}if(j.defined){k="<a target='_blank' href='"+j.link+"'>"+j.text+"</a>"}return k};this._checkIsOld=function(){var j=f.version[i.type];if(i.version<=j){b=true}};this._getBrowser=function(){if(!!navigator.userAgent.match(/Trident\/7\./)){i.type="msie"}else{if(c.mozilla){i.type="mozilla"}else{if(c.webkit){var k=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);var j=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);if(k){i.type="chrome"}else{if(j){i.type="safari"}}}else{if(c.opera){i.type="opera"}else{if(c.msie){i.type="msie"}}}}}i.version=c.version;i.version=parseInt(i.version)};this._atachDebug=function(){var k="position:fixed; top: 150px; left: 0px; background: black; padding: 10px; color: #fff; font-size: 13px;",j="<div style='"+k+"'><b>old browser plugin <br/> DEBUG: TRUE </b><hr style='margin: 2px 0 5px'><p> <b>Browser:</b> "+i.type+" <br/> <b>Version:</b> "+i.version+"</p></div>";a("body").append(j)};this.init(d)};a.oldBrowser.defaultOptions={attachMode:"prependTo",browserLink:true,closeBtn:false,debug:false,text:"Your browser version is not supported. Please update to the latest version of your browser.",version:{mozilla:20,opera:10,msie:8,safari:520,chrome:25},holder:"body"};a.fn.oldBrowser=function(b){return this.each(function(){(new a.oldBrowser(a(this),b))})}})(jQuery);