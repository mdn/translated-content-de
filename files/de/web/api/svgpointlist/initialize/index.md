---
title: "SVGPointList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("SVG")}}

Die **`initialize()`** Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList) Schnittstelle leert die Liste und fügt dann ein einziges neues [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt der Liste hinzu.

## Syntax

```js-nolint
initialize(obj)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt, das die Koordinaten des Punktes enthält, der hinzugefügt wird, wenn die Liste initialisiert wird.

### Rückgabewert

Das hinzugefügte [`SVGPoint`](/de/docs/Web/API/SVGPoint) Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das eine {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die Rückgabe von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) ergibt den Wert `5`. Nach dem Aufruf von `initialize()`, ergibt die Rückgabe von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) den Wert `1`.

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
console.log(example.points.length); // 5;
const svgPoint = document.getElementById("svg").createSVGPoint();
example.points.initialize(svgPoint);
console.log(example.points.length); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
