---
title: "HTMLButtonElement: formEnctype-Eigenschaft"
short-title: formEnctype
slug: Web/API/HTMLButtonElement/formEnctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formEnctype`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist der {{Glossary("MIME_type", "MIME-Typ")}} des Inhalts, der beim Absenden des Formulars an den Server gesendet wird. Sie spiegelt den Wert des [`formenctype`](/de/docs/Web/HTML/Reference/Elements/button#formenctype)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`enctype`](/de/docs/Web/API/HTMLFormElement/enctype)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Submit-Button abgesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

## Wert

Ein String.

## Beispiele

```js
btnEl.formEnctype = "application/x-www-form-urlencoded";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
- [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
