document.addEventListener('DOMContentLoaded', function () {
  var selector = '.v-faq__item, .vlv__faq-item, .vsp__faq-item, .vbv__faq-item, .vfl__faq-item, .vfp__item';

  document.querySelectorAll(selector).forEach(function (item) {
    var summary = item.querySelector('summary');
    if (!summary) return;

    summary.addEventListener('click', function (e) {
      e.preventDefault();

      if (item.open) {
        collapseItem(item);
      } else {
        item.parentNode.querySelectorAll('details').forEach(function (other) {
          if (other !== item && other.open) collapseItem(other);
        });
        expandItem(item);
      }
    });
  });

  function expandItem(detailsEl) {
    var answer = detailsEl.querySelector('[class*="__faq-a"], .v-faq__answer, .vfp__a');
    if (!answer) { detailsEl.open = true; return; }

    detailsEl.open = true;
    var h = answer.scrollHeight;
    answer.style.overflow = 'hidden';

    answer.animate(
      [{ height: '0px', opacity: '0' }, { height: h + 'px', opacity: '1' }],
      { duration: 260, easing: 'ease' }
    ).onfinish = function () {
      answer.style.overflow = '';
    };
  }

  function collapseItem(detailsEl) {
    var answer = detailsEl.querySelector('[class*="__faq-a"], .v-faq__answer, .vfp__a');
    if (!answer) { detailsEl.open = false; return; }

    var h = answer.scrollHeight;
    answer.style.overflow = 'hidden';

    var anim = answer.animate(
      [{ height: h + 'px', opacity: '1' }, { height: '0px', opacity: '0' }],
      { duration: 220, easing: 'ease', fill: 'forwards' }
    );

    anim.onfinish = function () {
      detailsEl.open = false;
      answer.style.overflow = '';
      anim.cancel();
    };
  }
});
