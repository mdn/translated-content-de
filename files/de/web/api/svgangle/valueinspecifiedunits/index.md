---
title: "SVGAngle: valueInSpecifiedUnits-Eigenschaft"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGAngle/valueInSpecifiedUnits
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die `valueInSpecifiedUnits`-Eigenschaft des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces stellt den Wert dieses Winkels als Zahl dar, in den Einheiten, die durch den [`unitType`](/de/docs/Web/API/SVGAngle/unitType) des Winkels ausgedrückt werden.

Das Setzen dieses Attributs führt dazu, dass [`value`](/de/docs/Web/API/SVGAngle/value) und [`valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString) automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

## Wert

Eine Zahl; der numerische Faktor des Winkels.

## Beispiele

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value of the angle in degrees
angle.value = 45;
console.log(angle.valueInSpecifiedUnits); // Output: 45

// Update the numeric factor of the angle
angle.valueInSpecifiedUnits = 90;
console.log(angle.valueInSpecifiedUnits); // Output: 90
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
