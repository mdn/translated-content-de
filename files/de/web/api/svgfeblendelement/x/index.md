---
title: "SVGFEBlendElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEBlendElement/x
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitiveattributs {{SVGAttr("x")}} des {{SVGElement("feBlend")}}-Elements wider. Das `<feBlend>` SVG-Filterelement mischt zwei Eingabebilder unter Verwendung gängiger [Mischmodi](/de/docs/Web/CSS/blend-mode) aus Bildbearbeitungssoftware.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, bezieht sich der Eigenschaftswert auf die Breite der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
