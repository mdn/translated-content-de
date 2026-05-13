---
title: "AudioPlaybackStats: underrunEvents-Eigenschaft"
short-title: underrunEvents
slug: Web/API/AudioPlaybackStats/underrunEvents
l10n:
  sourceCommit: a1c2691b9ef6120e81ef3e08f51bfcacb6d4dc00
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`underrunEvents`** des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist eine Zahl, die angibt, wie viele [Underrun-Ereignisse](/de/docs/Web/API/AudioPlaybackStats#underrun_event) seit der Initialisierung des Audiokontexts aufgetreten sind.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Underrun-Ereignisse angibt. Auf `0` initialisiert.

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
