$(document).ready(function () {
  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

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

  if ($(".group-slider").length > 0) {
    let destroySliderGroup = () => {};

    if ($(window).width() >= 768) {
      $(".group-slider").addClass("destroy");
      initSliderGroup();
    } else {
      $(".group-slider").addClass("destroy");
    }

    $(window).resize(function () {
      if ($(window).width() < 768) {
        destroySliderGroup();
      } else {
        initSliderGroup();
      }
    });

    function initSliderGroup() {
      if ($(".group-slider").hasClass("destroy")) {
        $(".group-slider").removeClass("destroy");

        const swiper = new Swiper(".group-slider", {
          slidesPerView: 1,
          initialSlide: 1,
          spaceBetween: 32,
          centeredSlides: true,
          watchSlidesProgress: true,
          loop: false,
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

        destroySliderGroup = () => {
          if (!$(".group-slider").hasClass("destroy")) {
            swiper.destroy(true, true);
            $(".group-slider").addClass("destroy");
            $(".group-slider").find(".swiper-wrapper").removeAttr("style");
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

  if ($(".partners-slider").length > 0) {
    const swiper = new Swiper(".partners-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".partners .swiperBtnPrev",
        nextEl: ".partners .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".our-history").length > 0) {
    const swiperSmall = new Swiper(".slider-history-small", {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 2.2,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
      },
    });

    const swiperBig = new Swiper(".slider-history-big", {
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiperBtnNext",
        prevEl: ".swiperBtnPrev",
      },
      thumbs: {
        swiper: swiperSmall,
      },
    });
  }

  if ($(".catalog-slider").length > 0) {
    const sliders = document.querySelectorAll(".catalog-slider");

    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            navigation: {
              nextEl: $(slider).find(".swiperBtnNext")[0],
              prevEl: $(slider).find(".swiperBtnPrev")[0],
            },
            breakpoints: {
              0: {
                spaceBetween: 20,
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            },
            on: {
              init: function (swiper) {},
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }
});

$(window).scroll(function () {
  if ($(".header").length > 0) {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("header--fixed");
    } else {
      $(".header").removeClass("header--fixed");
    }
  }
});
