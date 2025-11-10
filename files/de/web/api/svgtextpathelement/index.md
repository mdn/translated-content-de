---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGTextPathElement`** Interface entspricht dem {{SVGElement("textPath")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

- [`SVGTextPathElement.href`](/de/docs/Web/API/SVGTextPathElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} Attribut des gegebenen Elements entspricht.
- [`SVGTextPathElement.startOffset`](/de/docs/Web/API/SVGTextPathElement/startOffset) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das der X-Komponente des {{SVGAttr("startOffset")}} Attributs des gegebenen Elements entspricht.
- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("method")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `TEXTPATH_METHODTYPE_*` Konstanten an, die in diesem Interface definiert sind.
- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("spacing")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `TEXTPATH_SPACINGTYPE_*` Konstanten an, die in diesem Interface definiert sind.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die seines übergeordneten Interfaces, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

## Statische Eigenschaften

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Entspricht dem Wert `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Entspricht dem Wert `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Entspricht dem Wert `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Entspricht dem Wert `exact`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("textPath")}}
