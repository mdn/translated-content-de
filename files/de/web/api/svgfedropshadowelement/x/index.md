---
title: "SVGFEDropShadowElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEDropShadowElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`** Schreibgeschützte Eigenschaft des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Interfaces beschreibt die horizontale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("x")}}-Attribut des {{SVGElement("feDropShadow")}}-Elements wider, welches einen Schlagschatten eines Eingabebildes erzeugt. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, gemessen als gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite des Filterbereichs in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const leftPosition = feDropShadow.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.y`](/de/docs/Web/API/SVGFEDropShadowElement/y)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}-Funktion
- CSS {{cssxref("box-shadow")}}-Eigenschaft
- CSS {{cssxref("text-shadow")}}-Eigenschaft
- CSS {{cssxref("blend-mode")}}-Datentyp
- CSS {{cssxref("mix-blend-mode")}}-Eigenschaft
