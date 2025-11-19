---
title: "AudioContext: Eigenschaft outputLatency"
short-title: outputLatency
slug: Web/API/AudioContext/outputLatency
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die **`outputLatency`** schreibgeschützte Eigenschaft der [`AudioContext`](/de/docs/Web/API/AudioContext)-Schnittstelle liefert eine Schätzung der Ausgabe-Latenz des aktuellen Audio-Kontexts.

Dies ist die Zeit in Sekunden, die vergeht, bis der Browser einen Audio-Puffer von einem Audiographen an das Audiosubsystem des Host-Systems zum Abspielen übergibt, und dem Zeitpunkt, an dem das erste Sample im Puffer tatsächlich vom Audioausgabegerät verarbeitet wird.

Sie variiert je nach Plattform und verfügbarer Hardware.

## Wert

Ein Double, das die Ausgabe-Latenz in Sekunden darstellt.

## Beispiele

```js
const audioCtx = new AudioContext();
console.log(audioCtx.outputLatency);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
