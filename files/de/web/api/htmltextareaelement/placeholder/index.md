---
title: "HTMLTextAreaElement: Eigenschaft placeholder"
short-title: placeholder
slug: Web/API/HTMLTextAreaElement/placeholder
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`placeholder`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle stellt einen Hinweis für den Benutzer dar, was in das Steuerelement eingegeben werden kann. Sie spiegelt das [`placeholder`](/de/docs/Web/HTML/Element/textarea#placeholder)-Attribut des {{htmlelement("textarea")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.placeholder);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}
