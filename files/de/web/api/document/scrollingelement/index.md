---
title: "Dokument: scrollingElement-Eigenschaft"
short-title: scrollingElement
slug: Web/API/Document/scrollingElement
l10n:
  sourceCommit: b404c3f8442ae2f9095d106219b5b74d6ae91446
---

{{APIRef("DOM")}}

Die **`scrollingElement`**-Schreibgeschützte Eigenschaft der
{{domxref("Document")}}-Schnittstelle gibt eine Referenz auf das {{domxref("Element")}} zurück, das das Dokument scrollt. Im Standardmodus ist dies das Wurzelelement des Dokuments, {{domxref("document.documentElement")}}.

Im Quirks-Modus gibt das `scrollingElement`-Attribut das HTML-`body`-Element zurück, wenn es existiert und _nicht_ [potenziell scrollbar](https://drafts.csswg.org/cssom-view/#potentially-scrollable) ist, andernfalls gibt es `null` zurück. Dies mag überraschend erscheinen, ist aber sowohl gemäß der Spezifikation als auch in Browsern korrekt.

## Wert

Das {{domxref("Element")}}, das das Dokument scrollt, üblicherweise das Wurzelelement (außer es ist nicht im Standardmodus).

## Beispiele

```js
const scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
