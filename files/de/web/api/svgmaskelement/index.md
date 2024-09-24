---
title: SVGMaskElement
slug: Web/API/SVGMaskElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGMaskElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften der {{SVGElement("mask")}}-Elemente sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGMaskElement.maskUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("maskUnits")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGMaskElement.maskContentUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("maskContentUnits")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGMaskElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- {{domxref("SVGMaskElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- {{domxref("SVGMaskElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- {{domxref("SVGMaskElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("mask")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer Elternschnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mask")}}
