document.addEventListener('DOMContentLoaded', function () {
  var selector = '.v-faq__item, .vlv__faq-item, .vsp__faq-item, .vbv__faq-item, .vfl__faq-item';
  document.querySelectorAll(selector).forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      item.parentNode.querySelectorAll('details').forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });
});
