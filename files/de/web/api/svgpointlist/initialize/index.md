---
title: "SVGPointList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle löscht die Liste und fügt ein einzelnes neues [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt zur Liste hinzu.

## Syntax

```js-nolint
initialize(obj)
```

### Parameter

- `obj`
  - : Ein [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt, das die Koordinaten des Punkts enthält, der zur Liste hinzugefügt wird, wenn diese initialisiert wird.

### Rückgabewert

Das hinzugefügte [`SVGPoint`](/de/docs/Web/API/SVGPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Das Zurückgeben von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) ergibt den Wert `5`. Nach dem Aufrufen von `initialize()`, ergibt das Zurückgeben von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) den Wert `1`.

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
let svgpoint = document.getElementById("svg").createSVGPoint();
example.points.initialize(svgpoint);
console.log(example.points.length); //1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
