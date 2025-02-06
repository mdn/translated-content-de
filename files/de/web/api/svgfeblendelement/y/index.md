---
title: "SVGFEBlendElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEBlendElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des {{SVGElement("feBlend")}}-Elements für das {{SVGAttr("y")}}-Attribut des Filterprimitives wider.
Das `<feBlend>`-SVG-Filter blendet zwei Eingabebilder mithilfe gängiger Bildbearbeitungssoftware und deren {{cssxref("blend-mode", "Blending-Modi")}} zusammen.

Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse angibt. Ist das `y`-Attribut ein Prozentwert, so ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Benutzerkoordinatensystem-Einheiten. Der Standardwert ist `0`.

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
