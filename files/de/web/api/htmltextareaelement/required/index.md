---
title: "HTMLTextAreaElement: required Eigenschaft"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular gesendet wird. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des {{htmlelement("textarea")}}-Elements wider.

## Wert

Ein boolean.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.required);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement.validity`](/de/docs/Web/API/HTMLTextAreaElement/validity)
- {{cssxref(":required")}} Pseudoklasse
