document.addEventListener('DOMContentLoaded', function () {
  var selector = '.v-faq__item, .vlv__faq-item, .vsp__faq-item, .vbv__faq-item, .vfl__faq-item';

  document.querySelectorAll(selector).forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      item.parentNode.querySelectorAll('details').forEach(function (other) {
        if (other !== item && other.open) {
          collapseAnswer(other);
        }
      });
    });
  });

  function collapseAnswer(detailsEl) {
    var answer = detailsEl.querySelector('[class*="__faq-a"], .v-faq__answer');
    if (!answer) { detailsEl.open = false; return; }

    var h = answer.scrollHeight;
    answer.style.overflow = 'hidden';

    var anim = answer.animate(
      [
        { height: h + 'px', opacity: '1' },
        { height: '0px', opacity: '0' }
      ],
      { duration: 200, easing: 'ease', fill: 'forwards' }
    );

    anim.onfinish = function () {
      detailsEl.open = false;
      answer.style.overflow = '';
      anim.cancel();
    };
  }
});
