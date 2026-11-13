---
title: "Dokument: rootElement-Eigenschaft"
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{ApiRef("DOM")}}

Die schreibgeschützte Eigenschaft **`rootElement`** der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das Wurzelelement des [`document`](/de/docs/Web/API/Document) ist, sofern es sich um ein {{SVGElement("svg")}}-Element handelt; andernfalls gibt sie `null` zurück. Sie ist zugunsten von [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) veraltet, das das Wurzelelement für alle Dokumente zurückgibt.

## Wert

Bei SVG-Dokumenten das [`Element`](/de/docs/Web/API/Element), das das Wurzelelement des [`document`](/de/docs/Web/API/Document) ist; andernfalls `null`.

Wenn das Dokument ein nicht leeres SVG-Dokument ist, ist `rootElement` ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement), das mit `documentElement` identisch ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
