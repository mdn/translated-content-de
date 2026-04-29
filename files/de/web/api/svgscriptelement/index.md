---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
l10n:
  sourceCommit: 0c001c739dd59b282af60a6d0a55c161798c0084
---

{{APIRef("SVG")}}

Das **`SVGScriptElement`**-Interface entspricht dem SVG-{{SVGElement("script")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href)
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht.
- [`SVGScriptElement.type`](/de/docs/Web/API/SVGScriptElement/type) {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht. Ein [`DOMException`](/de/docs/Web/API/DOMException) wird mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern.
- [`SVGScriptElement.async`](/de/docs/Web/API/SVGScriptElement/async)
  - : Ein Boolean, der dem {{SVGAttr("async")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht.
- [`SVGScriptElement.crossOrigin`](/de/docs/Web/API/SVGScriptElement/crossOrigin)
  - : Ein String, der dem {{SVGAttr("crossorigin")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)
