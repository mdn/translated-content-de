---
title: "AudioPlaybackStats: totalDuration-Eigenschaft"
short-title: totalDuration
slug: Web/API/AudioPlaybackStats/totalDuration
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`totalDuration`**-Schreibgeschützte Eigenschaft des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die die Gesamtdauer aller Audio-Frames seit der Initialisierung des Audio-Kontexts angibt.

## Wert

Eine Gleitkommazahl mit doppelter Genauigkeit, die die Gesamtdauer aller Audio-Frames in Sekunden angibt. Sie wird auf `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration
console.log(stats.totalDuration);
```

Siehe auch die Hauptreferenzseite von [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
