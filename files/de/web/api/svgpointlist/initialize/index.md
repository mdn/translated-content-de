---
title: "SVGPointList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle löscht die Liste und fügt dann ein einzelnes neues [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt zur Liste hinzu.

## Syntax

```js-nolint
initialize(obj)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt, das die Koordinaten des Punktes enthält, der hinzugefügt werden soll, wenn die Liste initialisiert wird.

### Rückgabewert

Das hinzugefügte [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Liste nur-lesbar ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Die Rückgabe von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) gibt den Wert `5` zurück. Nach dem Aufruf von `initialize()` gibt die Rückgabe von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) den Wert `1` zurück.

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
console.log(example.points.length); //5;
let svgPoint = document.getElementById("svg").createSVGPoint();
example.points.initialize(svgPoint);
console.log(example.points.length); //1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
