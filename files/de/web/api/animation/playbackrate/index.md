---
title: "Animation: playbackRate-Eigenschaft"
short-title: playbackRate
slug: Web/API/Animation/playbackRate
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Animations")}}

Die **`Animation.playbackRate`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die Abspielgeschwindigkeit der Animation zurück oder setzt diese.

Animationen haben eine **Abspielgeschwindigkeit**, die einen Skalierungsfaktor von der Änderungsrate der Zeitwerte der Animation im {{domxref("DocumentTimeline", "Timeline")}} zur aktuellen Zeit der Animation bereitstellt. Die Abspielgeschwindigkeit ist anfangs `1`.

## Wert

Nimmt eine Zahl an, die 0, negativ oder positiv sein kann. Negative Werte kehren die Animation um. Der Wert ist ein Skalierungsfaktor, so dass zum Beispiel ein Wert von 2 die Abspielgeschwindigkeit verdoppeln würde.

> [!NOTE]
> Wenn Sie die `playbackRate` einer Animation auf `0` setzen, pausiert dies effektiv die Animation (allerdings wird der {{domxref("Animation.playstate", "Playstate")}} nicht notwendigerweise zu `paused`).

## Beispiele

Im [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)-Beispiel bewirkt ein Klick oder Tippen auf die Flasche, dass die Wachstumsanimation von Alice (`aliceChange`) umkehrt und sie schrumpfen lässt:

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// Bei Antippen oder Klicken wird Alice schrumpfen.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Umgekehrt bewirkt ein Klick auf den Kuchen, dass sie "wächst", indem `aliceChange` erneut vorwärts abgespielt wird:

```js
const growAlice = () => {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// Bei Antippen oder Klicken wird Alice wachsen.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

In einem anderen Beispiel, dem [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010), verlangsamen Alice und die Rote Königin ständig:

```js
setInterval(() => {
  // Stellen Sie sicher, dass die Abspielgeschwindigkeit niemals unter .4 fällt

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Aber ein Klick oder Tippen auf sie bewirkt, dass sie die Geschwindigkeit durch Multiplikation ihrer `playbackRate` erhöhen:

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
- {{domxref("Animation")}}
