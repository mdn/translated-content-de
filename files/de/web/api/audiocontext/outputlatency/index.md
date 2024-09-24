---
title: "AudioContext: outputLatency-Eigenschaft"
short-title: outputLatency
slug: Web/API/AudioContext/outputLatency
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`outputLatency`** der {{domxref("AudioContext")}}-Schnittstelle bietet eine Schätzung der Ausgangslatenz des aktuellen Audiokontextes.

Dies ist die Zeit in Sekunden, die zwischen dem Moment vergeht, in dem der Browser einen Audio-Puffer aus einem Audio-Graph an das Audiosubsystem des Host-Systems zur Wiedergabe übergibt, und dem Zeitpunkt, an dem das erste Sample im Puffer tatsächlich vom Audioausgabegerät verarbeitet wird.

Sie variiert je nach Plattform und verfügbarer Hardware.

## Wert

Ein Double, das die Ausgangslatenz in Sekunden darstellt.

## Beispiele

```js
const audioCtx = new AudioContext();
console.log(audioCtx.outputLatency);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
