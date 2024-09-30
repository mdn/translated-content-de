---
title: "SVGPointList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGPointList/getItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der Schnittstelle [`SVGPointList`](/de/docs/Web/API/SVGPointList) holt ein Element aus der Liste am angegebenen Index.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Der Index des zurückzugebenden Elements.

### Rückgabewert

Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene Index größer ist als die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Der [`SVGPoint`](/de/docs/Web/API/SVGPoint) am Index `0`.

```html
<svg id="svg" viewBox="-10 -10 120 120" xmlns="http://www.w3.org/2000/svg">
  <polyline
    id="example"
    stroke="black"
    fill="none"
    points="50,0 21,90 98,35 2,35 79,90" />
</svg>
```

```js
let example = document.getElementById("example");
console.log(example.points.getItem(0));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
