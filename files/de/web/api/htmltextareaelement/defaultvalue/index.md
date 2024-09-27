---
title: "HTMLTextAreaElement: Eigenschaft defaultValue"
short-title: defaultValue
slug: Web/API/HTMLTextAreaElement/defaultValue
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`defaultValue`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle repräsentiert den standardmäßigen Textinhalt dieses Textbereichs. Das Abrufen und Setzen dieses Wertes ist gleichbedeutend mit dem Abrufen und Setzen von [`textContent`](/de/docs/Web/API/Node/textContent) auf dem {{htmlelement("textarea")}}.

## Wert

Ein String.

## Beispiele

Im untenstehenden Beispiel gibt `defaultValue` weiterhin den ursprünglich im HTML geschriebenen Wert zurück. Wenn ein Standardwert entweder über HTML oder die `defaultValue`-Eigenschaft festgelegt wird, aktualisiert eine Benutzereingabe den `value`, überschreibt jedoch nicht den `defaultValue`.

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
- [`HTMLTextAreaElement.value`](/de/docs/Web/API/HTMLTextAreaElement/value)
