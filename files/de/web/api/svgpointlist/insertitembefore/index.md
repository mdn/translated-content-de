---
title: "SVGPointList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGPointList/insertItemBefore
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`** Methode des [`SVGPointList`](/de/docs/Web/API/SVGPointList) Interfaces fügt einen [`point`](/de/docs/Web/API/SVGPoint) vor einem anderen Element in der Liste ein.

## Syntax

```js-nolint
insertItemBefore(obj, index)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt, das die Koordinaten des einzufügenden Punktes enthält.
- `index`
  - : Der Index des Elements, vor dem das Objekt eingefügt werden soll. Wenn der übergebene Index größer als die Länge der Liste ist, wird der Index auf die Listenlänge gesetzt und das Element wird vor dem letzten Element der Liste eingefügt.

### Rückgabewert

Das eingefügte [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neuer [`SVGPoint`](/de/docs/Web/API/SVGPoint) wird erstellt und vor dem Punkt mit dem Index `2` eingefügt.

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
let svgPoint = document.getElementById("svg").createSVGPoint();
svgPoint.y = 10;
svgPoint.x = 10;
console.log(example.points.insertItemBefore(svgPoint, 2));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
