---
title: "HTMLTextAreaElement: autocomplete Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt an, ob der Wert des Steuerelements vom Browser automatisch vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des `<textarea>`-Elements wider.

## Wert

Ein String, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"` oder eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) oder der leere String (`""`), wenn nicht angegeben.

## Beispiele

```js
const textareaElement = document.getElementById("comment");
console.log(textArea.autocomplete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [Deaktivierung der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
