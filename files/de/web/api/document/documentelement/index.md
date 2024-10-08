---
title: "Document: documentElement-Eigenschaft"
short-title: documentElement
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: 376da6eeed886361367923824132ccfc5ac1177d
---

{{ApiRef("DOM")}}

Die **`documentElement`** schreibgeschützte Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist (zum Beispiel das {{HTMLElement("html")}}-Element für HTML-Dokumente).

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt.

## Beispiele

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier is a NodeList of the direct children of the root element
// such as <head> and <body>

for (const child of firstTier) {
  // do something with each direct child of the root element
}
```

## Anmerkungen

Für jedes nicht-leere HTML-Dokument wird `documentElement` immer ein {{HTMLElement("html")}}-Element sein. Für jedes nicht-leere XML-Dokument ist `documentElement` immer das Element, das das Wurzelelement des Dokuments ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
