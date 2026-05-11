---
title: "AudioPlaybackStats: averageLatency-Eigenschaft"
short-title: averageLatency
slug: Web/API/AudioPlaybackStats/averageLatency
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`averageLatency`** schreibgeschützte Eigenschaft des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die die durchschnittliche Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.

## Wert

Eine doppelt-genaue Fließkommazahl, die die durchschnittliche Latenz in Sekunden angibt.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log average latency
console.log(stats.averageLatency);
```

Siehe auch die Hauptseite [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
