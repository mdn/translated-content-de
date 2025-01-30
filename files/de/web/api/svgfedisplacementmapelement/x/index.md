---
title: "SVGFEDisplacementMapElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEDisplacementMapElement/x
l10n:
  sourceCommit: b85296a36664e26537fc181c65521d0aa8679fa6
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** des [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Es spiegelt den Wert des Filterprimitivattributs {{SVGAttr("x")}} des {{SVGElement("feDisplacementMap")}}-Elements wider. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzokoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzokoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, bezieht sich der Eigenschaftswert auf die Breite des Filterbereichs in Benutzokoordinateneinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const leftPosition = feDisplacementMap.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDisplacementMapElement.y`](/de/docs/Web/API/SVGFEDisplacementMapElement/y)
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) API und {{SVGElement("feImage")}}-Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) API und {{SVGElement("feTurbulence")}}-Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
