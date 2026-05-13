---
title: "AudioPlaybackStats: underrunDuration-Eigenschaft"
short-title: underrunDuration
slug: Web/API/AudioPlaybackStats/underrunDuration
l10n:
  sourceCommit: a1c2691b9ef6120e81ef3e08f51bfcacb6d4dc00
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte Eigenschaft **`underrunDuration`** der [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Schnittstelle ist eine Zahl, die die Gesamtdauer der [Underrun-Ereignisse](/de/docs/Web/API/AudioPlaybackStats#underrun_event) angibt, die seit der Initialisierung des Audio-Kontexts aufgetreten sind.

## Wert

Eine doppelt-präzise Gleitkommazahl, die die Dauer der Underrun-Ereignisse in Sekunden angibt. Sie ist initialisiert auf `0`.

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
