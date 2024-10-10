---
title: "HTMLButtonElement: formAction-Eigenschaft"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
l10n:
  sourceCommit: 1c31c8e99de843940027ec4d17e128850ded7a71
---

{{APIRef("HTML DOM")}}

Die **`formAction`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist die URL des Programms, das auf dem Server ausgeführt wird, wenn das Formular, das dieses Steuerungselement besitzt, übermittelt wird. Sie spiegelt den Wert des [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`action`](/de/docs/Web/API/HTMLFormElement/action)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über den Button übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein String. Die URL für die Formularübermittlung.

## Beispiele

```js
btnEl.formAction = "/cgi-bin/publish";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
- [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
