---
title: "SVGPointList: clear()-Methode"
short-title: clear()
slug: Web/API/SVGPointList/clear
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`clear()`**-Methode des [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Interfaces entfernt alle Elemente aus der Liste.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Das folgende Beispiel zeigt ein SVG, das ein {{SVGElement("polyline")}} mit fünf Koordinatenpaaren enthält. Das Aufrufen von `clear()` leert die Liste. Daher wird die Polylinie im SVG nicht mehr angezeigt.

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
example.points.clear();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
