---
title: "SVGPointList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGPointList/insertItemBefore
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die Methode **`insertItemBefore()`** der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle fügt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) vor einem anderen Element in der Liste ein.

## Syntax

```js-nolint
insertItemBefore(obj, index)
```

### Parameter

- `obj`
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die Koordinaten des einzufügenden Punktes enthält.
- `index`
  - : Der Index des Elements, vor dem das Objekt eingefügt werden soll. Wenn der angegebene Index größer als die Länge der Liste ist, wird der Index auf die Listenlänge gesetzt und das Element wird vor dem letzten Element in der Liste eingefügt.

### Rückgabewert

Das eingefügte [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neuer [`DOMPoint`](/de/docs/Web/API/DOMPoint) wird erstellt und vor dem Punkt bei Index `2` eingefügt.

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
const example = document.getElementById("example");
const point = document.getElementById("svg").createSVGPoint();
point.y = 10;
point.x = 10;
console.log(example.points.insertItemBefore(point, 2));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
