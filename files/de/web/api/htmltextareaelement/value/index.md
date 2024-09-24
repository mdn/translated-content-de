---
title: "HTMLTextAreaElement: Eigenschaft value"
short-title: value
slug: Web/API/HTMLTextAreaElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle stellt den Wert des {{htmlelement("textarea")}}-Elements als Zeichenfolge dar, die einen leeren String enthält, wenn das Widget keinen Inhalt enthält. Sie gibt den rohen Wert zurück, der im Steuerelement enthalten ist, oder setzt ihn.

## Wert

Eine Zeichenfolge, die den Inhalt des {{htmlelement("textarea")}}-Elements enthält.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
const oldText = textArea.value;
textArea.value = oldText.toUpperCase();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.textLength")}}
- {{DOMXref("HTMLTextAreaElement.labels")}}
- {{DOMXref("HTMLTextAreaElement.selectionStart")}}
- {{DOMXref("HTMLTextAreaElement.selectionEnd")}}
