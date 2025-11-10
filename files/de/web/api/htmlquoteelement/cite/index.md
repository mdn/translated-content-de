---
title: "HTMLQuoteElement: cite-Eigenschaft"
short-title: cite
slug: Web/API/HTMLQuoteElement/cite
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`cite`**-Eigenschaft des [`HTMLQuoteElement`](/de/docs/Web/API/HTMLQuoteElement)-Interfaces gibt die URL für die Quelle des Zitats an. Sie spiegelt das [`cite`](/de/docs/Web/HTML/Reference/Elements/q#cite)-Attribut des {{HTMLElement("q")}}-Elements wider.

## Wert

Ein String, der eine URL darstellt.

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
