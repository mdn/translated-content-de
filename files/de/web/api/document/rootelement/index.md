---
title: "Document: rootElement-Eigenschaft"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** gibt das [`Element`](/de/docs/Web/API/Element)
zurück, das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist, falls es ein
{{SVGElement("svg")}}-Element ist; ansonsten `null`. Es ist veraltet zugunsten von
[`Document.documentElement`](/de/docs/Web/API/Document/documentElement), welches das Wurzelelement für alle
Dokumente zurückgibt.

## Wert

Für SVG-Elemente das [`Element`](/de/docs/Web/API/Element), das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist; ansonsten `null`.

Wenn das Dokument ein nicht-leeres SVG-Dokument ist, wird das `rootElement` ein
[`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) sein, identisch mit dem `documentElement`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
