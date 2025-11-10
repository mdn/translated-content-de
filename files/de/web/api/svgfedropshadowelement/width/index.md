---
title: "SVGFEDropShadowElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEDropShadowElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`width`** der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle beschreibt die horizontale Größe eines SVG-Filterprimitivs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("width")}}-Filterprimitivattribut wider. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das relativ zur Breite der Filterregion ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDropShadow = document.querySelector("feDropShadow");
const horizontalSize = feDropShadow.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.height`](/de/docs/Web/API/SVGFEDropShadowElement/height)
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}-Funktion
- CSS {{cssxref("box-shadow")}}-Eigenschaft
- CSS {{cssxref("text-shadow")}}-Eigenschaft
- CSS {{cssxref("blend-mode")}}-Datentyp
- CSS {{cssxref("mix-blend-mode")}}-Eigenschaft
