---
title: "SVGFEConvolveMatrixElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEConvolveMatrixElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement) beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filter-Primitive-Attributs {{SVGAttr("x")}} des Elements {{SVGElement("feConvolveMatrix")}} wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrix-Faltungseffekt an, der Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Faltungseffekt wie Unschärfe, Kantenerkennung, Schärfen, Prägen oder Abschrägen zu erzeugen. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- SVG-Element {{SVGElement("filter")}}, SVG-Attribut {{SVGAttr("filter")}} in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
