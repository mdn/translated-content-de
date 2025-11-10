---
title: "SVGAnimatedInteger: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedInteger/baseVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)-Schnittstelle repräsentiert den Basiswert (nicht animiert) eines animierbaren [`<integer>`](/de/docs/Web/SVG/Guides/Content_type#integer).

Einige Attribute, wie das {{SVGAttr("numOctaves")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements oder das {{SVGAttr("order")}}-Attribut des {{SVGElement("feConvolveMatrix")}}-Elements, akzeptieren einen `long` Integer als Wert. Diese Eigenschaft bietet Zugriff auf den statischen, nicht animierten Zustand des Attributs als Zahl.

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

- [`<integer>`](/de/docs/Web/SVG/Guides/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
