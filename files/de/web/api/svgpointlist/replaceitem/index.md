---
title: "SVGPointList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGPointList/replaceItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`replaceItem()`** Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList) Schnittstelle ersetzt einen [`point`](/de/docs/Web/API/SVGPoint) in der Liste.

## Syntax

```js-nolint
replaceItem(obj, index)
```

### Parameter

- `obj`
  - : Ein [`point`](/de/docs/Web/API/SVGPoint) Objekt, das die Koordinaten des einzufügenden Punktes enthält.
- `index`
  - : Der Index des zu ersetzenden Elements.

### Rückgabewert

Das neue [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der übergebene Index größer ist als die Anzahl der Elemente in der Liste.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neues [`SVGPoint`](/de/docs/Web/API/SVGPoint) wird erstellt und ersetzt dann den Punkt an Index `1` (das zweite Element in der Liste).

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
let svgpoint = document.getElementById("svg").createSVGPoint();
svgpoint.y = 10;
svgpoint.x = 10;
console.log(example.points.replaceItem(svgpoint, 1));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
