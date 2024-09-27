---
title: SVGFEImageElement
slug: Web/API/SVGFEImageElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Das **`SVGFEImageElement`** Interface entspricht dem {{SVGElement("feImage")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elterninterface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEImageElement.crossOrigin`](/de/docs/Web/API/SVGFEImageElement/crossOrigin) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das {{SVGAttr("crossorigin")}} Attribut des angegebenen Elements widerspiegelt, begrenzt auf nur bekannte Werte.
- [`SVGFEImageElement.height`](/de/docs/Web/API/SVGFEImageElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des angegebenen Elements entspricht.
- [`SVGFEImageElement.href`](/de/docs/Web/API/SVGFEImageElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des angegebenen Elements widerspiegelt.
- [`SVGFEImageElement.preserveAspectRatio`](/de/docs/Web/API/SVGFEImageElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}} Attribut des angegebenen Elements entspricht.
- [`SVGFEImageElement.result`](/de/docs/Web/API/SVGFEImageElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}} Attribut des angegebenen Elements entspricht.
- [`SVGFEImageElement.width`](/de/docs/Web/API/SVGFEImageElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des angegebenen Elements entspricht.
- [`SVGFEImageElement.x`](/de/docs/Web/API/SVGFEImageElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des angegebenen Elements entspricht.
- [`SVGFEImageElement.y`](/de/docs/Web/API/SVGFEImageElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die seines Elternteils, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feImage")}}
