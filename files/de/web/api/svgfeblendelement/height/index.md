---
title: "SVGFEBlendElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEBlendElement/height
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("SVG")}}

Die schreibgeschützte **`height`**-Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die vertikale Größe einer SVG-Filter-Primitiven als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element und dessen {{SVGAttr("height")}}-Filter-Primitiven-Attribut wider. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), das relativ zur Höhe der Filterregion ist. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitensystem-Einheiten.

Das `<feBlend>` SVG-Filter-Element blendet zwei Eingabebilder mit den in gängigen Bildbearbeitungsprogrammen verwendeten [Mischmodi](/de/docs/Web/CSS/Reference/Values/blend-mode) zusammen.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const verticalSize = feBlend.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.width`](/de/docs/Web/API/SVGFEBlendElement/width)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
