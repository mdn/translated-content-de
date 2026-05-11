---
title: "AudioContext: playbackStats-Eigenschaft"
short-title: playbackStats
slug: Web/API/AudioContext/playbackStats
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`playbackStats`**-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Interfaces gibt ein [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt zurück, das Zugriff auf Statistiken zu Dauer, Underrun und Latenz für den `AudioContext` bietet. Diese Statistiken ermöglichen es Ihnen, Audioverzögerungen und -störungen zu messen.

Es ist möglich, die unmittelbare Wiedergabelatenz des Kontextes über die [`AudioContext.outputLatency`](/de/docs/Web/API/AudioContext/outputLatency)-Eigenschaft abzurufen; `playbackStats` bietet jedoch Zugang zu detaillierteren Statistiken, die sich im Laufe der Zeit aktualisieren, einschließlich durchschnittlicher, minimaler und maximaler Latenz.

## Wert

Ein [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekt.

## Beispiele

### Grundlegende Verwendung

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log average latency
console.log(stats.averageLatency);
```

Siehe auch die Hauptreferenzseite für [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
