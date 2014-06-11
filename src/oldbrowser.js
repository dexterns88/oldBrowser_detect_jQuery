/*
* The MIT License (MIT)
* Old browser detect plugin
* By dejan dudukovic
* Email: dexterns88@gmail.com
* Version: 1.1
* */
(function($) {

  $.oldBrowser = function( element , options ) {

    var message,
      settings = {},
      globBrowser = {},
      setStart = false,
      obj = this;

    element.data('oldBrowser', this);

    this.init = function( options ) {
      settings = $.extend( {}, $.oldBrowser.defaultOptions, options );
      //get browser
      this._getBrowser();
      this._checkIsOld();

    // set message if neeed
      if( setStart == true ) {
        this._setupMessage();
      }

      if( settings.debug ) {
        this._atachDebug();
      }

      if( settings.closeBtn ) {
        this._createClose();
      }
    };

    this._createClose = function() {
      var tmpClose = "<a href='javascript:;' class='closeBtn'>close</a>";
      var close = $(tmpClose).appendTo(message);

      if( $().on ) {
        close.on('click', function(e) {
          e.preventDefault();
          message.remove();
        });
      } else {
        close.click(function(e) {
          e.preventDefault();
          message.remove();
        });
      }

    };

    this._setupMessage = function() {
      var tmpLink,
        holder = element.find( settings.holder),
        txtMessage = settings.text;

      if( settings.browserLink ) {
        tmpLink = this._browserLink();

        if( tmpLink != false ) {
          txtMessage = txtMessage + " " + tmpLink;
        }
      }

      var tmpMessage = "<div class='messages error oldbrowser-message'>" + txtMessage + "</div>";

      if( settings.attachMode == 'prependTo' ) {
        message = $(tmpMessage).prependTo(holder.eq(0));
      } else if( settings.attachMode == 'insertBefore') {
        message = $(tmpMessage).insertBefore(holder.eq(0));
      }

    };

    this._browserLink = function() {
      var out = false,
        tmpBrowserLink = {};

      tmpBrowserLink.defined = false;

      switch( globBrowser.type ) {
        case 'mozilla':
          tmpBrowserLink.link = 'http://www.mozilla.org/en-US/firefox/new/';
          tmpBrowserLink.text = 'update mozila firefox';
          tmpBrowserLink.defined = true;
          break;
        case 'safari':
          tmpBrowserLink.link = "http://support.apple.com/downloads/#safari";
          tmpBrowserLink.text = "update Safari";
          tmpBrowserLink.defined = true;
          break;
        case 'chrome':
          tmpBrowserLink.link = "https://www.google.com/intl/en/chrome/browser/";
          tmpBrowserLink.text = "update Google Chrome";
          tmpBrowserLink.defined = true;
          break;
        case 'msie':
          tmpBrowserLink.link = "http://windows.microsoft.com/en-us/internet-explorer/download-ie";
          tmpBrowserLink.text = "update Internet Explorer";
          tmpBrowserLink.defined = true;
          break;
        case 'opera':
          tmpBrowserLink.link = "http://www.opera.com/computer/";
          tmpBrowserLink.text = "update Opera";
          tmpBrowserLink.defined = true;
          break;
        default:
          tmpBrowserLink.defined = false;
      }

      if( tmpBrowserLink.defined ) {
        out = "<a target='_blank' href='"+tmpBrowserLink.link+"'>"+ tmpBrowserLink.text +"</a>"
      }

      return out;
    };

    this._checkIsOld = function() {
      var getSettingVersin = settings.version[globBrowser.type];

      if( globBrowser.version <= getSettingVersin ) {
        setStart = true;
      }
    };

    this._getBrowser = function() {
      var browser = $.browser;

      if ( !!navigator.userAgent.match(/Trident\/7\./) ) {
        globBrowser.type = 'msie';
      } else if( browser.mozilla ) {
        globBrowser.type = 'mozilla';
      } else if( browser.webkit ) {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
        if( isChrome ) {
          globBrowser.type = 'chrome';
        } else if( isSafari ) {
          globBrowser.type = 'safari';
        }
      } else if( browser.opera ) {
        globBrowser.type = 'opera';
      } else if( browser.msie ) {
        globBrowser.type = 'msie';
      }

      globBrowser.version = browser.version;
      globBrowser.version = parseInt( globBrowser.version );

    };

    // debugin function tools
    this._atachDebug = function() {
      var style = "position:fixed; top: 150px; left: 0px; background: black; padding: 10px; color: #fff; font-size: 13px;",
        tmpMsg = "<div style='"+style+"'><b>old browser plugin <br/> DEBUG: TRUE </b><hr style='margin: 2px 0 5px'><p> <b>Browser:</b> " + globBrowser.type + " <br/> <b>Version:</b> " + globBrowser.version + "</p></div>";
      $('body').append(tmpMsg);
    };

    this.init(options);

  };

  $.oldBrowser.defaultOptions = {
    attachMode: 'prependTo',  // prependTo | insertBefore
    browserLink: true,
    closeBtn: false,
    debug: false,
    text : "Your browser version is not supported. Please update to the latest version of your browser.",
    version: {
      mozilla : 20,
      opera: 10,
      msie: 8,
      safari: 520,
      chrome: 25
    },
    holder: "body"
  };

  $.fn.oldBrowser = function(options) {
    return this.each(function() {
      (new $.oldBrowser($(this), options));
    });
  };

})(jQuery);