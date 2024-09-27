---
title: "HTMLInputElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, ob der Wert des Steuerelements vom Browser automatisch vervollständigt werden kann. Sie spiegelt das `autocomplete`-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein String; der Wert des `autocomplete`-Attributes (`"on"`, `"off"`, eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)), oder der leere String `""`, wenn nicht angegeben.

## Beispiele

```js
const inputElement = document.getElementById("name");
console.log(inputElement.autocomplete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- HTML [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut
- ARIA [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut
- [Deaktivierung der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
