---
title: "AudioPlaybackStats: Eigenschaft totalDuration"
short-title: totalDuration
slug: Web/API/AudioPlaybackStats/totalDuration
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`totalDuration`**-Eigenschaft der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Gesamtdauer aller Audioframes seit der Initialisierung des Audiokontexts angibt.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Gesamtdauer aller Audioframes in Sekunden angibt. Wird mit `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration
console.log(stats.totalDuration);
```

Sehen Sie sich auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
