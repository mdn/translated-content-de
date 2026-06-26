---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
l10n:
  sourceCommit: a9e07b75358077e93e2515a13a7413275116ee48
---

{{APIRef("SVG")}}

Die **`SVGScriptElement`**-Schnittstelle entspricht dem SVG-{{SVGElement("script")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`SVGScriptElement.async`](/de/docs/Web/API/SVGScriptElement/async)
  - : Ein boolescher Wert, der das `async`-Attribut des entsprechenden {{SVGElement("script")}}-Elements widerspiegelt. Es gibt an, ob das Skript asynchron ausgeführt werden soll.
- [`SVGScriptElement.crossOrigin`](/de/docs/Web/API/SVGScriptElement/crossOrigin)
  - : Ein String, der das {{SVGAttr("crossorigin")}}-Attribut des entsprechenden {{SVGElement("script")}}-Elements widerspiegelt. Es ist ein {{Glossary("CORS", "CORS")}}-Einstellungsattribut.
- [`SVGScriptElement.defer`](/de/docs/Web/API/SVGScriptElement/defer) {{Experimental_Inline}}
  - : Ein boolescher Wert, der das `defer`-Attribut des entsprechenden {{SVGElement("script")}}-Elements widerspiegelt. Es gibt an, ob das Skript ausgeführt werden soll, nachdem das Dokument geparst wurde.
- [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des entsprechenden {{SVGElement("script")}}-Elements entspricht.
- [`SVGScriptElement.type`](/de/docs/Web/API/SVGScriptElement/type) {{ReadOnlyInline}}
  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des entsprechenden {{SVGElement("script")}}-Elements entspricht. Ein [`DOMException`](/de/docs/Web/API/DOMException) wird mit dem Code `NO_MODIFICATION_ALLOWED_ERR` ausgelöst, wenn versucht wird, den Wert eines schreibgeschützten Attributs zu ändern.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)
