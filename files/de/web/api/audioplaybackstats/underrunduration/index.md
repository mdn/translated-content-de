---
title: "AudioPlaybackStats: underrunDuration-Eigenschaft"
short-title: underrunDuration
slug: Web/API/AudioPlaybackStats/underrunDuration
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`underrunDuration`**-Eigenschaft des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Gesamtdauer der underrun-Ereignisse angibt, seit der Audio-Kontext initialisiert wurde.

## Wert

Eine Gleitkommazahl doppelter Genauigkeit, die die Dauer der underrun-Ereignisse in Sekunden angibt. Wird mit `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration of underrun events
console.log(stats.underrunDuration);
```

Sehen Sie sich auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
