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

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEGaussianBlurElement.edgeMode")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedEnumeration")}}, die dem {{SVGAttr("edgeMode")}}-Attribut des gegebenen Elements entspricht. Gibt zwei identische Werte zurück, die einer der folgenden Werte sind:
    - `SVG_EDGEMODE_UNKNOWN` (0)
      - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
    - `SVG_EDGEMODE_DUPLICATE` (1)
      - : Entspricht dem `duplicate`-Wert.
    - `SVG_EDGEMODE_WRAP` (2)
      - : Entspricht dem `wrap`-Wert.
    - `SVG_EDGEMODE_NONE` (3)
      - : Entspricht dem `none`-Wert.
- {{domxref("SVGFEGaussianBlurElement.height")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedLength")}}, die dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.in1")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedString")}}, die dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.result")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedString")}}, die dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.stdDeviationX")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die der möglicherweise automatisch berechneten X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.stdDeviationY")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die der möglicherweise automatisch berechneten Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.width")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedLength")}}, die dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.x")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedLength")}}, die dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEGaussianBlurElement.y")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedLength")}}, die dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihrer Elternschnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEGaussianBlurElement.setStdDeviation()")}}
  - : Setzt die Werte für das `stdDeviation`-Attribut.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feGaussianBlur")}}
