---
title: "SVGAnimatedAngle: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedAngle/animVal
l10n:
  sourceCommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animVal`** des [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Interfaces repräsentiert den aktuell animierten Wert des zugehörigen [`<angle>`](/de/docs/Web/SVG/Content_type#angle) auf einem SVG-Element. Wenn das Attribut derzeit nicht animiert wird, ist `animVal` identisch mit dem `baseVal`.

Diese Eigenschaft spiegelt den animierten Zustand des Winkels des animierenden {{SVGattr("orient")}}-Attributs des SVG-{{SVGElement("marker")}}-Elements wider und ermöglicht den Zugriff auf den Wert des Winkels während der Animationen.

## Wert

Ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt, das den animierten Wert des [`<angle>`](/de/docs/Web/SVG/Content_type#angle)-Inhaltstyps darstellt.

- Wenn der Winkel animiert wird, wird `animVal` den aktuellen Animationszustand widerspiegeln.
- Wenn der Winkel nicht animiert wird, ist `animVal` identisch mit [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal).

## Beispiele

```js
const marker = document.querySelector("[orient]");

// Set an initial angle for the orient attribute
marker.setAttribute("orient", "45");

// Access the animated value of the angle
const animAngle = marker.orientAngle.animVal; // an SVGAngle object

console.log(animAngle.value); // Output: 45 (current animated value of the angle)
console.log(animAngle.unitType); // Output: 2 (constant for SVG_ANGLETYPE_DEG)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal)
- [`SVGAngle`](/de/docs/Web/API/SVGAngle) und [Winkel-`value`-Konstanten](/de/docs/Web/API/SVGAngle#constants)
