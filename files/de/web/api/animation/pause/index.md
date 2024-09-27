---
title: "Animation: pause() Methode"
short-title: pause()
slug: Web/API/Animation/pause
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Animations") }}

Die **`pause()`** Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API)'s [`Animation`](/de/docs/Web/API/Animation) Schnittstelle unterbricht die Wiedergabe der Animation.

## Syntax

```js-nolint
animation.pause();
```

### Parameter

Keine.

### Rückgabewert

Keine.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`currentTime`](/de/docs/Web/API/Animation/currentTime) der Animation `unresolved` ist (möglicherweise hat sie noch nicht begonnen zu spielen), und die Endzeit der Animation positive Unendlichkeit ist.

## Beispiel

`Animation.pause()` wird häufig im Spiel Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet, hauptsächlich weil Animationen, die mit der [`Element.animate()`](/de/docs/Web/API/Element/animate) Methode erstellt werden, sofort anfangen zu spielen und manuell pausiert werden müssen, wenn Sie dies vermeiden möchten:

```js
// animation of the cupcake slowly getting eaten up
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

// doesn't actually need to be eaten until a click event, so pause it initially:
nommingCake.pause();
```

Zusätzlich beim Zurücksetzen:

```js
// An all-purpose function to pause the animations on Alice, the cupcake, and the bottle that reads "drink me."
const stopPlayingAlice = () => {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// When the user releases the cupcake or the bottle, pause the animations.
cake.addEventListener("mouseup", stopPlayingAlice, false);
bottle.addEventListener("mouseup", stopPlayingAlice, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung der Webseitenanimation verwenden können.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse), um eine Animation rückwärts abzuspielen.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish), um eine Animation zu beenden.
- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel), um eine Animation abzubrechen.
