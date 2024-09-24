---
title: SVGPatternElement
slug: Web/API/SVGPatternElement
l10n:
  sourceCommit: a7dc8593894e275bb9d522168f3ae9120ce5242e
---

{{APIRef("SVG")}}

Die **`SVGPatternElement`**-Schnittstelle entspricht dem {{SVGElement("pattern")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("SVGElement")}}._

- {{domxref("SVGPatternElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.
- {{domxref("SVGPatternElement.patternUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("patternUnits")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht. Es nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGPatternElement.patternContentUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("patternContentUnits")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht. Es nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGPatternElement.patternTransform")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedTransformList")}}, das dem {{SVGAttr("patternTransform")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.
- {{domxref("SVGPatternElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.
- {{domxref("SVGPatternElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.
- {{domxref("SVGPatternElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.
- {{domxref("SVGPatternElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("pattern")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt aber Methoden von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
