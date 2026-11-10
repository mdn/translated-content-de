---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFEMorphologyElement`** entspricht dem Element {{SVGElement("feMorphology")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_MORPHOLOGY_OPERATOR_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_MORPHOLOGY_OPERATOR_ERODE` (1)
  - : Entspricht dem Wert `erode`.
- `SVG_MORPHOLOGY_OPERATOR_DILATE` (2)
  - : Entspricht dem Wert `dilate`.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEMorphologyElement.height`](/de/docs/Web/API/SVGFEMorphologyElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.in1`](/de/docs/Web/API/SVGFEMorphologyElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.operator`](/de/docs/Web/API/SVGFEMorphologyElement/operator) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("operator")}} des jeweiligen Elements entspricht. Sie nimmt einen der auf dieser Schnittstelle definierten `SVG_MORPHOLOGY_OPERATOR_*`-Konstantenwerte an.
- [`SVGFEMorphologyElement.radiusX`](/de/docs/Web/API/SVGFEMorphologyElement/radiusX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des Attributs {{SVGAttr("radius")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.radiusY`](/de/docs/Web/API/SVGFEMorphologyElement/radiusY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des Attributs {{SVGAttr("radius")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.result`](/de/docs/Web/API/SVGFEMorphologyElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.width`](/de/docs/Web/API/SVGFEMorphologyElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.x`](/de/docs/Web/API/SVGFEMorphologyElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des jeweiligen Elements entspricht.
- [`SVGFEMorphologyElement.y`](/de/docs/Web/API/SVGFEMorphologyElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert aber die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feMorphology")}}
