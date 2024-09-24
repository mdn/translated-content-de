---
title: "HTMLTextAreaElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der {{DOMxRef("HTMLTextAreaElement")}}-Schnittstelle gibt an, ob dieses mehrzeilige Texteingabe-Steuerelement deaktiviert ist und nicht interagiert werden kann. Sie spiegelt das `disabled`-Attribut des {{htmlelement("textarea")}}-Elements wider. Wenn der Wert `false` ist, kann dieses `textarea` dennoch deaktiviert sein, wenn das enthaltende Element, wie ein {{htmlelement("fieldset")}}, deaktiviert ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
if (commentsDisabled) {
  textareaElement.disabled = true;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{DOMXref("HTMLTextAreaElement.readOnly")}}
