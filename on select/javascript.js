var fdWidget = function () {
  var buttonClassName = "fd-button-1858152601";
  var iframeId = "fd-iframe-1858152601";
  var ifrm = document.getElementById(iframeId);

  var showIcon = function () {
    var img = document.getElementsByClassName(buttonClassName);
    s = window.getSelection().getRangeAt(0).getBoundingClientRect();
    img[0].style.left = s.left + "px";
    img[0].style.top = s.top - 30 + "px";
    img[0].style.display = "block";
  };

  var hideIcon = function () {
    var img = document.getElementsByClassName(buttonClassName);

    if (img.length <= 0) {
      return;
    }

    img[0].style.display = "none";
    ifrm.style.display = "none";
  };

  var onChange = function (event) {
    console.log(event);
    var selectedTextLength = window.getSelection().toString().length;
    if (!selectedTextLength || selectedTextLength < 2) {
      hideIcon();
      return;
    }

    showIcon();
  };

  var buttonClick = function () {
    ifrm.setAttribute(
      "src",
      "https://fastdic.com/word/" + window.getSelection().toString()
    );
    ifrm.style.display = "block";
  };

  document.addEventListener("mouseup", onChange);

  document
    .getElementsByClassName("fd-button-1858152601")[0]
    .addEventListener("click", buttonClick);
};

fdWidget();
