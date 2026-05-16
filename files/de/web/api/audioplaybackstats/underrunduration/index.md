---
title: "AudioPlaybackStats: underrunDuration-Eigenschaft"
short-title: underrunDuration
slug: Web/API/AudioPlaybackStats/underrunDuration
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`underrunDuration`**-Eigenschaft der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine Zahl, die die Gesamtdauer der [Underrun-Ereignisse](/de/docs/Web/API/AudioPlaybackStats#underrun_event) angibt, die seit der Initialisierung des Audio-Kontexts aufgetreten sind.

## Wert

Eine doppeltgenaue Gleitkommazahl, die die Dauer der Underrun-Ereignisse in Sekunden angibt. Sie wird mit `0` initialisiert.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log total duration of underrun events
console.log(stats.underrunDuration);
```

Siehe auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
