---
title: "HTMLTextAreaElement: defaultValue-Eigenschaft"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`defaultValue`**-Eigenschaft des {{DOMxRef("HTMLTextAreaElement")}}-Interfaces repräsentiert den Standardtextinhalt dieses Textbereichs. Das Abrufen und Festlegen dieses Wertes entspricht dem Abrufen und Festlegen von {{domxref("Node.textContent", "textContent")}} auf dem {{htmlelement("textarea")}}.

## Wert

Ein String.

## Beispiele

Im folgenden Beispiel gibt `defaultValue` weiterhin den ursprünglich im HTML geschriebenen Wert zurück. Wenn ein Standardwert festgelegt wird, entweder über HTML oder die `defaultValue`-Eigenschaft, aktualisiert die Benutzereingabe den `value`, überschreibt jedoch nicht den `defaultValue`.

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.defaultValue);
textArea.defaultValue = "This is the default text now!";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.value")}}
