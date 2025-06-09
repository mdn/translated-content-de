---
title: "SVGPointList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGPointList/appendItem
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle fügt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) am Ende der Liste hinzu.

## Syntax

```js-nolint
appendItem(obj)
```

### Parameter

- `obj`
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die Koordinaten des anzuhängenden Punkts enthält.

### Rückgabewert

Das [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Ein neuer [`DOMPoint`](/de/docs/Web/API/DOMPoint) wird erstellt und zur Liste hinzugefügt.

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
console.log(example.points.appendItem(point));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
