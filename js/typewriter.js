(function () {
  try {
    const text =
      "DevOps Engineer & Cloud Architect building resilient, automated infrastructure for modern digital ecosystems.";
    const speed = 80; // typing speed (ms)

    function startTyping() {
      console.log("typewriter: startTyping called — readyState=", document.readyState);
      const el = document.getElementById("type-text");
      if (!el) {
        console.warn("typewriter: '#type-text' element not found");
        return;
      }

      el.textContent = ""; // ensure clean start
      let index = 0;
      let lastIndexLogged = -1;
      let started = false;

      function typeEffect() {
        started = true;
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          // occasional progress log for debugging (every 10 chars)
          if (index % 10 === 0 && index !== lastIndexLogged) {
            console.debug(`typewriter: typed ${index}/${text.length}`);
            lastIndexLogged = index;
          }
          setTimeout(typeEffect, speed);
        } else {
          console.log("typewriter: completed");
          el.setAttribute("data-typed", "true");
        }
      }

      // Start typing and set a safety timer: if nothing typed after 1200ms, fallback to full text
      typeEffect();
      setTimeout(() => {
        if (!started || el.textContent.length === 0) {
          console.warn("typewriter: fallback - setting full text (typing did not start)");
          el.textContent = text;
          el.setAttribute("data-fallback", "true");
        }
      }, 1200);

      console.log("typewriter: started");
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startTyping);
    } else {
      startTyping();
    }
  } catch (err) {
    console.error("typewriter: unexpected error", err);
  }
})();
