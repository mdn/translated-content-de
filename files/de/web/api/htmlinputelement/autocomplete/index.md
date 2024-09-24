---
title: "HTMLInputElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: a24234ea6552cbd126d20fbf61e8f2bb010e1f20
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}} Schnittstelle zeigt an, ob der Wert des Steuerelements automatisch vom Browser vervollständigt werden kann. Sie spiegelt das `autocomplete`-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein String; der Wert des `autocomplete`-Attributs (`"on"`, `"off"`, eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)), oder der leere String `""`, wenn nicht angegeben.

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
- {{DOMxRef("HTMLInputElement.value")}}
- HTML-`autocomplete`-Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
- ARIA-`aria-autocomplete`-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [Deaktivierung der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
