---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die **`SVGScriptElement`**-Schnittstelle entspricht dem SVG-{{SVGElement("script")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("SVGScriptElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}}-{{deprecated_inline}}-Attribut des angegebenen {{SVGElement("script")}}-Elements entspricht.
- {{domxref("SVGScriptElement.type")}} {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des angegebenen {{SVGElement("script")}}-Elements entspricht. Ein {{domxref("DOMException")}} wird mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern.
- {{domxref("SVGScriptElement.crossOrigin")}} {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("crossorigin")}}-Attribut des angegebenen {{SVGElement("script")}}-Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
