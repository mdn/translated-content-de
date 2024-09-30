---
title: "SVGMarkerElement: setOrientToAuto() Methode"
short-title: setOrientToAuto()
slug: Web/API/SVGMarkerElement/setOrientToAuto
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`setOrientToAuto()`**-Methode der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle setzt den Wert des `orient`-Attributs auf `auto`.

## Syntax

```js-nolint
setOrientToAuto()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird der Wert des `orient`-Attributs mit `setOrientToAuto()` aktualisiert.

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
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value);
marker.setOrientToAuto();
console.log(marker.orientAngle.baseVal.value);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
