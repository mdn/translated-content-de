---
title: "HTMLTextAreaElement: Eigenschaft 'required'"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft des {{DOMxRef("HTMLTextAreaElement")}}-Interfaces gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular übermittelt werden kann. Sie spiegelt das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des {{htmlelement("textarea")}}-Elements wider.

## Wert

Ein booleanischer Wert.

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
- {{DOMXref("HTMLTextAreaElement.validity")}}
- {{cssxref(":required")}} Pseudo-Klasse
