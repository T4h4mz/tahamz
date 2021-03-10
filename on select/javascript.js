var iconClassName = "fd-icon-1858152601";

var showIcon = function () {
  var img = document.createElement("img");
  img.src = "icon.png";
  img.classList.add(iconClassName);
  s = window.getSelection().getRangeAt(0).getBoundingClientRect();
  img.style.left = s.right + "px";
  img.style.top = s.top - 15 + "px";

  document.body.appendChild(img);
};

var hideIcon = function () {
  var img = document.getElementsByClassName(iconClassName);

  if (img.length <= 0) {
    return;
  }

  document.body.removeChild(img[0]);
};

var onChange = function () {
  var selectedTextLength = window.getSelection().toString().length;

  if (!selectedTextLength || selectedTextLength < 2) {
    hideIcon();
    return;
  }

  if (document.getElementsByClassName(iconClassName).length > 0) {
    return;
  }

  showIcon();
};

document.addEventListener("selectionchange", onChange);
