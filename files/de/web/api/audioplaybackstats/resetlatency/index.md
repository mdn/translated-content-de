---
title: "AudioPlaybackStats: resetLatency() Methode"
short-title: resetLatency()
slug: Web/API/AudioPlaybackStats/resetLatency
l10n:
  sourceCommit: b884c869c8bdc8f6bd0ea8290934757d27d6845c
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`resetLatency()`**-Methode des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces setzt den Beginn des Intervalls zurück, in dem Latenzstatistiken gemessen werden, auf die [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime).

## Syntax

```js-nolint
resetLatency()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Reset the latency measurement to the current time
stats.resetLatency();
```

Siehe auch die Hauptreferenzseite [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
