---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Abspielgeschwindigkeit der Animation zurück oder setzt sie.

Animationen haben eine **Abspielrate**, die einen Skalierungsfaktor vom Änderungsrat der Zeitwerte der [`timeline`](/de/docs/Web/API/DocumentTimeline) der Animation zur aktuellen Zeit der Animation bietet. Die Abspielrate ist anfänglich `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, sodass ein Wert von 2 beispielsweise die Abspielgeschwindigkeit verdoppeln würde.

> [!NOTE]
> Das Setzen der `playbackRate` einer Animation auf `0` pausiert die Animation effektiv (allerdings wird ihr [`playState`](/de/docs/Web/API/Animation/playState) nicht unbedingt zu `paused`).

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel führt ein Klick oder Tipp auf die Flasche dazu, dass die Wachstumsanimation von Alice (`aliceChange`) umgekehrt wird, sodass sie schrumpft:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// On tap or click, Alice will shrink.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Im Gegensatz dazu führt ein Klick auf den Kuchen dazu, dass sie "wächst", indem `aliceChange` wieder vorwärts abgespielt wird:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// On tap or click, Alice will grow.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

In einem anderen Beispiel, dem [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010), verlangsamen sich Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Aber durch Klicken oder Tippen auf sie beschleunigen sie sich, indem ihre `playbackRate` multipliziert wird:

```js
const goFaster = () => {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
