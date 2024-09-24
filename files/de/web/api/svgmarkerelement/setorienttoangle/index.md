---
title: "SVGMarkerElement: Methode setOrientToAngle()"
short-title: setOrientToAngle()
slug: Web/API/SVGMarkerElement/setOrientToAngle
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`setOrientToAngle()`** Methode der {{domxref("SVGMarkerElement")}} Schnittstelle setzt den Wert des `orient`-Attributs auf den Wert des übergebenen {{domxref("SVGAngle")}}.

## Syntax

```js-nolint
setOrientToAngle(angle)
```

### Parameter

- `angle`
  - : Ein {{domxref("SVGAngle")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird der Wert des `orient`-Attributs mit `setOrientToAngle()` aktualisiert, indem ein {{domxref("SVGAngle")}} verwendet wird, das mit {{domxref("SVGSVGElement.createSVGAngle()")}} erstellt wurde.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="90">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let svg = document.getElementById("svg");
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // Wert im obigen SVG - 90
let angle = svg.createSVGAngle();
angle.value = "110";
marker.setOrientToAngle(angle);
console.log(marker.orientAngle.baseVal.value); // neuer Wert - 110
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
