---
title: "AudioContext: baseLatency-Eigenschaft"
short-title: baseLatency
slug: Web/API/AudioContext/baseLatency
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`baseLatency`** des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt einen Gleitkommawert zurück, der die Anzahl der Sekunden darstellt, die durch die Verarbeitungslatenz verursacht werden, wenn der `AudioContext` ein Audiopuffer vom [`AudioDestinationNode`](/de/docs/Web/API/AudioDestinationNode) — d.h. das Ende des Audiografen — in das Audiosubsystem des Host-Systems zur Wiedergabe überträgt.

> [!NOTE]
> Sie können während der [Konstruktionszeit](/de/docs/Web/API/AudioContext/AudioContext) mit der Option `latencyHint` eine bestimmte Latenz anfordern, aber der Browser kann die Option ignorieren.

## Wert

Ein Gleitkommawert, der die Basislatenz in Sekunden darstellt.

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
