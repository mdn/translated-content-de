---
title: "InteractionContentfulPaint: Methode toJSON()"
short-title: toJSON()
slug: Web/API/InteractionContentfulPaint/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `InteractionContentfulPaint`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `InteractionContentfulPaint`-Objekt vorkommt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`name`](/de/docs/Web/API/PerformanceEntry/name)
- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
- [`duration`](/de/docs/Web/API/PerformanceEntry/duration)
- [`navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId)
- [`paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime)
- [`presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime)
- [`interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId)
- [`largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, wird die Eigenschaft `largestContentfulPaint` zusätzlich mit [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON) serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `InteractionContentfulPaint`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.interactionId); // Same value as entry.interactionId
  });
});

observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "",
  "entryType": "interaction-contentful-paint",
  "startTime": 2226.25,
  "duration": 390.25,
  "navigationId": 2463,
  "paintTime": 2589.5,
  "presentationTime": 2616.5,
  "interactionId": 1704,
  "largestContentfulPaint": {
    "name": "",
    "entryType": "largest-contentful-paint",
    "startTime": 2616.5,
    "duration": 0,
    "navigationId": 2463,
    "paintTime": 2589.5,
    "presentationTime": 2616.5,
    "size": 19824,
    "renderTime": 2616.5,
    "loadTime": 0,
    "id": "",
    "url": ""
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
