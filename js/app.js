"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  // height 100vh fix for IOS
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // resize

  window.addEventListener('resize', function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));

    if (productsSlider) {
      setTimeout(function () {
        var heightProductsSlides = getMaxElementsHeight(productsSlides);
        productsSlides.forEach(function (item) {
          item.style.minHeight = heightProductsSlides + 'px';
        });
      }, 100);
    }
  }); // aos animations

  AOS.init({
    duration: 700,
    once: true
  }); // inputmask

  Inputmask().mask(document.querySelectorAll('input')); // textarea

  document.querySelectorAll('textarea').forEach(function (el) {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', function (e) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    });
  }); // slim select

  var allSelect = document.querySelectorAll('.input-control__select');

  if (allSelect) {
    allSelect.forEach(function (item) {
      new SlimSelect({
        select: item
      });
    });
  } // mobile menu


  var hamburger = document.getElementById('hamburger-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileMenuClose = document.getElementById('mobile-menu-close');
  var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  if (hamburger && mobileMenu && mobileMenuClose && mobileMenuOverlay) {
    hamburger.addEventListener('click', function (event) {
      event.preventDefault();
      mobileMenu.classList.add('mobile-menu--active');
      document.body.classList.add('scroll-disabled');
      mobileMenuOverlay.classList.add('mobile-menu-overlay--active');
    });
    mobileMenuClose.addEventListener('click', function (event) {
      event.preventDefault();
      mobileMenu.classList.remove('mobile-menu--active');
      document.body.classList.remove('scroll-disabled');
      mobileMenuOverlay.classList.remove('mobile-menu-overlay--active');
    });
    mobileMenuOverlay.addEventListener('click', function (event) {
      event.preventDefault();
      mobileMenu.classList.remove('mobile-menu--active');
      document.body.classList.remove('scroll-disabled');
      mobileMenuOverlay.classList.remove('mobile-menu-overlay--active');
    });
  } // filter


  var filter = document.getElementById('filter-toggle');
  var filterClose = document.getElementById('filter-close');
  var filterOverlay = document.getElementById('filter-overlay');

  if (filter && filterClose && filterOverlay) {
    filter.addEventListener('click', function (event) {
      event.preventDefault();
      var parent = filter.closest('.filter');
      parent.classList.add('filter--active');
    });
    filterClose.addEventListener('click', function (event) {
      event.preventDefault();
      var parent = filter.closest('.filter');
      parent.classList.remove('filter--active');
    });
    filterOverlay.addEventListener('click', function (event) {
      event.preventDefault();
      var parent = filter.closest('.filter');
      parent.classList.remove('filter--active');
    });
  } // slides up/down/toggle


  var slideUpQna = function slideUpQna(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.previousElementSibling.style.pointerEvents = 'none';
    window.setTimeout(function () {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.previousElementSibling.style.pointerEvents = 'auto';
    }, duration);
    target.parentNode.classList.remove('is--open');
  };

  var slideDownQna = function slideDownQna(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
    target.style.removeProperty('display');
    var display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.previousElementSibling.style.pointerEvents = 'none';
    window.setTimeout(function () {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.previousElementSibling.style.pointerEvents = 'auto';
    }, duration);
    target.parentNode.classList.add('is--open');
  };

  var slideToggleQna = function slideToggleQna(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;

    if (window.getComputedStyle(target).display === 'none') {
      return slideDownQna(target, duration);
    } else {
      return slideUpQna(target, duration);
    }
  }; // accordeon


  var accordeonTrigger = document.querySelectorAll('.c-accordeon__trigger');

  if (accordeonTrigger) {
    accordeonTrigger.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();

        if (!item.parentNode.classList.contains('is--open')) {
          slideDownQna(item.nextElementSibling);
        } else {
          slideUpQna(item.nextElementSibling);
        }
      });
    });
  } // tabs


  var tabsItems = document.querySelectorAll('.contacts-tabs__item');

  if (tabsItems) {
    tabsItems.forEach(function (item, i) {
      item.addEventListener('click', function () {
        var parent = item.closest('.contacts-tabs');
        parent.querySelectorAll('.contacts-tabs__item').forEach(function (child) {
          return child.classList.remove('contacts-tabs__item--active');
        });
        parent.querySelectorAll('.contacts-tabs__wrapper').forEach(function (child) {
          return child.classList.remove('contacts-tabs__wrapper--active');
        });
        item.classList.add('contacts-tabs__item--active');
        var el = parent.querySelector('.contacts-tabs__item--active');

        var index = _toConsumableArray(parent.querySelectorAll('.contacts-tabs__item')).indexOf(el);

        parent.querySelectorAll('.contacts-tabs__wrapper')[index].classList.add('contacts-tabs__wrapper--active');
      });
    });
  } // range


  var rangeMoney = document.getElementById('range-money');
  var rangeInputMin = document.getElementById('range-money-min');
  var rangeInputMax = document.getElementById('range-money-max');
  var inputs = [rangeInputMin, rangeInputMax];

  if (rangeMoney) {
    noUiSlider.create(rangeMoney, {
      start: [0, 12000],
      connect: true,
      range: {
        'min': 0,
        'max': 20000
      }
    });
    rangeMoney.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        rangeMoney.noUiSlider.setHandle(handle, Math.round(this.value));
      });
      input.addEventListener('keydown', function (e) {
        var values = rangeMoney.noUiSlider.get();
        var value = Number(values[handle]); // [[handle0_down, handle0_up], [handle1_down, handle1_up]]

        var steps = rangeMoney.noUiSlider.steps(); // [down, up]

        var step = steps[handle];
        var position; // 13 is enter,
        // 38 is key up,
        // 40 is key down.

        switch (e.which) {
          case 13:
            rangeMoney.noUiSlider.setHandle(handle, Math.round(this.value));
            break;

          case 38:
            // Get step to go increase slider value (up)
            position = step[1]; // false = no step is set

            if (position === false) {
              position = 1;
            } // null = edge of slider


            if (position !== null) {
              rangeMoney.noUiSlider.setHandle(handle, Math.round(value + position));
            }

            break;

          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              rangeMoney.noUiSlider.setHandle(handle, Math.round(value - position));
            }

            break;
        }
      });
    });
  } // modal


  var modal = document.querySelectorAll('.modal');
  var modalBtn = document.querySelectorAll('.modal-btn');
  var modalClose = document.querySelectorAll('.modal__close');
  var modalOverlay = document.querySelectorAll('.modal__overlay');

  if (modal && modalBtn && modalClose && modalOverlay) {
    // modal btn
    modalBtn.forEach(function (item, i) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        var modalID = item.dataset.id;
        document.querySelectorAll('.modal.modal--active').forEach(function (child) {
          return child.classList.remove('modal--active');
        });
        document.getElementById(modalID).classList.add('modal--active');
        document.body.classList.add('scroll-disabled');
      });
    }); // modal close

    modalClose.forEach(function (item) {
      item.addEventListener('click', function () {
        document.querySelectorAll('.modal.modal--active').forEach(function (child) {
          return child.classList.remove('modal--active');
        });
        document.body.classList.remove('scroll-disabled');
      });
    }); // modal overlay

    modalOverlay.forEach(function (item) {
      item.addEventListener('click', function () {
        document.querySelectorAll('.modal.modal--active').forEach(function (child) {
          return child.classList.remove('modal--active');
        });
        document.body.classList.remove('scroll-disabled');
      });
    });
  } // get max height


  function getMaxElementsHeight(elements) {
    var heights = elements.map(function (elements) {
      return elements.getBoundingClientRect().height;
    });
    return Math.max.apply(null, heights);
  } // main slider


  var mainSlider = document.querySelector('.main__slider .swiper');

  if (mainSlider) {
    var myMainSlider = new Swiper(mainSlider, {
      slidesPerView: 1,
      speed: 800,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  } // products slider


  var productsSlider = document.querySelector('.products__slider .swiper');

  var productsSlides = _toConsumableArray(document.querySelectorAll('.products__slider .products__item'));

  if (productsSlider) {
    setTimeout(function () {
      var heightProductsSlides = getMaxElementsHeight(productsSlides);
      productsSlides.forEach(function (item) {
        item.style.minHeight = heightProductsSlides + 'px';
      });
    }, 100);
    var myProductsSlider = new Swiper(productsSlider, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 800,
      navigation: {
        prevEl: productsSlider.closest('.products__slider').querySelector('.swiper-button-prev'),
        nextEl: productsSlider.closest('.products__slider').querySelector('.swiper-button-next')
      },
      breakpoints: {
        0: {
          spaceBetween: 10
        },
        1024: {
          spaceBetween: 20
        }
      }
    });
  } // photos slider


  var photosSlider = document.querySelector('.photos__slider .swiper');

  if (photosSlider) {
    var myPhotosSlider = new Swiper(photosSlider, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      speed: 800,
      navigation: {
        prevEl: photosSlider.closest('.photos__slider').querySelector('.swiper-button-prev'),
        nextEl: photosSlider.closest('.photos__slider').querySelector('.swiper-button-next')
      },
      breakpoints: {
        0: {
          spaceBetween: 10
        },
        768: {
          spaceBetween: 20
        }
      }
    });
  }
});