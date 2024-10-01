---
title: "Animation: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/Animation/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{APIRef("Web Animations")}}

Die **`Animation.currentTime`**-Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt den aktuellen Zeitwert der Animation in Millisekunden zurück und setzt diesen, unabhängig davon, ob sie läuft oder pausiert ist.

Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist der Rückgabewert von `currentTime` `null`.

## Wert

Eine Zahl, die die aktuelle Zeit in Millisekunden repräsentiert, oder `null`, um die Animation zu deaktivieren.

## Beispiele

Im [Drink Me/Eat Me Spiel](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) wird Alices Größe animiert, so dass sie von klein auf groß oder von groß auf klein wechseln kann. Zu Beginn des Spiels wird ihre Größe auf einen Wert zwischen den beiden Extremen eingestellt, indem die `currentTime` ihrer Animation auf die Hälfte der Dauer ihres `KeyframeEffect` gesetzt wird:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Ein allgemeinere Möglichkeit, auf die 50%-Marke einer Animation zu springen, wäre:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `animation.currentTime` in Abhängigkeit von den Browsereinstellungen gerundet werden. In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert und auf 2 ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100 ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Beispielsweise wird bei reduzierter Zeitpräzision das Ergebnis von `animation.currentTime` stets ein Vielfaches von 0,002 sein, oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

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

- [`Animation`](/de/docs/Web/API/Animation) für andere Methoden und Eigenschaften, die Sie zur Steuerung der Animation auf Webseiten verwenden können.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime) für die Zeit, zu der eine Animation gestartet werden soll.
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
