---
title: "Animation: play()-Methode"
short-title: play()
slug: Web/API/Animation/play
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Web Animations") }}

Die **`play()`**-Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) der {{ domxref("Animation") }}-Schnittstelle startet oder setzt die Wiedergabe einer Animation fort. Wenn die Animation beendet ist, startet ein Aufruf von `play()` die Animation neu und spielt sie von Anfang an ab.

## Syntax

```js-nolint
play()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Im Beispiel [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) bewirkt ein Klick oder Tipp auf den Kuchen, dass Alices Wachstumsanimation (`aliceChange`) vorwärts abgespielt wird, wodurch sie größer wird, und löst auch die Animation des Kuchens aus. Zwei `Animation.play()`-Aufrufe, ein `EventListener`:

```js
// Der Kuchen hat seine eigene Animation:
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

// Pause der Kuchenanimation, damit sie nicht sofort abspielt.
nommingCake.pause();

// Diese Funktion wird ausgeführt, wenn ein Benutzer klickt oder tippt
const growAlice = () => {
  // Alices Animation abspielen.
  aliceChange.play();

  // Die Kuchenanimation abspielen.
  nommingCake.play();
};

// Wenn ein Benutzer die Maus gedrückt hält oder tippt, rufen Sie growAlice auf, um alle Animationen abzuspielen.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, die Sie zur Steuerung der Web-Animation verwenden können.
- {{domxref("Animation.pause()")}} um eine Animation zu pausieren.
- {{domxref("Animation.reverse()")}} um eine Animation rückwärts abzuspielen.
- {{domxref("Animation.finish()")}} um eine Animation zu beenden.
- {{domxref("Animation.cancel()")}} um eine Animation abzubrechen.
