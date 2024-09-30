---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Wiedergabegeschwindigkeit der Animation zurück oder setzt diese.

Animationen haben eine **Wiedergabegeschwindigkeit**, die einen Skalierungsfaktor vom Änderungsrate der Zeitwerte der [`timeline`](/de/docs/Web/API/DocumentTimeline) der Animation zur aktuellen Zeit der Animation bereitstellt. Die Wiedergabegeschwindigkeit ist anfänglich `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, sodass beispielsweise ein Wert von 2 die Wiedergabegeschwindigkeit verdoppeln würde.

> [!NOTE]
> Das Setzen der `playbackRate` einer Animation auf `0` pausiert die Animation effektiv (allerdings wird ihr [`playstate`](/de/docs/Web/API/Animation/playstate) nicht unbedingt zu `paused`).

## Beispiele

Im Beispiel [Wachsende/Schrumpfende Alice Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) bewirkt ein Klicken oder Tippen auf die Flasche, dass die Wachstumsanimation von Alice (`aliceChange`) umkehrt und sie schrumpft:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// On tap or click, Alice will shrink.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Andererseits, führt ein Klicken auf den Kuchen dazu, dass sie "wächst" und `aliceChange` wieder vorwärts abspielt:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// On tap or click, Alice will grow.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

In einem anderen Beispiel, dem [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010), verlangsamen Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Aber durch Klicken oder Tippen auf sie werden sie schneller, indem ihre `playbackRate` multipliziert wird:

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
