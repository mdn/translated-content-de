---
title: "Animation: pause()-Methode"
short-title: pause()
slug: Web/API/Animation/pause
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("Web Animations") }}

Die **`pause()`**-Methode der [Web Animations API](/de/docs/Web/API/Web_Animations_API) {{domxref("Animation")}}-Schnittstelle unterbricht die Wiedergabe der Animation.

## Syntax

```js-nolint
animation.pause();
```

### Parameter

Keine.

### Rückgabewert

Keine.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("Animation.currentTime", "currentTime")}} der Animation `unresolved` ist (vielleicht hat sie noch nicht begonnen zu spielen), und die Endzeit der Animation positive Unendlichkeit ist.

## Beispiel

`Animation.pause()` wird häufig im Alice in Web Animations API Land [Wachsenden/Schrumpfenden Alice-Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) verwendet, vor allem weil Animationen, die mit der {{domxref("Element.animate()")}}-Methode erstellt werden, sofort zu spielen beginnen und manuell angehalten werden müssen, wenn Sie dies vermeiden möchten:

```js
// Animation des Kuchens, der langsam aufgegessen wird
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

// muss eigentlich erst bei einem Klickereignis gegessen werden, daher zunächst pausieren:
nommingCake.pause();
```

Zusätzlich beim Zurücksetzen:

```js
// Eine universelle Funktion, um die Animationen von Alice, dem Kuchen und der Flasche "trink mich" zu pausieren.
const stopPlayingAlice = () => {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// Wenn der Benutzer den Kuchen oder die Flasche loslässt, pausiere die Animationen.
cake.addEventListener("mouseup", stopPlayingAlice, false);
bottle.addEventListener("mouseup", stopPlayingAlice, false);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, die Sie zur Steuerung der Website-Animation verwenden können.
- {{domxref("Animation.reverse()")}} um eine Animation rückwärts abzuspielen.
- {{domxref("Animation.finish()")}} um eine Animation zu beenden.
- {{domxref("Animation.cancel()")}} um eine Animation zu stornieren.
