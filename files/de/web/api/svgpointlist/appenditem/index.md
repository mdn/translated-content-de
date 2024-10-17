---
title: "SVGPointList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGPointList/appendItem
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

Die **`appendItem()`** Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList) Schnittstelle fügt einen [`point`](/de/docs/Web/API/SVGPoint) am Ende der Liste hinzu.

## Syntax

```js-nolint
appendItem(obj)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt, das die Koordinaten des anzufügenden Punktes enthält.

### Rückgabewert

Das angefügte [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neues [`SVGPoint`](/de/docs/Web/API/SVGPoint) wird erstellt und der Liste hinzugefügt.

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
console.log(example.points.appendItem(svgPoint));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
