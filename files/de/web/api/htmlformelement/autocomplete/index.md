---
title: "HTMLFormElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt an, ob die Werte der Formularsteuerungen automatisch vom Browser vervollständigt werden können. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut des {{htmlelement("form")}}-Elements wider.

## Wert

Ein String; der Wert `"off"`, wenn er explizit auf `"off"` gesetzt wurde, und sonst immer `"on"`.

## Beispiele

```js
const formElement = document.getElementById("name");
console.log(formElement.autocomplete);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("form")}}
- HTML [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attribut
- ARIA [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut
- [Deaktivieren der automatischen Vervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
