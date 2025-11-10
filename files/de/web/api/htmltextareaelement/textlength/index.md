---
title: "HTMLTextAreaElement: textLength-Eigenschaft"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`textLength`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces ist eine nicht-negative ganze Zahl, die die Anzahl der Zeichen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} des Werts des {{htmlelement("textarea")}}-Elements darstellt. Sie ist eine Abkürzung für den Zugriff auf {{jsxref("String/length", "length")}} seiner [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)-Eigenschaft.

## Wert

Eine nicht-negative ganze Zahl.

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
