---
title: "SVGFEDiffuseLightingElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEDiffuseLightingElement/width
l10n:
  sourceCommit: 6f958c59155cfa5142076187384690a679f346ec
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Größe eines SVG-Filter-Primitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt das {{SVGElement("feDiffuseLighting")}}-Element-Attribut {{SVGAttr("width")}} des Filter-Primitivs wider. Der Filter beleuchtet ein Bild, indem er den Alpha-Kanal als Bump-Map verwendet. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage), das relativ zur Breite der Filter-Region ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystemen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDiffuseLighting = document.querySelector("feDiffuseLighting");
const horizontalSize = feDiffuseLighting.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.height`](/de/docs/Web/API/SVGFEDiffuseLightingElement/height)
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
