---
title: "Document: scrollingElement Eigenschaft"
short-title: scrollingElement
slug: Web/API/Document/scrollingElement
l10n:
  sourceCommit: b404c3f8442ae2f9095d106219b5b74d6ae91446
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`scrollingElement`** des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt. Im Standardmodus ist dies das Wurzelelement des Dokuments, [`document.documentElement`](/de/docs/Web/API/Document/documentElement).

Im Quirksmodus gibt das `scrollingElement`-Attribut das HTML `body`-Element zurück, wenn es existiert und _nicht_ [potenziell scrollbar](https://drafts.csswg.org/cssom-view/#potentially-scrollable) ist, andernfalls gibt es `null` zurück. Dies mag überraschend erscheinen, entspricht jedoch sowohl der Spezifikation als auch den Browsern.

## Wert

Das [`Element`](/de/docs/Web/API/Element), das das Dokument scrollt, in der Regel das Wurzelelement (es sei denn, es wird nicht im Standardmodus ausgeführt).

## Beispiele

```js
const scrollElm = document.scrollingElement;
scrollElm.scrollTop = 0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
