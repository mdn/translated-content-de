---
title: SVGFEImageElement
slug: Web/API/SVGFEImageElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die **`SVGFEImageElement`** Schnittstelle entspricht dem {{SVGElement("feImage")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEImageElement.crossOrigin`](/de/docs/Web/API/SVGFEImageElement/crossOrigin) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das {{SVGAttr("crossorigin")}} Attribut des gegebenen Elements widerspiegelt, beschränkt auf nur bekannte Werte.
- [`SVGFEImageElement.height`](/de/docs/Web/API/SVGFEImageElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEImageElement.href`](/de/docs/Web/API/SVGFEImageElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen Elements widerspiegelt.
- [`SVGFEImageElement.preserveAspectRatio`](/de/docs/Web/API/SVGFEImageElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEImageElement.result`](/de/docs/Web/API/SVGFEImageElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEImageElement.width`](/de/docs/Web/API/SVGFEImageElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEImageElement.x`](/de/docs/Web/API/SVGFEImageElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEImageElement.y`](/de/docs/Web/API/SVGFEImageElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch diejenigen ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feImage")}}
