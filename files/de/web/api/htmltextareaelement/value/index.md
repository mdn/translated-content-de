---
title: "HTMLTextAreaElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLTextAreaElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces repräsentiert den Wert des {{htmlelement("textarea")}}-Elements als Zeichenfolge, die eine leere Zeichenfolge ist, wenn das Widget keinen Inhalt enthält. Sie gibt den rohen Wert zurück, der in der Steuerung enthalten ist, oder setzt diesen.

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
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`HTMLTextAreaElement.labels`](/de/docs/Web/API/HTMLTextAreaElement/labels)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
