---
title: "Animation: play() Methode"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{ APIRef("Web Animations") }}

Die **`play()`** Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) Schnittstelle [`Animation`](/de/docs/Web/API/Animation) startet oder setzt die Wiedergabe einer Animation fort. Wenn die Animation beendet ist, startet ein Aufruf von `play()` die Animation neu, beginnend von vorne.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im Beispiel [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) führt ein Klick oder Tippen auf den Kuchen dazu, dass Alices Wachstumsanimation (`aliceChange`) vorwärts abgespielt wird, wodurch sie größer wird und die Animation des Kuchens ausgelöst wird. Zwei `Animation.play()`s, ein `EventListener`:

```js
// The cake has its own animation:
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// Pause the cake's animation so it doesn't play immediately.
nommingCake.pause();

// This function will play when ever a user clicks or taps
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};

// When a user holds their mouse down or taps, call growAlice to make all the animations play.
cake.addEventListener("mousedown", growAlice);
cake.addEventListener("touchstart", growAlice);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseitenanimationen verwenden können.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause) zum Anhalten einer Animation.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) um eine Animation rückwärts abzuspielen.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) um eine Animation zu beenden.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) um eine Animation abzubrechen.
