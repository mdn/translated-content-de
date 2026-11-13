---
title: "SVGNumber: value-Eigenschaft"
short-title: value
slug: Web/API/SVGNumber/value
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("SVG")}}

Die Eigenschaft **`value`** des Interfaces [`SVGNumber`](/de/docs/Web/API/SVGNumber) repräsentiert die Zahl.

## Wert

Eine Gleitkommazahl.

## Beispiele

### Zugriff auf die Eigenschaft `value`

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
