---
title: "AnimationTimeline: currentTime Eigenschaft"
short-title: currentTime
slug: Web/API/AnimationTimeline/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte **`currentTime`**-Eigenschaft der [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt die aktuelle Zeit der Zeitleiste in Millisekunden zurück oder `null`, wenn die Zeitleiste inaktiv ist.

## Wert

Eine Zahl, die die aktuelle Zeit der Zeitleiste in Millisekunden darstellt, oder `null`, wenn die Zeitleiste inaktiv ist.

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, könnte die Präzision von `animationTimeline.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2 ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren; in diesem Fall beträgt die Präzision 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `animationTimeline.currentTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduced time precision (2ms) in Firefox 60
animationTimeline.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
animationTimeline.currentTime;
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

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) erbt diese Eigenschaft
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) gibt ein Zeitleistenobjekt zurück, das diese Eigenschaft erbt
