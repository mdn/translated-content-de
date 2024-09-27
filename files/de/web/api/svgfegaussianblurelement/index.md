---
title: SVGFEGaussianBlurElement
slug: Web/API/SVGFEGaussianBlurElement
l10n:
  sourceCommit: d525572dd0dc9b9d1f5aed68d76a19e0be48ea7e
---

{{APIRef("SVG")}}

Die **`SVGFEGaussianBlurElement`**-Schnittstelle entspricht dem {{SVGElement("feGaussianBlur")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEGaussianBlurElement.edgeMode`](/de/docs/Web/API/SVGFEGaussianBlurElement/edgeMode) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("edgeMode")}}-Attribut des gegebenen Elements entspricht. Gibt zwei identische Werte zurück, die einer der folgenden Werte sind:
    - `SVG_EDGEMODE_UNKNOWN` (0)
      - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
    - `SVG_EDGEMODE_DUPLICATE` (1)
      - : Entspricht dem `duplicate`-Wert.
    - `SVG_EDGEMODE_WRAP` (2)
      - : Entspricht dem `wrap`-Wert.
    - `SVG_EDGEMODE_NONE` (3)
      - : Entspricht dem `none`-Wert.
- [`SVGFEGaussianBlurElement.height`](/de/docs/Web/API/SVGFEGaussianBlurElement/height) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.in1`](/de/docs/Web/API/SVGFEGaussianBlurElement/in1) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), die dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.result`](/de/docs/Web/API/SVGFEGaussianBlurElement/result) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), die dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.stdDeviationX`](/de/docs/Web/API/SVGFEGaussianBlurElement/stdDeviationX) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die der (möglicherweise automatisch berechneten) X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.stdDeviationY`](/de/docs/Web/API/SVGFEGaussianBlurElement/stdDeviationY) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die der (möglicherweise automatisch berechneten) Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.width`](/de/docs/Web/API/SVGFEGaussianBlurElement/width) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.x`](/de/docs/Web/API/SVGFEGaussianBlurElement/x) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEGaussianBlurElement.y`](/de/docs/Web/API/SVGFEGaussianBlurElement/y) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEGaussianBlurElement.setStdDeviation()`](/de/docs/Web/API/SVGFEGaussianBlurElement/setStdDeviation)
  - : Legt die Werte für das `stdDeviation`-Attribut fest.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feGaussianBlur")}}
