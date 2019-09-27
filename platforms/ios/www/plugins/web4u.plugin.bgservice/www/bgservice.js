cordova.define("web4u.plugin.bgservice.bgservice", function(require, exports, module) {
module.exports = {
    runBackground: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "bgservice", "runBackground", [])
    }
}

});
