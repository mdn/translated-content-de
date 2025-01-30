---
title: "SVGFEBlendElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEBlendElement/y
l10n:
  sourceCommit: ebf665a2679f308eb8e4dc7330864b4661bcdb9c
---

{{APIRef("SVG")}}

Die **`y`**-Schreibgeschützte Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feBlend")}}-Elements wider. Das `<feBlend>`-SVG-Filter blendet zwei Eingabebilder unter Verwendung von in Bildbearbeitungssoftware häufig verwendeten {{cssxref("blend-mode", "Mischmodi")}} miteinander.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
