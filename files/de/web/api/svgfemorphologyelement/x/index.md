---
title: "SVGFEMorphologyElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEMorphologyElement/x
l10n:
  sourceCommit: 9ecba36579d53837ec5853ea6883f57c3d6fc864
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivelements als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Diese Eigenschaft ist schreibgeschützt.

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feMorphology")}}-Elements wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzersystem, die die gegebene Entfernung vom Ursprung des Benutzersystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzersystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feMorphology = document.querySelector("feMorphology");
const leftPosition = feMorphology.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMorphologyElement.y`](/de/docs/Web/API/SVGFEMorphologyElement/y)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
