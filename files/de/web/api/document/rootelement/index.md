---
title: "Document: rootElement-Eigenschaft"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** gibt das {{domxref("Element")}} zurück,
das das Wurzelelement des {{domxref("document")}} ist, wenn es sich um ein
{{SVGElement("svg")}}-Element handelt, andernfalls `null`. Es ist veraltet und sollte durch
{{domxref("Document.documentElement")}} ersetzt werden, welches das Wurzelelement für alle
Dokumente zurückgibt.

## Wert

Für SVG-Elemente das {{domxref("Element")}}, das das Wurzelelement des {{domxref("document")}} ist; andernfalls `null`.

Wenn das Dokument ein nicht leeres SVG-Dokument ist, dann wird `rootElement` ein
{{domxref("SVGSVGElement")}} sein, identisch mit dem `documentElement`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
