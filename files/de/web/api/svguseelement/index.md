---
title: SVGUseElement
slug: Web/API/SVGUseElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

## SVG use DOM-Schnittstelle

Die **`SVGUseElement`** Schnittstelle entspricht dem {{SVGElement("use")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGUseElement.href`](/de/docs/Web/API/SVGUseElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des betreffenden Elements entspricht.
- [`SVGUseElement.x`](/de/docs/Web/API/SVGUseElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des betreffenden Elements entspricht.
- [`SVGUseElement.y`](/de/docs/Web/API/SVGUseElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des betreffenden Elements entspricht.
- [`SVGUseElement.width`](/de/docs/Web/API/SVGUseElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des betreffenden Elements entspricht.
- [`SVGUseElement.height`](/de/docs/Web/API/SVGUseElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des betreffenden Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von ihrer Elternschnittstelle [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("use")}}
