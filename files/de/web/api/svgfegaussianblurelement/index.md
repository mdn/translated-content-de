---
title: SVGFEGaussianBlurElement
slug: Web/API/SVGFEGaussianBlurElement
l10n:
  sourceCommit: fcae10dc7577ef8ae93c0ec36d43b35fb301f0f9
---

{{APIRef("SVG")}}

Die **`SVGFEGaussianBlurElement`**-Schnittstelle entspricht dem {{SVGElement("feGaussianBlur")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEGaussianBlurElement.edgeMode`](/de/docs/Web/API/SVGFEGaussianBlurElement/edgeMode) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die bestimmt, welche Farbwerte verwendet werden, wenn beim Weichzeichnen Pixel außerhalb des Randes des Eingabebildes abgetastet werden müssen. Sie spiegelt das {{SVGAttr("edgeMode")}}-Attribut des angegebenen {{SVGElement("feGaussianBlur")}}-Elements wider.
- [`SVGFEGaussianBlurElement.height`](/de/docs/Web/API/SVGFEGaussianBlurElement/height) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.in1`](/de/docs/Web/API/SVGFEGaussianBlurElement/in1) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), die dem {{SVGAttr("in")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.result`](/de/docs/Web/API/SVGFEGaussianBlurElement/result) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), die dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.stdDeviationX`](/de/docs/Web/API/SVGFEGaussianBlurElement/stdDeviationX) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die der (möglicherweise automatisch berechneten) X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.stdDeviationY`](/de/docs/Web/API/SVGFEGaussianBlurElement/stdDeviationY) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die der (möglicherweise automatisch berechneten) Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.width`](/de/docs/Web/API/SVGFEGaussianBlurElement/width) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.x`](/de/docs/Web/API/SVGFEGaussianBlurElement/x) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.y`](/de/docs/Web/API/SVGFEGaussianBlurElement/y) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEGaussianBlurElement.setStdDeviation()`](/de/docs/Web/API/SVGFEGaussianBlurElement/setStdDeviation)
  - : Setzt die Werte für das `stdDeviation`-Attribut.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feGaussianBlur")}}
