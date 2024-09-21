$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".header .menu");
    let burger = $(".burger");
    let body = $("body");

    burger.on("click", function () {
      if (menu.hasClass("opened")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    function openMenu() {
      burger.addClass("opened");
      menu.addClass("opened").stop().slideDown();
      body.addClass("hidden");
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").stop().slideUp();
      body.removeClass("hidden");
    }
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-aos]").length > 0) {
    AOS.init({
      delay: 0,
      duration: 800,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      onShow: () => {
        $("body").addClass("modal-open");
      },
      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => {
        e.preventDefault();
        $("body").addClass("modal-open");
      });
    });

    $("[data-micromodal-close]").map(function () {
      $(this).click((e) => {
        // e.preventDefault();
        if ($(this).attr("data-modal")) {
          setTimeout(() => {
            $("body").addClass("modal-open");
          }, 0.1);
        }
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".products-slider").length > 0) {
    let destroySliderProducts = () => {};

    if ($(window).width() >= 768) {
      $(".products-slider").addClass("destroy");
      initSliderProducts();
    } else {
      $(".products-slider").addClass("destroy");
    }

    $(window).resize(function () {
      if ($(window).width() < 768) {
        destroySliderProducts();
      } else {
        initSliderProducts();
      }
    });

    function initSliderProducts() {
      if ($(".products-slider").hasClass("destroy")) {
        $(".products-slider").removeClass("destroy");

        const swiper = new Swiper(".products-slider", {
          slidesPerView: 1,
          initialSlide: 1,
          spaceBetween: 32,
          centeredSlides: true,
          watchSlidesProgress: true,
          loop: false,
          // navigation: {
          //   prevEl: ".reviews__conrtrols .swiperBtnPrev",
          //   nextEl: ".reviews__conrtrols .swiperBtnNext",
          // },
          breakpoints: {
            768: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
          },
        });

        destroySliderProducts = () => {
          if (!$(".products-slider").hasClass("destroy")) {
            swiper.destroy(true, true);
            $(".products-slider").addClass("destroy");
            $(".products-slider").find(".swiper-wrapper").removeAttr("style");
          }
        };
      }
    }
  }

  if ($(".fabric-slider").length > 0) {
    const swiper = new Swiper(".fabric-slider", {
      slidesPerView: 1,
      spaceBetween: 32,
      centeredSlides: true,
      watchSlidesProgress: true,
      loop: false,
      pagination: {
        el: ".fabric-slider .swiper-pagination",
        clickable: true,
      },
    });
  }
});
