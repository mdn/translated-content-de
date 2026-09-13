---
title: "Dokument: rootElement-Eigenschaft"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}

**`Document.rootElement`** gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist, wenn es sich um ein {{SVGElement("svg")}}-Element handelt, andernfalls `null`. Es ist veraltet zugunsten von [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), welches das Wurzelelement für alle Dokumente zurückgibt.

## Wert

Für SVG-Elemente das [`Element`](/de/docs/Web/API/Element), das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist; andernfalls `null`.

Wenn das Dokument ein nicht leeres SVG-Dokument ist, dann ist das `rootElement` ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), identisch mit dem `documentElement`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
