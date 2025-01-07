---
title: "SVGAnimatedInteger: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedInteger/animVal
l10n:
  sourceCommit: bc7875d9a6c405e47c6ee166b5acc2174515129f
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der Schnittstelle [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) repräsentiert den animierten Wert eines [`<integer>`](/de/docs/Web/SVG/Content_type#integer). Falls keine Animation angewendet wird, entspricht `animVal` dem `baseVal`.

Einige Attribute, wie das {{SVGAttr("numOctaves")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements oder das {{SVGAttr("order")}}-Attribut des {{SVGElement("feConvolveMatrix")}}-Elements akzeptieren einen `long`-Integer als Wert. Diese Eigenschaft bietet den Zugriff auf den aktuellen animierten Zustand des Attributs als Zahl.

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

- [`<integer>`](/de/docs/Web/SVG/Content_type#integer)
- {{SVGAttr("numOctaves")}}
- {{SVGAttr("order")}}
