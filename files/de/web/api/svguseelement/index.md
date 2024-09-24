---
title: SVGUseElement
slug: Web/API/SVGUseElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

## SVG `use` DOM-Schnittstelle

Die **`SVGUseElement`**-Schnittstelle entspricht dem {{SVGElement("use")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGUseElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGUseElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGUseElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGUseElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGUseElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, {{domxref("SVGGraphicsElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("use")}}
