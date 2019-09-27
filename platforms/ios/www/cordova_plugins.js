cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "web4u.plugin.bgservice.bgservice",
      "file": "plugins/web4u.plugin.bgservice/www/bgservice.js",
      "pluginId": "web4u.plugin.bgservice",
      "clobbers": [
        "bgservice"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "web4u.plugin.bgservice": "1.0"
  };
});