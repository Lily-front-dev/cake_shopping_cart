$("#smart-basket__alert-wrapper").on("show", function () {
   $("body").addClass("modal-open");
}).on("hidden", function () {
   $("body").removeClass("modal-open")
});