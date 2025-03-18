---
title: "SVGAnimatedAngle: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedAngle/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`baseVal`** schreibgeschützte Eigenschaft des [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Interfaces repräsentiert den Basiswert (nicht-animiert) des zugehörigen [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle) auf einem SVG-Element. Diese Eigenschaft wird verwendet, um den statischen Wert des `<angle>` abzurufen, der von laufenden Animationen nicht beeinflusst wird.

Diese Eigenschaft spiegelt den `<angle>`-Wert des {{SVGattr("orient")}}-Attributs des SVG-{{SVGElement("marker")}}-Elements wider, was dem [`SVGMarkerElement.orientAngle`](/de/docs/Web/API/SVGMarkerElement/orientAngle)-Attribut entspricht.

## Wert

Ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt, das den Basiswert des Inhalts der [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle)-Inhaltstyp darstellt.

- Der Wert wird von Animationen nicht beeinflusst und repräsentiert den Anfangszustand des Winkels.
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
- [`SVGAngle`](/de/docs/Web/API/SVGAngle) und [Winkel `value`-Konstanten](/de/docs/Web/API/SVGAngle#constants)
