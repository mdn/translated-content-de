---
title: "SVGFEOffsetElement: y Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEOffsetElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement) Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}} Attribut des {{SVGElement("feOffset")}} Elements wider, welches das Eingabebild relativ zu seiner aktuellen Position verschiebt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y` Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Benutzerkoordinatensystemeinheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feOffset = document.querySelector("feOffset");
const topPosition = feOffset.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.x`](/de/docs/Web/API/SVGFEOffsetElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
