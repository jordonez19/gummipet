      //---------------------------------------------------------------------------
      /* up */
      // Obtener los elementos que se animarán
      const scrollAnimationElems =
        document.querySelectorAll(".slide-animation-up");

      // Función para comprobar si un elemento está visible en la ventana gráfica
      function isElemVisible(elem) {
        const bounding = elem.getBoundingClientRect();
        return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      // Función para comprobar si un elemento debe activar la animación
      function checkScrollAnimation() {
        scrollAnimationElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      // Agregar un evento de scroll al documento para comprobar la animación en intervalos regulares
      let scrollAnimationInterval = null;
      function startScrollAnimationInterval() {
        scrollAnimationInterval = setInterval(checkScrollAnimation, 100);
      }
      function stopScrollAnimationInterval() {
        clearInterval(scrollAnimationInterval);
      }
      document.addEventListener(
        "DOMContentLoaded",
        startScrollAnimationInterval
      );
      document.addEventListener("scroll", startScrollAnimationInterval);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopScrollAnimationInterval();
        } else {
          startScrollAnimationInterval();
        }
      });

      //---------------------------------------------------------------------------
      /* right */
      const slideAnimationElems = document.querySelectorAll(".slide-animation");

      function checkSlideAnimation() {
        slideAnimationElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationInterval() {
        slideAnimationInterval = setInterval(checkSlideAnimation, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationInterval
      );
      document.addEventListener("scroll", checkSlideAnimation);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationInterval);
        } else {
          startSlideAnimationInterval();
        }
      });

      //---------------------------------------------------------------------------
      /* left */
      const slideAnimationLeftElems = document.querySelectorAll(
        ".slide-animation-left"
      );

      function checkSlideAnimationLeft() {
        slideAnimationLeftElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationLeftInterval() {
        slideAnimationLeftInterval = setInterval(checkSlideAnimationLeft, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationLeftInterval
      );
      document.addEventListener("scroll", checkSlideAnimationLeft);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationLeftInterval);
        } else {
          startSlideAnimationLeftInterval();
        }
      });
      /* down */
      const slideAnimationDownElems = document.querySelectorAll(
        ".slide-animation-down"
      );

      function checkSlideAnimationDown() {
        slideAnimationDownElems.forEach((elem) => {
          if (isElemVisible(elem)) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        });
      }

      function startSlideAnimationDownInterval() {
        slideAnimationDownInterval = setInterval(checkSlideAnimationDown, 100);
      }

      document.addEventListener(
        "DOMContentLoaded",
        startSlideAnimationDownInterval
      );
      document.addEventListener("scroll", checkSlideAnimationDown);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          clearInterval(slideAnimationDownInterval);
        } else {
          startSlideAnimationDownInterval();
        }
      });
