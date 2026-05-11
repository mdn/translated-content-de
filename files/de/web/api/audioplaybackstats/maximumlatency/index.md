---
title: "AudioPlaybackStats: maximumLatency-Eigenschaft"
short-title: maximumLatency
slug: Web/API/AudioPlaybackStats/maximumLatency
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`maximumLatency`** des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die die maximale Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.

## Wert

Eine doppeltgenaue Fließkommazahl, die die maximale Latenz in Sekunden angibt. Wird zu `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log maximum latency
console.log(stats.maximumLatency);
```

Sehen Sie sich auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
