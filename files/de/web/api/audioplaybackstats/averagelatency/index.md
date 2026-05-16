---
title: "AudioPlaybackStats: averageLatency-Eigenschaft"
short-title: averageLatency
slug: Web/API/AudioPlaybackStats/averageLatency
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`averageLatency`** des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die die durchschnittliche Latenzzeit angibt, seit der Audio-Kontext initialisiert wurde oder seit [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) zuletzt aufgerufen wurde.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die durchschnittliche Latenzzeit in Sekunden angibt.

## Beispiele

### Grundlegende Nutzung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log average latency
console.log(stats.averageLatency);
```

Siehe auch die Hauptreferenzseite von [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
