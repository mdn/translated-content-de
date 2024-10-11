---
title: "HTMLFormElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
l10n:
  sourceCommit: 4c81451d326b3bea82a02d912b9320273ad8572d
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interfaces gibt an, ob die Werte der Formularsteuerungen vom Browser automatisch vervollständigt werden können. Sie spiegelt das [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut des {{htmlelement("form")}}-Elements wider.

## Wert

Ein String; der Wert `"off"`, wenn er explizit auf `"off"` gesetzt wurde, ansonsten immer `"on"`.

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
- HTML [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attribut
- ARIA [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut
- [Autovervollständigung ausschalten](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
