---
title: "Dokument: documentElement Eigenschaft"
short-title: documentElement
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: 376da6eeed886361367923824132ccfc5ac1177d
---

{{ApiRef("DOM")}}

Die **`documentElement`** schreibgeschützte Eigenschaft der {{domxref("Document")}}-Schnittstelle gibt das {{domxref("Element")}} zurück, das das Wurzelelement des {{domxref("document")}} ist (zum Beispiel das {{HTMLElement("html")}}-Element für HTML-Dokumente).

## Wert

Ein {{domxref("Element")}}-Objekt.

## Beispiele

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier ist eine NodeList der direkten Kinder des Wurzelelements
// wie <head> und <body>

for (const child of firstTier) {
  // etwas mit jedem direkten Kind des Wurzelelements tun
}
```

## Hinweise

Für jedes nicht leere HTML-Dokument wird `documentElement` immer ein {{HTMLElement("html")}}-Element sein. Für jedes nicht leere XML-Dokument wird `documentElement` immer das Element sein, das das Wurzelelement des Dokuments ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
