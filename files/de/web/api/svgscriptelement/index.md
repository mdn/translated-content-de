---
title: SVGScriptElement
slug: Web/API/SVGScriptElement
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("SVG")}}

Das Interface **`SVGScriptElement`** entspricht dem SVG-Element {{SVGElement("script")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`SVGScriptElement.async`](/de/docs/Web/API/SVGScriptElement/async)
  - : Ein boolescher Wert, der das Attribut `async` des betreffenden {{SVGElement("script")}}-Elements widerspiegelt. Er gibt an, ob das Skript asynchron ausgeführt werden soll.
- [`SVGScriptElement.crossOrigin`](/de/docs/Web/API/SVGScriptElement/crossOrigin)
  - : Eine Zeichenfolge, die das Attribut {{SVGAttr("crossorigin")}} des betreffenden {{SVGElement("script")}}-Elements widerspiegelt. Es handelt sich um ein Attribut für {{Glossary("CORS", "CORS")}}-Einstellungen.
- [`SVGScriptElement.defer`](/de/docs/Web/API/SVGScriptElement/defer) {{Experimental_Inline}}
  - : Ein boolescher Wert, der das Attribut `defer` des betreffenden {{SVGElement("script")}}-Elements widerspiegelt. Er gibt an, ob das Skript ausgeführt werden soll, nachdem das Dokument geparst wurde.
- [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("href")}} oder dem Attribut {{SVGAttr("xlink:href")}} {{deprecated_inline}} des betreffenden {{SVGElement("script")}}-Elements entspricht.
- [`SVGScriptElement.type`](/de/docs/Web/API/SVGScriptElement/type)
  - : Eine Zeichenfolge, die dem Attribut {{SVGAttr("type")}} des betreffenden {{SVGElement("script")}}-Elements entspricht.

## Instanzmethoden

_Dieses Interface implementiert keine eigenen Methoden, erbt aber Methoden von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)
