---
title: "PerformanceElementTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceElementTiming`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceElementTiming`-Objekt angetroffen wird.

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
- [`paintTime`](/de/docs/Web/API/PerformanceElementTiming/paintTime)
- [`presentationTime`](/de/docs/Web/API/PerformanceElementTiming/presentationTime)
- [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime)
- [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime)
- [`intersectionRect`](/de/docs/Web/API/PerformanceElementTiming/intersectionRect)
- [`identifier`](/de/docs/Web/API/PerformanceElementTiming/identifier)
- [`naturalWidth`](/de/docs/Web/API/PerformanceElementTiming/naturalWidth)
- [`naturalHeight`](/de/docs/Web/API/PerformanceElementTiming/naturalHeight)
- [`id`](/de/docs/Web/API/PerformanceElementTiming/id)
- [`url`](/de/docs/Web/API/PerformanceElementTiming/url)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, wird die Eigenschaft `intersectionRect` zusätzlich mithilfe von [`DOMRectReadOnly.toJSON()`](/de/docs/Web/API/DOMRectReadOnly/toJSON) serialisiert.

Das zurückgegebene Objekt enthält die Eigenschaft [`element`](/de/docs/Web/API/PerformanceElementTiming/element) nicht, da [`Element`](/de/docs/Web/API/Element) keine `toJSON()`-Operation bereitstellt. Die [`id`](/de/docs/Web/API/PerformanceElementTiming/id) des Elements wird jedoch bereitgestellt.

## Beispiele

### toJSON() direkt aufrufen

In diesem Beispiel wird ein `PerformanceElementTiming`-Objekt abgerufen. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      const json = entry.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.identifier); // Same value as entry.identifier
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "image-paint",
  "entryType": "element",
  "startTime": 670900.5,
  "duration": 0,
  "navigationId": 2463,
  "paintTime": 670898.25,
  "presentationTime": 670900.5,
  "renderTime": 670900.5,
  "loadTime": 670894.25,
  "intersectionRect": {
    "x": 299.25,
    "y": 76.25,
    "width": 135.5,
    "height": 155.5,
    "top": 76.25,
    "right": 434.75,
    "bottom": 231.75,
    "left": 299.25
  },
  "identifier": "big-image",
  "naturalWidth": 135,
  "naturalHeight": 155,
  "id": "myImage",
  "url": "https://en.wikipedia.org/static/images/project-logos/enwiki.png"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
