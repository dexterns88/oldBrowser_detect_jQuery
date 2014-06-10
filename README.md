#oldBrowser_detect_jQuery
<br/>

jquery plugin to detect old browser and write message for upload browser with link

<br/>
####Requirement####
* jQuery 1.4+

<br/>
####How to use:####
<br/>

    $(document).ready(function(){
      $(document).oldBrowser({
        text : "Your browser version is not supported. Please update to the latest version of your browser.",
        version: {
          mozilla : 20,
          opera: 10,
          msie: 8,
          safari: 520,
          chrome: 25
        },
        browserLink: true,
        holder: "body",
        debug: false,
        attachMode: 'prependTo',  // prependTo | insertBefore
        closeBtn: false
      });
     });

* text => text for message box
* version => add browser versin limit
 * mozilla
 * opera
 * msie
 * safari
 * chrome
* browser link => add link for download new version of browser
* holder => selector on which element to add
* attachMode => prependTo or insertBefore holder
* closeBtn => add close btn for message box
* debug => add debug windows where you can see browser type and version

<br/>
###Features###

version: 1.1
- add animation for hide message
- add options for links to download browser
- add options for one time open per user/browser ( JavaScript Cookies requirement )

### ###
