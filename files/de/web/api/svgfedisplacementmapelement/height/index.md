---
title: "SVGFEDisplacementMapElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEDisplacementMapElement/height
l10n:
  sourceCommit: b85296a36664e26537fc181c65521d0aa8679fa6
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`height`** der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feDisplacementMap")}}-Element und dessen Filterprimitive-Attribut {{SVGAttr("height")}} wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerskoordinatensystems.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feDisplacementMap = document.querySelector("feDisplacementMap");
const verticalSize = feDisplacementMap.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDisplacementMapElement.width`](/de/docs/Web/API/SVGFEDisplacementMapElement/width)
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) API und {{SVGElement("feImage")}}-Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) API und {{SVGElement("feTurbulence")}}-Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
