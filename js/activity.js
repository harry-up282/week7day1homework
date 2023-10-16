// $(document).ready(function () {
//   // Add a click event handler to all table cells with class 'selectable'
//   $("table td.selectable").click(function () {
//     // Toggle the 'selected' class on the clicked cell
//     $(this).toggleClass("selected");
//   });
// });
// $(document).ready(function () {
//   // Add a click event handler to all table cells with class 'selectable'
//   $("table td.selectable").click(function () {
//     // Toggle the 'selected' class on the clicked cell
//     $(this).toggleClass("selected");
//   });
// });
$(document).ready(function(){
  // Add a click event handler to all table cells with class 'selectable'
  $("table td.selectable").on("click", function () {
    // Toggle the 'selected' class on the clicked cell
    $(this).toggleClass("selected");
  });
});
