"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var progressBar = document.querySelectorAll(".progress-bar");
  var time = 2500;

  function calculateTime(time, dataCount) {
    return time / dataCount;
  }

  progressBar.forEach(function (i) {
    var count = 0;
    var label = i.children[0];
    var line = i.children[1];
    var dataCount = label.getAttribute("data-count");
    var lineCount = line.children[0];
    var value = line.style.width.substr(0, line.style.width.length - 2) / 100;
    var runTime = calculateTime(time, dataCount);
    var animationLineCount = setInterval(function () {
      if (count < dataCount) {
        count++;
        label.innerHTML = count + "%";
        lineCount.style.width = count * value + "px";
      }
    }, runTime);
    console.log(value);
  });
});
//# sourceMappingURL=progress.dev.js.map
