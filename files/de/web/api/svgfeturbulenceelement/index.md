---
title: SVGFETurbulenceElement
slug: Web/API/SVGFETurbulenceElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGFETurbulenceElement`** Interface entspricht dem {{SVGElement("feTurbulence")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFETurbulenceElement.baseFrequencyX`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.baseFrequencyY`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.height`](/de/docs/Web/API/SVGFETurbulenceElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.numOctaves`](/de/docs/Web/API/SVGFETurbulenceElement/numOctaves) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("numOctaves")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.result`](/de/docs/Web/API/SVGFETurbulenceElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.seed`](/de/docs/Web/API/SVGFETurbulenceElement/seed) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("seed")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.stitchTiles`](/de/docs/Web/API/SVGFETurbulenceElement/stitchTiles) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("stitchTiles")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_STITCHTYPE_*` Konstanten an, die in diesem Interface definiert sind.
- [`SVGFETurbulenceElement.type`](/de/docs/Web/API/SVGFETurbulenceElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_TURBULENCE_TYPE_*` Konstanten an, die in diesem Interface definiert sind.
- [`SVGFETurbulenceElement.width`](/de/docs/Web/API/SVGFETurbulenceElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.x`](/de/docs/Web/API/SVGFETurbulenceElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.y`](/de/docs/Web/API/SVGFETurbulenceElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGFETurbulenceElement/y), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert aber die seines Eltern-Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_TURBULENCE_TYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
- `SVG_TURBULENCE_TYPE_FRACTALNOISE` (1)
  - : Entspricht dem Wert `fractalNoise`.
- `SVG_TURBULENCE_TYPE_TURBULENCE` (2)
  - : Entspricht dem Wert `turbulence`.
- `SVG_STITCHTYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
- `SVG_STITCHTYPE_STITCH` (1)
  - : Entspricht dem Wert `stitch`.
- `SVG_STITCHTYPE_NOSTITCH` (2)
  - : Entspricht dem Wert `noStitch`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feTurbulence")}}
