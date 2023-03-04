(function ($) {
  var svgObject, svgColorables, title, paintButton, resetButton;
  var fillSpeed = 0.15;
  var colors = [
    "#FFFFFF",
    "#8E53A1",
    "#6ABD46",
    "#71CCDC",
    "#F7ED45",
    "#F7DAAF",
    "#EC2527",
    "#F16824",
    "#CECCCC",
    "#5A499E",
    "#06753D",
    "#024259",
    "#FDD209",
    "#7D4829",
    "#931B1E",
    "#B44426",
    "#979797",
    "#C296C5",
    "#54B948",
    "#3C75BB",
    "#F7ED45",
    "#E89D5E",
    "#F26F68",
    "#F37123",
    "#676868",
    "#9060A8",
    "#169E49",
    "#3CBEB7",
    "#FFCD37",
    "#E5B07D",
    "#EF3C46",
    "#FDBE17",
    "#4E4D4E",
    "#6B449B",
    "#BACD3F",
    "#1890CA",
    "#FCD55A",
    "#D8C077",
    "#A62E32",
    "#F16A2D",
    "#343433",
    "#583E98",
    "#BA539F",
    "#9D2482",
    "#DD64A5",
    "#DB778D",
    "#EC4394",
    "#E0398C",
    "#68AF46",
    "#4455A4",
    "#FBEE34",
    "#AD732A",
    "#D91E36",
    "#F99B2A",
  ];

  function initialize() {
    svgObject = $("#star-svg");
    svgColorables = $("g#scene", svgObject).children();
    // paintButton = $("path#nithu-path", svgObject);
    // resetButton = $("path#astronomy-path", svgObject);
    title = $(".title");

    $(window).on("click", svgRandom);
    $(window).on("double-click", svgClear);
    // paintButton.on("click", svgRandom);
    // resetButton.on("click", svgClear);
  }

  function getRandomColor() {
    var randomNum = Math.floor(Math.random() * colors.length + 1);
    return colors[randomNum];
  }

  function svgRandom() {
    $(svgColorables).each(function () {
      TweenMax.to(this, fillSpeed, { fill: getRandomColor() });
    });
    title.css("color", getRandomColor());
  }

  function svgClear() {
    $(svgColorables).each(function () {
      TweenMax.to(this, fillSpeed, { fill: "#FFF" });
    });
    title.css("color", "#000");
  }

  $(window).load(initialize);
})(jQuery);
