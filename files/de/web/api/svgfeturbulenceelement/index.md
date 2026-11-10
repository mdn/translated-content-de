---
title: SVGFETurbulenceElement
slug: Web/API/SVGFETurbulenceElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFETurbulenceElement`** entspricht dem Element {{SVGElement("feTurbulence")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_TURBULENCE_TYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_TURBULENCE_TYPE_FRACTALNOISE` (1)
  - : Entspricht dem Wert `fractalNoise`.
- `SVG_TURBULENCE_TYPE_TURBULENCE` (2)
  - : Entspricht dem Wert `turbulence`.
- `SVG_STITCHTYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_STITCHTYPE_STITCH` (1)
  - : Entspricht dem Wert `stitch`.
- `SVG_STITCHTYPE_NOSTITCH` (2)
  - : Entspricht dem Wert `noStitch`.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFETurbulenceElement.baseFrequencyX`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des Attributs {{SVGAttr("baseFrequency")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.baseFrequencyY`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des Attributs {{SVGAttr("baseFrequency")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.height`](/de/docs/Web/API/SVGFETurbulenceElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.numOctaves`](/de/docs/Web/API/SVGFETurbulenceElement/numOctaves) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("numOctaves")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.result`](/de/docs/Web/API/SVGFETurbulenceElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.seed`](/de/docs/Web/API/SVGFETurbulenceElement/seed) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("seed")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.stitchTiles`](/de/docs/Web/API/SVGFETurbulenceElement/stitchTiles) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem Attribut {{SVGAttr("stitchTiles")}} des jeweiligen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_STITCHTYPE_*`-Konstantenwerte an.
- [`SVGFETurbulenceElement.type`](/de/docs/Web/API/SVGFETurbulenceElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem Attribut {{SVGAttr("type")}} des jeweiligen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_TURBULENCE_TYPE_*`-Konstantenwerte an.
- [`SVGFETurbulenceElement.width`](/de/docs/Web/API/SVGFETurbulenceElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.x`](/de/docs/Web/API/SVGFETurbulenceElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des jeweiligen Elements entspricht.
- [`SVGFETurbulenceElement.y`](/de/docs/Web/API/SVGFETurbulenceElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert aber die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feTurbulence")}}
