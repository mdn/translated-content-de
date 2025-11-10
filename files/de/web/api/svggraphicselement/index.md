---
title: SVGGraphicsElement
slug: Web/API/SVGGraphicsElement
l10n:
  sourceCommit: 34055723f9d2bbadfa8b0f0d27102e3adcedbd58
---

{{APIRef("SVG")}}

Das **`SVGGraphicsElement`**-Interface repräsentiert SVG-Elemente, deren Hauptzweck darin besteht, Grafiken direkt in eine Gruppe zu rendern.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.requiredExtensions`](/de/docs/Web/API/SVGGraphicsElement/requiredExtensions) {{ReadOnlyInline}}
  - : Ein [`SVGStringList`](/de/docs/Web/API/SVGStringList), das das Attribut {{SVGAttr("requiredExtensions")}} des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.systemLanguage`](/de/docs/Web/API/SVGGraphicsElement/systemLanguage) {{ReadOnlyInline}}
  - : Ein [`SVGStringList`](/de/docs/Web/API/SVGStringList), das das Attribut {{SVGAttr("systemLanguage")}} des gegebenen Elements widerspiegelt.
- [`SVGGraphicsElement.transform`](/de/docs/Web/API/SVGGraphicsElement/transform) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), das den berechneten Wert der {{cssxref("transform")}}-Eigenschaft und das entsprechende Attribut {{SVGAttr("transform")}} des gegebenen Elements widerspiegelt.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das den berechneten Begrenzungsrahmen des aktuellen Elements darstellt.
- [`SVGGraphicsElement.getCTM()`](/de/docs/Web/API/SVGGraphicsElement/getCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem seines SVG-Ansichtsfensters transformiert.
- [`SVGGraphicsElement.getScreenCTM()`](/de/docs/Web/API/SVGGraphicsElement/getScreenCTM)
  - : Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die die Matrix darstellt, die das Koordinatensystem des aktuellen Elements in das Koordinatensystem des SVG-Ansichtsfensters für das SVG-Dokumentfragment transformiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
