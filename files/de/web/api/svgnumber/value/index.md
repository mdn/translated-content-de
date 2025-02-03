---
title: "SVGNumber: Eigenschaft value"
short-title: value
slug: Web/API/SVGNumber/value
l10n:
  sourceCommit: 4d45ceb8c5083fcd325abf028105d0ddfe8d4874
---

{{APIRef("SVG")}}

Die **`value`** schreibgeschützte Eigenschaft der [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Schnittstelle repräsentiert die Zahl.

## Wert

Ein Float.

## Beispiele

### Zugriff auf die `value`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const circleElement = document.getElementById("myCircle");

// Access the radius (r) value property
const radiusValue = circleElement.r.baseVal.value;

console.log(radiusValue); // Output: 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
