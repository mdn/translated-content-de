---
title: "SVGFEBlendElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEBlendElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitiv-Attributs {{SVGAttr("x")}} des {{SVGElement("feBlend")}}-Elements wider. Das `<feBlend>` SVG-Filterelement mischt zwei Eingabebilder mit in Bildbearbeitungssoftware üblichen [Mischmodi](/de/docs/Web/CSS/blend-mode).

Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const leftPosition = feBlend.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
