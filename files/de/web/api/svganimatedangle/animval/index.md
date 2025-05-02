---
title: "SVGAnimatedAngle: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedAngle/animVal
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die schreibgeschützte **`animVal`**-Eigenschaft der [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Schnittstelle repräsentiert den aktuellen animierten Wert des zugehörigen [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle)-Attributs auf einem SVG-Element. Wenn das Attribut derzeit nicht animiert wird, entspricht `animVal` dem `baseVal`.

Diese Eigenschaft spiegelt den animierten Zustand des Winkels des animierenden {{SVGattr("orient")}}-Attributs des SVG-{{SVGElement("marker")}}-Elements wider und ermöglicht den Zugriff auf den Wert des Winkels während der Animationen.

## Wert

Ein [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Objekt, das den animierten Wert des Inhalts vom Typ [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle) darstellt.

- Wenn der Winkel animiert wird, spiegelt `animVal` den aktuellen Animationszustand wider.
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
- [`SVGAngle`](/de/docs/Web/API/SVGAngle) und [Winkel-`value`-Konstanten](/de/docs/Web/API/SVGAngle#static_properties)
