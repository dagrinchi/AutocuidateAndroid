(function(cordova) {
	
	function Social() {};

Social.prototype.available = function(callback) {
	cordova.exec(function(avail) {
		callback(avail ? true : false);
	}, null, "Social", "available", []);
};

Social.prototype.share = function(message, canvas) {
	var imageData = canvas.toDataURL().replace(/data:image\/png;base64,/,'');
    cordova.exec(null, null, "Social", "share", [message, imageData]);
};
    
cordova.addConstructor(function() {
		window.plugins = window.plugins || {};
		window.plugins.social = new Social();
});

})(window.cordova || window.Cordova);
