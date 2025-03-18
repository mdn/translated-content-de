---
title: "SVGAngle: valueAsString-Eigenschaft"
short-title: valueAsString
slug: Web/API/SVGAngle/valueAsString
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die `valueAsString`-Eigenschaft des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces stellt den Winkelwert als Zeichenkette dar, in den Einheiten, die durch [`unitType`](/de/docs/Web/API/SVGAngle/unitType) ausgedrückt werden.

Das Setzen dieses Attributs führt dazu, dass [`value`](/de/docs/Web/API/SVGAngle/value), [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits) und [`unitType`](/de/docs/Web/API/SVGAngle/unitType) automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

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

- [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle)
- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
