---
title: "HTMLTextAreaElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLTextAreaElement/autocomplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle gibt an, ob der Wert des Steuerungselements automatisch vom Browser vervollständigt werden kann. Sie spiegelt das `autocomplete`-Attribut des `<textarea>`-Elements wider.

## Wert

Ein String, der den Wert des `autocomplete`-Attributs darstellt (`"on"`, `"off"`, oder eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)) oder der leere String (`""`), wenn nicht spezifiziert.

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
- HTML-`autocomplete`-Attribut
- ARIA-`aria-autocomplete`-Attribut
- [Deaktivierung von Autovervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
