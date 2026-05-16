---
title: "AudioPlaybackStats: minimumLatency-Eigenschaft"
short-title: minimumLatency
slug: Web/API/AudioPlaybackStats/minimumLatency
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`minimumLatency`**-Eigenschaft des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die die minimale Latenz seit der Initialisierung des Audiokontextes oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die minimale Latenz in Sekunden angibt. Initialisiert mit `0`.

## Beispiele

### Grundlegende Nutzung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log minimum latency
console.log(stats.minimumLatency);
```

Siehe auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
