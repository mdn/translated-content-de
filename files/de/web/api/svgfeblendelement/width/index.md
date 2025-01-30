---
title: "SVGFEBlendElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGFEBlendElement/width
l10n:
  sourceCommit: ebf665a2679f308eb8e4dc7330864b4661bcdb9c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die horizontale Größe einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feBlend")}}-Element und das Filterprimitive-Attribut {{SVGAttr("width")}} wider. Das Attribut ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage), relativ zur Breite des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Einheiten des Benutzerkoordinatensystems.

Das `<feBlend>` SVG-Filter mischt zwei Eingabebilder mit gängigen Bildbearbeitungs-{{cssxref("blend-mode", "Überblendmodi")}}.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const horizontalSize = feBlend.width;
console.log(horizontalSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.height`](/de/docs/Web/API/SVGFEBlendElement/height)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
