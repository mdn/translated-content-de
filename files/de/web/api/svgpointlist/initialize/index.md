---
title: "SVGPointList: Methode initialize()"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Schnittstelle leert die Liste und fügt dann ein einzelnes neues [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt zur Liste hinzu.

## Syntax

```js-nolint
initialize(obj)
```

### Parameter

- `obj`
  - : Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt, das die Koordinaten des Punkts enthält, der hinzugefügt werden soll, wenn die Liste initialisiert wird.

### Rückgabewert

Das hinzugefügte [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Beim Zurückgeben von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) ergibt sich der Wert `5`. Nach dem Aufruf von `initialize()` ergibt das Zurückgeben von [`SVGPointList.length`](/de/docs/Web/API/SVGPointList/length) den Wert `1`.

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
const point = document.getElementById("svg").createSVGPoint();
example.points.initialize(point);
console.log(example.points.length); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
