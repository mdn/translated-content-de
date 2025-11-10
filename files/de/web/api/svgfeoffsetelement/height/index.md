---
title: "SVGFEOffsetElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGFEOffsetElement/height
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die vertikale Größe eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt.

Sie spiegelt das {{SVGAttr("height")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, welches das Eingabebild relativ zu seiner aktuellen Position verschiebt. Das Attribut ist entweder ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder ein [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), bezogen auf die Höhe der Filterregion. Der Standardwert ist `100%`. Der Eigenschaftswert ist eine Länge in Benutzereinzelsystemeinheiten.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feOffset = document.querySelector("feOffset");
const verticalSize = feOffset.height;
console.log(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.width`](/de/docs/Web/API/SVGFEOffsetElement/width)
