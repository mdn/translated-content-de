---
title: "SVGFEDisplacementMapElement: height Eigenschaft"
short-title: height
slug: Web/API/SVGFEDisplacementMapElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die vertikale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt das Filterprimitive-Attribut {{SVGAttr("height")}} des {{SVGElement("feDisplacementMap")}}-Elements wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

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
