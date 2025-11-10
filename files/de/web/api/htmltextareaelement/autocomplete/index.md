---
title: "HTMLTextAreaElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstellenobjekts gibt an, ob der Wert des Steuerelements automatisch vom Browser vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete)-Attribut des `<textarea>`-Elements wider.

## Wert

Ein String, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"` oder eine [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens)) oder der leere String (`""`), falls nicht angegeben.

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
- HTML [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut
- ARIA [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut
- [Deaktivieren der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
