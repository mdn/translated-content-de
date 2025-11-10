---
title: "SVGAnimatedInteger: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der Schnittstelle [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) repräsentiert den animierten Wert eines [`<integer>`](/de/docs/Web/SVG/Guides/Content_type#integer). Wenn keine Animation angewendet wird, entspricht `animVal` `baseVal`.

Einige Attribute, wie das {{SVGAttr("numOctaves")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements oder das {{SVGAttr("order")}}-Attribut des {{SVGElement("feConvolveMatrix")}}-Elements akzeptieren einen `long`-Integer als Wert. Diese Eigenschaft bietet Zugriff auf den aktuellen animierten Zustand des Attributs als eine Zahl.

## Wert

Ein `long`; der animierte Wert des Attributs.

## Beispiele

```js
const feTurbulence = document.querySelector("feTurbulence");

// Set the animatable 'numOctaves' attribute
feTurbulence.setAttribute("numOctaves", "4");

// Access the SVGAnimatedInteger object
const animatedInteger = feTurbulence.numOctaves;

// Get the animated value (read-only)
console.log(animatedInteger.animVal); // Output: 4 (the current animated value)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<integer>`](/de/docs/Web/SVG/Guides/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
