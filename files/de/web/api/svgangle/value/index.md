---
title: "SVGAngle: Eigenschaft `value`"
short-title: value
slug: Web/API/SVGAngle/value
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die Eigenschaft `value` der [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Schnittstelle repräsentiert den Gleitkommawert des [`<angle>`](/de/docs/Web/SVG/Content_type#angle) in Grad.

Das Setzen dieses Attributs führt dazu, dass [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits) und [`valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString) automatisch aktualisiert werden, um diese Einstellung zu reflektieren.

## Wert

Eine Zahl; der Winkelwert in Grad.

## Beispiele

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the value
angle.value = 45;
console.log(angle.value); // Output: 45

// Reflecting the value
angle.value = 90;
console.log(angle.value); // Output: 90
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
