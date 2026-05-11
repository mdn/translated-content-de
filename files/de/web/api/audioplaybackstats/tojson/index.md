---
title: "AudioPlaybackStats: toJSON() Methode"
short-title: toJSON()
slug: Web/API/AudioPlaybackStats/toJSON
l10n:
  sourceCommit: f93d96a97c1dfcf8fc77d660799f3680b67bec61
---

{{APIRef("Web Audio API")}}

Die **`toJSON()`** Methode des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats)-Objekts ist.

## Beispiele

### Verwenden der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `stats.toJSON()` eine JSON-Darstellung des `AudioPlaybackStats`-Objekts zurück.

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

// Log playbackStats JSON
console.log(stats.toJSON());
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "underrunDuration": 0,
  "underrunEvents": 0,
  "totalDuration": 68.252138,
  "averageLatency": 0.01863,
  "minimumLatency": 0,
  "maximumLatency": 0.018654
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(stats)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
