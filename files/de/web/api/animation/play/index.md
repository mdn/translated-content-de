---
title: "Animation: play()-Methode"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

Die **`play()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) startet oder setzt die Wiedergabe einer Animation fort. Wenn die Animation beendet ist, startet der Aufruf von `play()` die Animation erneut und spielt sie von Anfang an ab.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im [Wachstums-/Schrumpfungs-Alice-Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel führt das Klicken oder Tippen auf den Kuchen dazu, dass die Wachstumsanimation von Alice (`aliceChange`) vorwärts abgespielt wird, wodurch sie größer wird, und löst zudem die Animation des Kuchens aus. Zwei `Animation.play()`s, ein `EventListener`:

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
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause), um eine Animation zu pausieren.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse), um eine Animation rückwärts abzuspielen.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish), um eine Animation zu beenden.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel), um eine Animation abzubrechen.
