---
title: "Document: rootElement Eigenschaft"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** gibt das [`Element`](/de/docs/Web/API/Element)
zurück, das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist, wenn es sich um ein
{{SVGElement("svg")}}-Element handelt, andernfalls `null`. Es ist zugunsten von
[`Document.documentElement`](/de/docs/Web/API/Document/documentElement) veraltet, welches das Wurzelelement für alle
Dokumente zurückgibt.

## Wert

Für SVG-Elemente das [`Element`](/de/docs/Web/API/Element), das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist; andernfalls `null`.

Wenn das Dokument ein nicht leeres SVG-Dokument ist, dann wird das `rootElement` ein
[`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) sein, welches identisch mit dem `documentElement` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
