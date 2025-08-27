---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: 291a8c75ed553e807895225d51dff7ac24ad1f05
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Wiedergabegeschwindigkeit der Animation zurück oder setzt diese.

Animationen haben eine **Wiedergabegeschwindigkeit**, die einen Skalierungsfaktor von der Änderungsrate der `timeline`-Zeitwerte der Animation zur aktuellen Zeit der Animation bietet. Die Wiedergabegeschwindigkeit ist anfänglich `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, also würde beispielsweise ein Wert von 2 die Wiedergabegeschwindigkeit verdoppeln.

> [!NOTE]
> Das Setzen der `playbackRate` einer Animation auf `0` pausiert effektiv die Animation (allerdings wird ihr [`playState`](/de/docs/Web/API/Animation/playState) nicht notwendigerweise `paused`).

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel führt ein Klick oder Tippen auf die Flasche dazu, dass die Wachstumsanimation von Alice (`aliceChange`) umkehrt und sie schrumpft:

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

In einem anderen Beispiel, dem [Rennen der Roten Königin](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#other_useful_methods), verlangsamen sich Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
}, 3000);
```

Aber ein Klick oder Tippen auf sie führt dazu, dass sie schneller werden, indem ihre `playbackRate` multipliziert wird:

```js
const goFaster = () => {
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
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
