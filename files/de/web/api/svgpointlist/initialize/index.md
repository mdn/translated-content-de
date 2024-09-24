---
title: "SVGPointList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGPointList/initialize
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode des {{domxref("SVGPointList")}}-Interfaces löscht die Liste und fügt dann ein einzelnes neues {{domxref("SVGPoint")}}-Objekt zur Liste hinzu.

## Syntax

```js-nolint
initialize(obj)
```

### Parameter

- `obj`
  - : Ein {{domxref("SVGPoint")}}-Objekt, das die Koordinaten des Punkts enthält, der hinzugefügt wird, wenn die Liste initialisiert wird.

### Rückgabewert

Das hinzugefügte {{domxref("SVGPoint")}}-Objekt.

### Ausnahmen

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt eine SVG, die ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Das Zurückgeben von {{domxref("SVGPointList.length")}} ergibt den Wert `5`. Nach dem Aufruf von `initialize()` ergibt das Zurückgeben von {{domxref("SVGPointList.length")}} den Wert `1`.

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
