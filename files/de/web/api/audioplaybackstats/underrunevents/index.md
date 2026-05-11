---
title: "AudioPlaybackStats: underrunEvents-Eigenschaft"
short-title: underrunEvents
slug: Web/API/AudioPlaybackStats/underrunEvents
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`underrunEvents`**-Eigenschaft des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces zeigt die Anzahl der [Underrun-Ereignisse](/de/docs/Web/API/AudioPlaybackStats#underrun_event) an, seit der Audio-Kontext initialisiert wurde.

## Wert

Ein Integer, der die Anzahl der Underrun-Ereignisse angibt. Wird mit `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log number of underrun events
console.log(stats.underrunEvents);
```

Siehe auch die Hauptreferenzseite von [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
