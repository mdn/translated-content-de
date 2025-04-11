---
title: "HTMLInputElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces zeigt an, ob der Wert des Steuerelements vom Browser automatisch vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein String; der Wert des `autocomplete`-Attributs (`"on"`, `"off"`, eine [`<token-list>`](/de/docs/Web/HTML/Reference/Attributes/autocomplete#token_list_tokens)), oder der leere String `""`, wenn nicht angegeben.

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
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Deaktivierung der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
