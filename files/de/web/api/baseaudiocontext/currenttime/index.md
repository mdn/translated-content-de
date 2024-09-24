---
title: "BaseAudioContext: currentTime Eigenschaft"
short-title: currentTime
slug: Web/API/BaseAudioContext/currentTime
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft `currentTime` der {{ domxref("BaseAudioContext") }}-Schnittstelle gibt ein Double zurück, das einen ständig zunehmenden Hardware-Zeitstempel in Sekunden darstellt, der zur Planung der Audiowiedergabe, zur Visualisierung von Zeitachsen usw. verwendet werden kann. Es beginnt bei 0.

## Wert

Eine Gleitkommazahl.

## Beispiele

```js
const audioCtx = new AudioContext();
// Ältere Webkit/Blink-Browser erfordern ein Präfix

// …

console.log(audioCtx.currentTime);
```

## Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `audioCtx.currentTime` je nach Browser-Einstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und hat einen Standardwert von 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in welchem Fall die Präzision 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` sein wird, je nachdem, was größer ist.

Mit reduzierter Zeitpräzision wird zum Beispiel das Ergebnis von `audioCtx.currentTime` immer ein Vielfaches von 0.002 sein oder ein Vielfaches von 0.1 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
audioCtx.currentTime;
// Könnte sein:
// 23.404
// 24.192
// 25.514
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
audioCtx.currentTime;
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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
