---
title: "SVGAngle: valueAsString-Eigenschaft"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die `valueAsString`-Eigenschaft des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces repräsentiert den Wert des Winkels als Zeichenkette, in den durch [`unitType`](/de/docs/Web/API/SVGAngle/unitType) ausgedrückten Einheiten.

Das Setzen dieses Attributs bewirkt, dass [`value`](/de/docs/Web/API/SVGAngle/value), [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits) und [`unitType`](/de/docs/Web/API/SVGAngle/unitType) automatisch aktualisiert werden, um diese Einstellung zu reflektieren.

## Wert

Eine Zeichenkette; der Wert des Winkels.

## Beispiele

### Setzen und Abrufen von `valueAsString`

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value using valueAsString in degrees
angle.valueAsString = "45deg";
console.log(angle.valueAsString); // Output: "45deg"
console.log(angle.value); // Output: 45 (in degrees)

// Set the value using valueAsString in radians
angle.valueAsString = "1.57rad";
console.log(angle.valueAsString); // Output: "1.57rad"
console.log(Math.round(angle.value)); // Output: 90 (since 1.57 radians is approximately 90 degrees)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<angle>`](/de/docs/Web/SVG/Content_type#angle)
- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
