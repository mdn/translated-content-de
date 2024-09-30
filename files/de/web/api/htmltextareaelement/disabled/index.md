---
title: "HTMLTextAreaElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: 30d0a926fffe7bcf586def53959c12a5e526fa26
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt an, ob dieses mehrzeilige Texteingabefeld deaktiviert ist und nicht interagiert werden kann. Sie spiegelt das [`disabled`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des {{htmlelement("textarea")}}-Elements wider. Ist `false`, kann dieses `textarea` dennoch deaktiviert sein, wenn das umgebende Element, wie zum Beispiel ein {{htmlelement("fieldset")}}, deaktiviert ist.

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
- [`HTMLTextAreaElement.readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
