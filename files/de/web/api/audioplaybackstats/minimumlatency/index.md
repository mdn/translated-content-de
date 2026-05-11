---
title: "AudioPlaybackStats: minimumLatency-Eigenschaft"
short-title: minimumLatency
slug: Web/API/AudioPlaybackStats/minimumLatency
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`minimumLatency`**-Eigenschaft der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine schreibgeschützte Zahl, die die minimale Latenz seit der Initialisierung des Audiokontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.

## Wert

Eine doppelt genaues Gleitkommazahl, die die minimale Latenz in Sekunden angibt. Initialisiert auf `0`.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log minimum latency
console.log(stats.minimumLatency);
```

Sehen Sie sich auch die Hauptseite der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Referenz für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
