---
title: "Animation: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("Web Animations")}}

Die **`Animation.currentTime`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt den aktuellen Zeitwert der Animation in Millisekunden zurück und setzt diesen, egal ob sie läuft oder pausiert ist.

Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist der Rückgabewert von `currentTime` `null`.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, um die Animation zu deaktivieren.

## Beispiele

Im [Drink Me/Eat Me-Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) wird Alices Größe animiert, sodass sie von klein zu groß oder von groß zu klein gehen kann. Zu Beginn des Spiels wird ihre Größe zwischen den beiden Extremen gesetzt, indem die `currentTime` ihrer Animation auf die Hälfte der Dauer ihres `KeyframeEffect` gesetzt wird:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Eine allgemeinere Methode, um zur 50%-Marke einer Animation zu gelangen, wäre:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `animation.currentTime` je nach Browsereinstellungen abgerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100 ms beträgt oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, welcher auch immer größer ist.

Zum Beispiel wird das Ergebnis von `animation.currentTime` bei reduzierter Zeitpräzision immer ein Vielfaches von 0.002 sein oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) bei aktiviertem `privacy.resistFingerprinting`.

```js
// reduced time precision (2ms) in Firefox 60
animation.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
animation.currentTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, die Sie zur Steuerung von Webseiten-Animationen verwenden können.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime) für die Zeit, zu der eine Animation geplant ist zu starten.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
