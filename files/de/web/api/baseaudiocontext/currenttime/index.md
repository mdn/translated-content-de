---
title: "BaseAudioContext: currentTime-Eigenschaft"
short-title: currentTime
slug: Web/API/BaseAudioContext/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Audio API") }}

Die `currentTime`-Nur-Lese-Eigenschaft der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)
Schnittstelle gibt ein Doppel zurück, das einen ständig steigenden Hardware-Zeitstempel in Sekunden darstellt. Dieser kann zur Planung der Audiowiedergabe, zur Visualisierung von Zeitlinien usw. benutzt werden. Er beginnt bei 0.

## Wert

Eine Gleitkommazahl.

## Beispiele

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.currentTime);
```

## Reduzierte Zeitgenauigkeit

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Genauigkeit von `audioCtx.currentTime` je nach Browsereinstellungen abgerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Genauigkeit 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher Wert größer ist.

Beispielsweise ist bei reduzierter Zeitgenauigkeit das Ergebnis von `audioCtx.currentTime` immer ein Vielfaches von 0,002 oder ein Vielfaches von 0,1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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

- [Leitfaden zur Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
