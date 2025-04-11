---
title: "HTMLTextAreaElement: required-Eigenschaft"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`required`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt an, dass der Benutzer einen Wert eingeben muss, bevor ein Formular abgeschickt wird. Sie entspricht dem [`required`](/de/docs/Web/HTML/Reference/Elements/textarea#required)-Attribut des {{htmlelement("textarea")}}-Elements.

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
- {{cssxref(":required")}} Pseudo-Klasse
