---
title: "SVGFECompositeElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFECompositeElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die vertikale Größe einer SVG-Filterprimitive als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGElement("feComposite")}}-Element und dessen {{SVGAttr("height")}}-Attribut der Filterprimitive wider. Die `<feComposite>` SVG-Filterprimitive kombiniert zwei Eingabebilder mithilfe einer Porter-Duff-Compositing-Operation. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), relativ zur Höhe des Filterbereichs. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinheitkoordinaten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComposite = document.querySelector("feComposite");
const verticalSize = feComposite.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
