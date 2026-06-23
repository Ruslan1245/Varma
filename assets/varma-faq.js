document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.v-faq__item');
  items.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
