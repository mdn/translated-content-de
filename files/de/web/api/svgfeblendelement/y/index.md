---
title: "SVGFEBlendElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEBlendElement/y
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("SVG")}}

Die **`y`**-Schreibgeschützte Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitivattributs {{SVGAttr("y")}} des {{SVGElement("feBlend")}}-Elements wider. Das `<feBlend>`-SVG-Filter mischt zwei Eingabebilder zusammen unter Verwendung häufig verwendeter [Mischmodi](/de/docs/Web/CSS/blend-mode) von Bildbearbeitungssoftware.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
