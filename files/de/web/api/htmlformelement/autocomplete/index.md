---
title: "HTMLFormElement: autocomplete-Eigenschaft"
short-title: autocomplete
slug: Web/API/HTMLFormElement/autocomplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{ APIRef("HTML DOM") }}

Die **`autocomplete`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces gibt an, ob die Werte der Formularsteuerelemente automatisch vom Browser ausgefüllt werden können. Sie entspricht dem [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attribut des {{htmlelement("form")}}-Elements.

## Wert

Ein String; der Wert `"off"`, wenn explizit auf `"off"` gesetzt, und sonst immer `"on"`.

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
- HTML-Attribut [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)
- ARIA-Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [Deaktivieren der Autovervollständigung](/de/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion)
