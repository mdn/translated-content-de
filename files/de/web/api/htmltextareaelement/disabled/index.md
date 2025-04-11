---
title: "HTMLTextAreaElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLTextAreaElement/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt an, ob dieses mehrzeilige Texteingabefeld deaktiviert ist und nicht interagiert werden kann. Sie spiegelt das [`disabled`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete)-Attribut des {{htmlelement("textarea")}}-Elements wider. Wenn `false`, kann dieses `textarea` dennoch deaktiviert sein, wenn das umgebende Element, wie ein {{htmlelement("fieldset")}}, deaktiviert ist.

## Wert

Ein boolean.

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
