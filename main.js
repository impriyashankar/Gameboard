var main = function () {

  $(".more-btn").on("click", (event) => {
    console.log("hi");
    const item = $(event.currentTarget).closest('.more-info').find('.details');
    item.toggleClass('hide');
    console.log(item);
  });
};

$(".share").on("click", (event) => {
  $(event.currentTarget).closest('.details').find('.media').toggleClass('hide');
});

$(".notification").on("click", (event) => {
  $(event.currentTarget).toggleClass("active");
});

$(document).ready(main);
