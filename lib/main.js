"use strict";

var user = "dellamina";
var repo = "gitignore-cli";

document.addEventListener("DOMContentLoaded", function () {
  axios.get("https://raw.githubusercontent.com/" + user + "/" + repo + "/master/readme.md").then(function (res) {
    if (res.data) {
      document.getElementById("readme").innerHTML = new markdownit().render(res.data);
    }
  }, function (err) {
    console.error(err.message, err);
  });
});
