---
title: "SVGFECompositeElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFECompositeElement/x
l10n:
  sourceCommit: a5395de76cd0066aed71cf351029eb6e342b73d1
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitivattributs {{SVGAttr("x")}} des {{SVGElement("feComposite")}}-Elements wider. Das `<feComposite>` SVG-Filterprimitive kombiniert zwei Eingabebilder mittels einer Porter-Duff-Kompositionsoperation. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem und entspricht der angegebenen Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse. Wenn das `x`-Attribut einen Prozentwert aufweist, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComposite = document.querySelector("feComposite");
const leftPosition = feComposite.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.y`](/de/docs/Web/API/SVGFECompositeElement/y)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
