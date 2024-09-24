---
title: SVGFEImageElement
slug: Web/API/SVGFEImageElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die **`SVGFEImageElement`**-Schnittstelle entspricht dem {{SVGElement("feImage")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEImageElement.crossOrigin")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}} spiegelt das {{SVGAttr("crossorigin")}}-Attribut des gegebenen Elements wider, beschränkt auf nur bekannte Werte.
- {{domxref("SVGFEImageElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}} entspricht dem {{SVGAttr("height")}}-Attribut des gegebenen Elements.
- {{domxref("SVGFEImageElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}} spiegelt das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des gegebenen Elements wider.
- {{domxref("SVGFEImageElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedPreserveAspectRatio")}} entspricht dem {{SVGAttr("preserveAspectRatio")}}-Attribut des gegebenen Elements.
- {{domxref("SVGFEImageElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}} entspricht dem {{SVGAttr("result")}}-Attribut des gegebenen Elements.
- {{domxref("SVGFEImageElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}} entspricht dem {{SVGAttr("width")}}-Attribut des gegebenen Elements.
- {{domxref("SVGFEImageElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}} entspricht dem {{SVGAttr("x")}}-Attribut des gegebenen Elements.
- {{domxref("SVGFEImageElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}} entspricht dem {{SVGAttr("y")}}-Attribut des gegebenen Elements.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihres übergeordneten, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feImage")}}
