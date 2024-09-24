---
title: "Animation: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("Web Animations")}}

Die **`Animation.currentTime`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt den aktuellen Zeitwert der Animation in Millisekunden zurück und setzt ihn, egal ob die Animation läuft oder pausiert ist.

Wenn der Animation eine {{domxref("AnimationTimeline", "Timeline")}} fehlt, sie inaktiv ist oder noch nicht gestartet wurde, ist der Rückgabewert von `currentTime` `null`.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden darstellt, oder `null`, um die Animation zu deaktivieren.

## Beispiele

Im [Drink Me/Eat Me-Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) wird Alices Größe animiert, um von klein zu groß oder von groß zu klein zu wechseln. Zu Beginn des Spiels wird ihre Größe zwischen den beiden Extremen gesetzt, indem die `currentTime` ihrer Animation auf die Hälfte der Dauer ihres `KeyframeEffect` gesetzt wird:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Ein generischerer Ansatz, um zur 50%-Marke einer Animation zu gelangen, wäre:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `animation.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms eingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` beträgt, je nachdem, welcher größer ist.

Zum Beispiel ist bei reduzierter Zeitpräzision das Ergebnis von `animation.currentTime` immer ein Vielfaches von 0.002 oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
animation.currentTime;
// Möglicherweise:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
animation.currentTime;
// Möglicherweise:
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

- {{domxref("Animation")}} für andere Methoden und Eigenschaften, mit denen Sie Webseitenanimationen steuern können.
- {{domxref("Animation.startTime")}} für die Zeit, zu der eine Animation beginnen soll.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
