---
title: "LargestContentfulPaint: Methode toJSON()"
short-title: toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}

Die Methode **`toJSON()`** der Schnittstelle [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LargestContentfulPaint`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `LargestContentfulPaint`-Objekt vorkommt.

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
- [`paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
- [`presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
- [`size`](/de/docs/Web/API/LargestContentfulPaint/size)
- [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)
- [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)
- [`id`](/de/docs/Web/API/LargestContentfulPaint/id)
- [`url`](/de/docs/Web/API/LargestContentfulPaint/url)

Der Wert jeder Eigenschaft wird unverändert kopiert.

Das zurückgegebene Objekt enthält die Eigenschaft [`element`](/de/docs/Web/API/LargestContentfulPaint/element) nicht, da [`Element`](/de/docs/Web/API/Element) keine `toJSON()`-Operation bereitstellt.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `LargestContentfulPaint`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.size); // Same value as entry.size
  });
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### In eine JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dabei würde eine JSON-Zeichenfolge wie die folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "",
  "entryType": "largest-contentful-paint",
  "startTime": 468.5,
  "duration": 0,
  "navigationId": 2463,
  "paintTime": 460.25,
  "presentationTime": 468.5,
  "size": 19824,
  "renderTime": 468.5,
  "loadTime": 0,
  "id": "",
  "url": ""
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
