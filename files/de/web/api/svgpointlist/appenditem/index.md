---
title: "SVGPointList: Methode appendItem()"
short-title: appendItem()
slug: Web/API/SVGPointList/appendItem
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`appendItem()`** Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList) Schnittstelle fügt einen [`point`](/de/docs/Web/API/SVGPoint) am Ende der Liste hinzu.

## Syntax

```js-nolint
appendItem(obj)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt, das die Koordinaten des hinzuzufügenden Punktes enthält.

### Rückgabewert

Das angehängte [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neuer [`SVGPoint`](/de/docs/Web/API/SVGPoint) wird erstellt und der Liste hinzugefügt.

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
console.log(example.points.appendItem(svgpoint));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
