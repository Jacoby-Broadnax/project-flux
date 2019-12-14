(function () {
    var video = document.querySelector('#player');
  
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource('https://peer2.ustv.to/ABC/myStream/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9MTIvMTQvMjAxOSA4OjE2OjQ1IFBNJmhhc2hfdmFsdWU9VXo4TFVSVmJSWFFPaDc0dnRCS3J2dz09JnZhbGlkbWludXRlcz0zNjAwJnN0cm1fbGVuPTA=');
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    }
    
    plyr.setup(video);
  })();