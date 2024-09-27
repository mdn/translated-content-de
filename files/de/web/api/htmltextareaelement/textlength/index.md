---
title: "HTMLTextAreaElement: textLength Eigenschaft"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`textLength`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle ist eine nicht-negative Ganzzahl, die die Anzahl der Zeichen in UTF-16-Codeeinheiten des Wertes des {{htmlelement("textarea")}}-Elements darstellt. Es ist eine Abkürzung für den Zugriff auf die {{jsxref("String/length", "length")}}-Eigenschaft ihres [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) Attributs.

## Wert

Eine nicht-negative Ganzzahl.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.textLength);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement.rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
- [`HTMLTextAreaElement.cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
- [`HTMLTextAreaElement.minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
- [`HTMLTextAreaElement.maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
