---
title: "SVGAnimatedInteger: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedInteger/baseVal
l10n:
  sourceCommit: bc7875d9a6c405e47c6ee166b5acc2174515129f
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)-Schnittstelle repräsentiert den Basiswert (nicht animiert) eines animierbaren [`<integer>`](/de/docs/Web/SVG/Content_type#integer).

Einige Attribute, wie das {{SVGAttr("numOctaves")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements oder das {{SVGAttr("order")}}-Attribut des {{SVGElement("feConvolveMatrix")}}, akzeptieren einen `long`-Integer als Wert. Diese Eigenschaft ermöglicht den Zugriff auf den statischen, nicht animierten Zustand des Attributs als Zahl.

## Wert

Ein `long`; der Basiswert (nicht animiert) des reflektierten Attributs.

## Beispiele

```js
const feTurbulence = document.querySelector("feTurbulence");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the base value
console.log(animatedInteger.baseVal); // Output: 4

// Modify the base value
animatedInteger.baseVal = 6;

// Verify the reflected attribute value
console.log(feTurbulence.getAttribute("numOctaves")); // Output: "6"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<integer>`](/de/docs/Web/SVG/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
