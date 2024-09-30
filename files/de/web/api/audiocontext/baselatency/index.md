---
title: "AudioContext: baseLatency-Eigenschaft"
short-title: baseLatency
slug: Web/API/AudioContext/baseLatency
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`baseLatency`** des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt einen Wert vom Typ Double zurück, der die Anzahl an Sekunden an Verarbeitungsverzögerung darstellt, die durch das `AudioContext` entstehen, wenn ein Audiopuffer vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) – d. h. das Ende des Audio-Diagramms – in das Audiosubsystem des Hostsystems übergeben wird, um abgespielt zu werden.

> [!NOTE]
> Sie können während der [Erstellungszeit](/de/docs/Web/API/AudioContext/AudioContext) mit der `latencyHint`-Option eine bestimmte Latenz anfordern, aber der Browser kann die Option ignorieren.

## Wert

Ein Double, das die Basislatenz in Sekunden darstellt.

## Beispiele

```js
// default latency ("interactive")
const audioCtx1 = new AudioContext();
console.log(audioCtx1.baseLatency); // 0.00

// higher latency ("playback")
const audioCtx2 = new AudioContext({ latencyHint: "playback" });
console.log(audioCtx2.baseLatency); // 0.15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
