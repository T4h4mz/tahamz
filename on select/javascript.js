var fdWidget = function () {
  var buttonClassName = "fd-button-1858152601";

  var showIcon = function () {
    var img = document.getElementsByClassName(buttonClassName);
    s = window.getSelection().getRangeAt(0).getBoundingClientRect();
    img[0].style.left = s.right + "px";
    img[0].style.top = s.top - 15 + "px";
    img[0].style.display = "block";
  };

  var hideIcon = function () {
    var img = document.getElementsByClassName(buttonClassName);

    if (img.length <= 0) {
      return;
    }

    img[0].style.display = "none";
  };

  var onChange = function () {
    var selectedTextLength = window.getSelection().toString().length;
    if (!selectedTextLength || selectedTextLength < 2) {
      hideIcon();
      return;
    }

    showIcon();
  };

  var buttonClick = function () {
    alert("شما " + window.getSelection().toString() + " را انتخاب کردید.");
  };

  document.addEventListener("mouseup", onChange);

  document
    .getElementsByClassName("fd-button-1858152601")[0]
    .addEventListener("click", buttonClick);
};

fdWidget();
