---
title: "HTMLModElement: cite-Eigenschaft"
short-title: cite
slug: Web/API/HTMLModElement/cite
l10n:
  sourceCommit: 4dd8392c92824cf3258715256514599aaf21c04b
---

{{ApiRef("HTML DOM")}}

Die **`cite`**-Eigenschaft des [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)-Interfaces gibt die URL der Ressource an, die die Änderung erklärt. Sie spiegelt das `cite`-Attribut des {{HTMLElement("del")}}-Elements und {{HTMLElement("ins")}}-Elemente wider.

## Wert

Ein String, der eine URL darstellt.

## Beispiel

```js
const mod = document.querySelector("edit");
console.log(`Explanation: ${mod.cite}`); // the current value
mod.cite = "https://example.com/edits"; // updates the element's cite
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLModElement.dateTime`](/de/docs/Web/API/HTMLModElement/dateTime)
- [`HTMLQuoteElement.cite`](/de/docs/Web/API/HTMLQuoteElement/cite)
