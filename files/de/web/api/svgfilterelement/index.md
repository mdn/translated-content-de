---
title: SVGFilterElement
slug: Web/API/SVGFilterElement
l10n:
  sourceCommit: 25da2a336322cda9adb10a85a7d037b5fede4f3b
---

{{APIRef("SVG")}}

Die **`SVGFilterElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("filter")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SVGFilterElement.href`](/de/docs/Web/API/SVGFilterElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht.
- [`SVGFilterElement.filterUnits`](/de/docs/Web/API/SVGFilterElement/filterUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("filterUnits")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGFilterElement.primitiveUnits`](/de/docs/Web/API/SVGFilterElement/primitiveUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("primitiveUnits")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGFilterElement.x`](/de/docs/Web/API/SVGFilterElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht.
- [`SVGFilterElement.y`](/de/docs/Web/API/SVGFilterElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht.
- [`SVGFilterElement.width`](/de/docs/Web/API/SVGFilterElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht.
- [`SVGFilterElement.height`](/de/docs/Web/API/SVGFilterElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("filter")}}
