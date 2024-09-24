---
title: SVGFilterElement
slug: Web/API/SVGFilterElement
l10n:
  sourceCommit: 25da2a336322cda9adb10a85a7d037b5fede4f3b
---

{{APIRef("SVG")}}

Die **`SVGFilterElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("filter")}}-Elementen sowie Methoden zu deren Bearbeitung.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("SVGFilterElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("href")}} oder dem {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht.
- {{domxref("SVGFilterElement.filterUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("filterUnits")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht. Nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGFilterElement.primitiveUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("primitiveUnits")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht. Nimmt einen der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGFilterElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht.
- {{domxref("SVGFilterElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht.
- {{domxref("SVGFilterElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht.
- {{domxref("SVGFilterElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}} Attribut des gegebenen {{SVGElement("filter")}} Elements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
