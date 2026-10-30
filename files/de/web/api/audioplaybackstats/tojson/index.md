---
title: "AudioPlaybackStats: Methode toJSON()"
short-title: toJSON()
slug: Web/API/AudioPlaybackStats/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`AudioPlaybackStats`](/de/docs/Web/API/AudioPlaybackStats) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `AudioPlaybackStats`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `AudioPlaybackStats`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`underrunDuration`](/de/docs/Web/API/AudioPlaybackStats/underrunDuration)
- [`underrunEvents`](/de/docs/Web/API/AudioPlaybackStats/underrunEvents)
- [`totalDuration`](/de/docs/Web/API/AudioPlaybackStats/totalDuration)
- [`averageLatency`](/de/docs/Web/API/AudioPlaybackStats/averageLatency)
- [`minimumLatency`](/de/docs/Web/API/AudioPlaybackStats/minimumLatency)
- [`maximumLatency`](/de/docs/Web/API/AudioPlaybackStats/maximumLatency)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `AudioPlaybackStats`-Objekt aus einem Audiokontext ab. Der direkte Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const audioCtx = new AudioContext();
const stats = audioCtx.playbackStats;

// ...

const json = stats.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.underrunEvents); // Same value as stats.underrunEvents
```

### Als JSON-Zeichenfolge serialisieren

Das `AudioPlaybackStats`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(stats));
```

Dies würde eine JSON-Zeichenfolge wie die folgende ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "underrunDuration": 0.125,
  "underrunEvents": 1,
  "totalDuration": 68.252138,
  "averageLatency": 0.01863,
  "minimumLatency": 0.01,
  "maximumLatency": 0.018654
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
