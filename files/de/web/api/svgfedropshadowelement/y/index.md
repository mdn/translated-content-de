---
title: "SVGFEDropShadowElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGFEDropShadowElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feDropShadow")}}-Elements wider, welches einen Schlagschatten eines Eingabebildes erzeugt. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand von der Ursprungsposition des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzereinheitensystemen. Der Standardwert ist `0`.

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
- CSS {{cssxref("box-shadow")}}-Eigenschaft
- CSS {{cssxref("text-shadow")}}-Eigenschaft
- CSS {{cssxref("blend-mode")}}-Datentyp
- CSS {{cssxref("mix-blend-mode")}}-Eigenschaft
