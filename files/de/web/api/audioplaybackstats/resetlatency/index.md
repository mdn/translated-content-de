---
title: "AudioPlaybackStats: resetLatency()-Methode"
short-title: resetLatency()
slug: Web/API/AudioPlaybackStats/resetLatency
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`resetLatency()`**-Methode des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces setzt den Beginn des Intervalls zurück, in dem die Latenzstatistiken gemessen werden, auf die [`BaseAudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime).

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

Siehe auch die Hauptreferenzseite [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
