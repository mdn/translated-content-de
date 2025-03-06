---
title: "HTMLInputElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLInputElement/autocomplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt an, ob der Wert des Steuerelements automatisch vom Browser vervollständigt werden kann. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut des {{htmlelement("input")}}-Elements wider.

## Wert

Ein Zeichenfolgenwert; der Wert des `autocomplete`-Attributs (`"on"`, `"off"`, eine [`<token-list>`](/de/docs/Web/HTML/Attributes/autocomplete#token_list_tokens)), oder die leere Zeichenfolge `""`, wenn nicht angegeben.

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
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Deaktivierung der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
