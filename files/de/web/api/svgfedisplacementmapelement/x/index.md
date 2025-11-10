---
title: "SVGFEDisplacementMapElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGFEDisplacementMapElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feDisplacementMap")}}-Elements und dessen {{SVGAttr("x")}}-Filterprimitivattribut wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzersystem der Koordinaten, die den angegebenen Abstand vom Ursprung des Benutzersystems der Koordinaten entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzersystemkoordinateneinheiten. Der Standardwert ist `0`.

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
