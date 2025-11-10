---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Wiedergaberate der Animation zurück oder legt sie fest.

Animationen haben eine **Wiedergaberate**, die einen Skalierungsfaktor vom Änderungsratenwert der [`timeline`](/de/docs/Web/API/DocumentTimeline)-Zeitwerte der Animation zur aktuellen Zeit der Animation bietet. Die Wiedergaberate ist anfangs `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, daher würde zum Beispiel ein Wert von 2 die Wiedergaberate verdoppeln.

> [!NOTE]
> Das Setzen der `playbackRate` einer Animation auf `0` pausiert effektiv die Animation (jedoch wird ihr [`playState`](/de/docs/Web/API/Animation/playState) nicht unbedingt `paused`).

## Beispiele

Im Beispiel [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) führt ein Klick oder Tippen auf die Flasche dazu, dass die Wachstumsanimation von Alice (`aliceChange`) umkehrt und sie schrumpft:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// On tap or click, Alice will shrink.
bottle.addEventListener("mousedown", shrinkAlice);
bottle.addEventListener("touchstart", shrinkAlice);
```

Andererseits führt ein Klick auf den Kuchen dazu, dass sie "wächst" und `aliceChange` wieder vorwärts abspielt:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// On tap or click, Alice will grow.
cake.addEventListener("mousedown", growAlice);
cake.addEventListener("touchstart", growAlice);
```

In einem anderen Beispiel, dem [Red Queen's Race Game](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#other_useful_methods), verlangsamen Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
}, 3000);
```

Aber ein Klick oder Tippen auf sie beschleunigt sie, indem ihre `playbackRate` multipliziert wird:

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
