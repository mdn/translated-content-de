---
title: "PerformanceElementTiming: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}. Sie gibt eine JSON-Darstellung des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekts darstellt.

Das JSON enthält nicht die [`element`](/de/docs/Web/API/PerformanceElementTiming/element)-Eigenschaft, da diese vom Typ [`Element`](/de/docs/Web/API/Element) ist, der keine `toJSON()`-Operation bereitstellt. Die [`id`](/de/docs/Web/API/PerformanceElementTiming/id) des Elements wird jedoch bereitgestellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceElementTiming`-Objekts zurück, mit Informationen über das Bildelement.

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
      console.log(entry.toJSON());
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "image-paint",
  "entryType": "element",
  "startTime": 670894.1000000238,
  "duration": 0,
  "renderTime": 0,
  "loadTime": 670894.1000000238,
  "intersectionRect": {
    "x": 299,
    "y": 76,
    "width": 135,
    "height": 155,
    "top": 76,
    "right": 434,
    "bottom": 231,
    "left": 299
  },
  "identifier": "big-image",
  "naturalWidth": 135,
  "naturalHeight": 155,
  "id": "myImage",
  "url": "https://en.wikipedia.org/static/images/project-logos/enwiki.png"
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
