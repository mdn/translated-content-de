---
title: "Dokument: documentElement-Eigenschaft"
short-title: documentElement
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ApiRef("DOM")}}

Die schreibgeschützte **`documentElement`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt das
[`Element`](/de/docs/Web/API/Element) zurück, das das Wurzelelement des [`Dokuments`](/de/docs/Web/API/Document) ist (zum Beispiel das {{HTMLElement("html")}}-Element für HTML-Dokumente).

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

Für jedes nicht leere HTML-Dokument wird `documentElement` immer ein
{{HTMLElement("html")}}-Element sein. Für jedes nicht leere XML-Dokument wird
`documentElement` immer das Element sein, das das Wurzelelement des
Dokuments ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
