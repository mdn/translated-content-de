---
title: "SVGFEDropShadowElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFEDropShadowElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feDropShadow")}}-Elements wider, das einen Schlagschatten eines Eingabebildes erzeugt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const topPosition = feDropShadow.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.x`](/de/docs/Web/API/SVGFEDropShadowElement/x)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}-Funktion
- CSS-{{cssxref("box-shadow")}}-Eigenschaft
- CSS-{{cssxref("text-shadow")}}-Eigenschaft
- CSS-{{cssxref("blend-mode")}}-Datentyp
- CSS-{{cssxref("mix-blend-mode")}}-Eigenschaft
