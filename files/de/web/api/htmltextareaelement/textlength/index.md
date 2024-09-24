---
title: "HTMLTextAreaElement: textLength-Eigenschaft"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`textLength`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle ist eine nicht-negative Ganzzahl, die die Anzahl der Zeichen in UTF-16-Codeeinheiten des Wertes des {{htmlelement("textarea")}}-Elements darstellt. Es ist eine Abkürzung für den Zugriff auf {{jsxref("String/length", "length")}} der {{domxref("HTMLTextAreaElement/value", "value")}}-Eigenschaft.

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
- {{DOMXref("HTMLTextAreaElement.rows")}}
- {{DOMXref("HTMLTextAreaElement.cols")}}
- {{DOMXref("HTMLTextAreaElement.minLength")}}
- {{DOMXref("HTMLTextAreaElement.maxLength")}}
