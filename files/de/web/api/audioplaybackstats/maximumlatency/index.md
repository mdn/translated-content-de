---
title: "AudioPlaybackStats: maximumLatency-Eigenschaft"
short-title: maximumLatency
slug: Web/API/AudioPlaybackStats/maximumLatency
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`maximumLatency`**-Eigenschaft der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine Zahl, die die maximale Latenz seit der Initialisierung des Audio-Kontexts oder seit dem letzten Aufruf von [`AudioPlaybackStats.resetLatency()`](/de/docs/Web/API/AudioPlaybackStats/resetLatency) angibt.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die maximale Latenz in Sekunden angibt. Wird mit `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log maximum latency
console.log(stats.maximumLatency);
```

Siehe auch die Hauptreferenzseite von [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
