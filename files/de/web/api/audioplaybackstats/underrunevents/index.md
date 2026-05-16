---
title: "AudioPlaybackStats: underrunEvents-Eigenschaft"
short-title: underrunEvents
slug: Web/API/AudioPlaybackStats/underrunEvents
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die schreibgeschützte **`underrunEvents`**-Eigenschaft der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine Zahl, die angibt, wie viele [Underrun-Ereignisse](/de/docs/Web/API/AudioPlaybackStats#underrun_event) seit der Initialisierung des Audio-Kontexts aufgetreten sind.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Underrun-Ereignisse angibt. Initialisiert mit `0`.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log number of underrun events
console.log(stats.underrunEvents);
```

Siehe auch die Hauptreferenzseite zu [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
