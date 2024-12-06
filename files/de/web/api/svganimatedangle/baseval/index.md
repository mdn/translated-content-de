---
title: "SVGAnimatedAngle: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedAngle/baseVal
l10n:
  sourceCommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Basiswert (nicht animiert) des zugehörigen [`<angle>`](/de/docs/Web/SVG/Content_type#angle) auf einem SVG-Element darstellt. Diese Eigenschaft wird verwendet, um den statischen Wert des `<angle>` abzurufen, der von laufenden Animationen nicht beeinflusst wird.

Diese Eigenschaft spiegelt den `<angle>`-Wert des {{SVGattr("orient")}}-Attributs des SVG-{{SVGElement("marker")}}-Elements wider, was dem [`SVGMarkerElement.orientAngle`](/de/docs/Web/API/SVGMarkerElement/orientAngle)-Eigenschaft entspricht.

## Wert

Ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt, das den Basiswert des [`<angle>`](/de/docs/Web/SVG/Content_type#angle)-Inhaltstyps darstellt.

- Der Wert wird von Animationen nicht beeinflusst und repräsentiert den Ausgangszustand des Winkels.
- Der Einheitentyp des Winkels kann aus [`SVGAngle.unitType`](/de/docs/Web/API/SVGAngle/unitType) abgerufen werden.

## Beispiele

```js
const marker = document.querySelector("[orient]");

// Set the orient attribute with an angle
marker.setAttribute("orient", "90");
const baseAngle = marker.orientAngle.baseVal; // an SVGAngle object

console.log(baseAngle.value); // Output: 90
console.log(baseAngle.unitType); // Output: 1 (constant for SVG_ANGLETYPE_UNSPECIFIED)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal)
- [`SVGAngle`](/de/docs/Web/API/SVGAngle) und [Winkel-`value`-Konstanten](/de/docs/Web/API/SVGAngle#constants)
