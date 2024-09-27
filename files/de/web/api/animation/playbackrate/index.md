---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Wiedergabegeschwindigkeit der Animation zurück oder setzt diese.

Animationen haben eine **Wiedergabegeschwindigkeit**, die einen Skalierungsfaktor von der Änderungsrate der [`timeline`](/de/docs/Web/API/DocumentTimeline)-Zeitwerte der Animation zur aktuellen Zeit der Animation bietet. Die anfängliche Wiedergabegeschwindigkeit ist `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, sodass beispielsweise ein Wert von 2 die Wiedergabegeschwindigkeit verdoppeln würde.

> [!NOTE]
> Das Setzen der `playbackRate` einer Animation auf `0` pausiert effektiv die Animation (jedoch wird ihr [`playstate`](/de/docs/Web/API/Animation/playstate) nicht notwendigerweise `paused`).

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) Beispiel führt ein Klicken oder Tippen auf die Flasche dazu, dass die Wachstumsanimation von Alice (`aliceChange`) umgekehrt wird, wodurch sie schrumpft:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// On tap or click, Alice will shrink.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Umgekehrt führt das Klicken auf den Kuchen dazu, dass sie "wächst", indem `aliceChange` wieder vorwärts abgespielt wird:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// On tap or click, Alice will grow.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

In einem anderen Beispiel im [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010) verlangsamen sich Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Aber durch Klicken oder Tippen auf sie beschleunigen sie, indem ihre `playbackRate` multipliziert wird:

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
