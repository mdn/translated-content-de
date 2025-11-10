---
title: "SVGFECompositeElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGFECompositeElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie reflektiert den Wert des Filterprimitivattributs {{SVGElement("feComposite")}} des Elements {{SVGAttr("x")}}. Das SVG-Filterprimitiv `<feComposite>` kombiniert zwei Eingabebilder mithilfe einer Porter-Duff-Kompositionsoperation. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

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
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
