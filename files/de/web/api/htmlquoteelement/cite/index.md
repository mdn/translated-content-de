---
title: "HTMLQuoteElement: cite-Eigenschaft"
short-title: cite
slug: Web/API/HTMLQuoteElement/cite
l10n:
  sourceCommit: 4dd8392c92824cf3258715256514599aaf21c04b
---

{{ApiRef("HTML DOM")}}

Die **`cite`**-Eigenschaft der [`HTMLQuoteElement`](/de/docs/Web/API/HTMLQuoteElement)-Schnittstelle gibt die URL für die Quelle des Zitats an. Sie spiegelt das [`cite`](/de/docs/Web/HTML/Element/q#cite)-Attribut des {{HTMLElement("q")}}-Elements wider.

## Wert

Ein String, der eine URL repräsentiert.

## Beispiel

```js
const quote = document.querySelector("q");
console.log(`Original source: ${quote.cite}`); // the current value
quote.cite = "https://example.com/quotes"; // updates the value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLQuoteElement`](/de/docs/Web/API/HTMLQuoteElement)
- [`HTMLModElement.cite`](/de/docs/Web/API/HTMLModElement/cite)
