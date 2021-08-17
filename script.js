var fontSize = 72;
if (window.screen.width < 700) fontSize = 32;
else if (window.screen.width < 1200) fontSize = 56;
var vara = new Vara(
  '#container',
  'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
  [
    {
      text: "I'll be here waiting you to come and bring me right back home",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 500,
      duration: 3500,
    },
    {
      text: "I'm caught up with these memories just by sitting here alone",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 2500,
      duration: 4000,
    },
    {
      text: "If only I could see where it all started, we'll be fine",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 3000,
      duration: 4000,
    },
    {
      text: "It's clear where this is goin'",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 2500,
      duration: 2000,
    },
    {
      text: "I'll keep missing you alone",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1500,
      duration: 2000,
    },
    {
      text: "If you could see me cryin' in my room",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1500,
      duration: 4000,
    },
  ],
  {
    strokeWidth: 2,
    color: '#523c33',
    fontSize: fontSize,
    textAlign: 'center',
  }
);

vara.ready(function () {
  var erase = true;
  vara.animationEnd(function (i, o) {
    if (i == 'no_erase') erase = false;
    if (erase) {
      o.container.style.transition = 'opacity 1s 1s';
      o.container.style.opacity = 0;
    }
  });
});
