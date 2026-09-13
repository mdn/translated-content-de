---
title: "Animation: play() Methode"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{ APIRef("Web Animations") }}

Die **`play()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) startet oder setzt das Abspielen einer Animation fort. Wenn die Animation abgeschlossen ist, wird durch Aufrufen von `play()` die Animation neu gestartet und von Beginn an abgespielt.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im [Growing/Shrinking Alice Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel bewirkt das Klicken oder Tippen auf den Kuchen, dass die Wachstumsanimation von Alice (`aliceChange`) vorwärts abgespielt wird, wodurch sie größer wird, und auch die Animation des Kuchens ausgelöst wird. Zwei `Animation.play()`s, ein `EventListener`:

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

// This function will play whenever a user clicks or taps
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
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause) um eine Animation anzuhalten.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse) um eine Animation rückwärts abzuspielen.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish) um eine Animation zu beenden.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) um eine Animation abzubrechen.
