import React, { useEffect } from "react";

const ConfettiWithImages = () => {
  useEffect(() => {
    const launchConfetti = () => {
      window.confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 20,
        particleCount: 7,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
          image: [
            {
              src:
                "https://raw.githubusercontent.com/sun-michael/images/main/logo_nb.png",
              width: 32,
              height: 32,
            },
          ],
        },
      });
    };
    launchConfetti();
  }, []);
};

export default ConfettiWithImages;
