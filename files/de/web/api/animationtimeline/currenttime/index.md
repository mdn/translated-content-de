---
title: "AnimationTimeline: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationTimeline/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die **`currentTime`** schreibgeschützte Eigenschaft der [Web Animations API](/de/docs/Web/API/Web_Animations_API) Schnittstelle {{domxref("AnimationTimeline")}} gibt die aktuelle Zeit der Zeitleiste in Millisekunden zurück oder `null`, wenn die Zeitleiste inaktiv ist.

## Wert

Eine Zahl, die die aktuelle Zeit der Zeitleiste in Millisekunden darstellt, oder `null`, wenn die Zeitleiste inaktiv ist.

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `animationTimeline.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `animationTimeline.currentTime` immer ein Vielfaches von 0.002 sein, oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
animationTimeline.currentTime;
// Könnte sein:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
animationTimeline.currentTime;
// Könnte sein:
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

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} erbt diese Eigenschaft
- {{domxref("Document.timeline")}} gibt ein Zeitleistenobjekt zurück, das diese Eigenschaft erbt
