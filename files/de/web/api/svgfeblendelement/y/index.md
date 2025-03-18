---
title: "SVGFEBlendElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEBlendElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der Schnittstelle [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitiv-Attributs {{SVGAttr("y")}} des {{SVGElement("feBlend")}}-Elements wider.
Das `<feBlend>` SVG-Filterelement mischt zwei Eingabebilder unter Verwendung von in Bildbearbeitungssoftware üblichen [Mischmodi](/de/docs/Web/CSS/blend-mode).

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse angibt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const topPosition = feBlend.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.x`](/de/docs/Web/API/SVGFEBlendElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
