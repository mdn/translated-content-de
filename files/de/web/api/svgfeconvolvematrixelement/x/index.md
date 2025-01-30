---
title: "SVGFEConvolveMatrixElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEConvolveMatrixElement/x
l10n:
  sourceCommit: e0bf626da04e5e1e21373fe4011e20fdcaae62a0
---

{{APIRef("SVG")}}

Die unveränderliche **`x`**-Eigenschaft der [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Schnittstelle beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Attributwert der {{SVGElement("feConvolveMatrix")}}-Element-{{SVGAttr("x")}}-Filterprimitive wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixkonvolutionseffekt an, der Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Konvolutionseffekt wie Weichzeichnung, Kantenerkennung, Schärfung, Prägung oder Abschrägung zu erzeugen. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Benutzereinheitensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feConvolveMatrix = document.querySelector("feConvolveMatrix");
const leftPosition = feConvolveMatrix.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEConvolveMatrixElement.y`](/de/docs/Web/API/SVGFEConvolveMatrixElement/y)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
