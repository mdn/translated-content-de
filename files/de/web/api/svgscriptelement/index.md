---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Das **`SVGScriptElement`**-Interface entspricht dem SVG-{{SVGElement("script")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}}-{{deprecated_inline}} Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht.
- [`SVGScriptElement.type`](/de/docs/Web/API/SVGScriptElement/type) {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht. Ein [`DOMException`](/de/docs/Web/API/DOMException) wird mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern.
- [`SVGScriptElement.crossOrigin`](/de/docs/Web/API/SVGScriptElement/crossOrigin) {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("crossorigin")}}-Attribut des gegebenen {{SVGElement("script")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, sondern erbt Methoden von seinem Elterninterface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
