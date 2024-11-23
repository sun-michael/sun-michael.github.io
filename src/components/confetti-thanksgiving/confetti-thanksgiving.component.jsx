import React from "react";

const ConfettiThanksgiving = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 50,
  };

  const shoot = () => {
    window.confetti({
      ...defaults,
      particleCount: 20,
      scalar: 4,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🦃", "🍁", "🌽"], // Array of emojis
        },
      },
    });
  };

  const handleClick = () => {
    // Trigger confetti multiple times for a better effect
    shoot();
    setTimeout(shoot, 1000);
    setTimeout(shoot, 4000);
    setTimeout(shoot, 5000);
  };

  return (
    <button onClick={handleClick} class="btn btn-outline-warning">
      Click! If you like Thanksgiving 🍁
    </button>
  );
};

export default ConfettiThanksgiving;
