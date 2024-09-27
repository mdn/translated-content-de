---
title: "SVGPointList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGPointList/insertItemBefore
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`** Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList) Schnittstelle fügt einen [`point`](/de/docs/Web/API/SVGPoint) vor einem anderen Element in der Liste ein.

## Syntax

```js-nolint
insertItemBefore(obj, index)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt, das die Koordinaten des einzufügenden Punktes enthält.
- `index`
  - : Der Index des Elements, vor dem das Objekt eingefügt werden soll. Wenn der übergebene Index größer ist als die Länge der Liste, wird der Index auf die Listenlänge gesetzt und das Element vor dem letzten Element der Liste eingefügt.

### Rückgabewert

Das eingetragene [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neues [`SVGPoint`](/de/docs/Web/API/SVGPoint) wird erstellt und vor dem Punkt an Index `2` eingefügt.

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
console.log(example.points.insertItemBefore(svgpoint, 2));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
