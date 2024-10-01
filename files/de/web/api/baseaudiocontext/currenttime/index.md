---
title: "BaseAudioContext: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/BaseAudioContext/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `currentTime`-Eigenschaft des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Interfaces gibt einen Double-Wert zurück, der einen ständig zunehmenden Hardware-Zeitstempel in Sekunden darstellt, welcher für die Planung von Audio-Wiedergaben, zur Visualisierung von Zeitachsen, etc. verwendet werden kann. Dieser beginnt bei 0.

## Wert

Eine Fließkommazahl.

## Beispiele

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.currentTime);
```

## Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision von `audioCtx.currentTime` je nach Browsereinstellungen gerundet werden. In Firefox ist die Option `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren; in diesem Fall beträgt die Präzision 100 ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `audioCtx.currentTime` immer ein Vielfaches von 0,002 sein oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

```js
// reduced time precision (2ms) in Firefox 60
audioCtx.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
audioCtx.currentTime;
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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
