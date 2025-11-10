---
title: "HTMLButtonElement: formAction-Eigenschaft"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formAction`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interface ist die URL des Programms, das auf dem Server ausgeführt wird, wenn das Formular, das dieses Steuerelement beinhaltet, übermittelt wird. Sie gibt den Wert des [`formaction`](/de/docs/Web/HTML/Reference/Elements/button#formaction)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`action`](/de/docs/Web/API/HTMLFormElement/action)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Button gesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

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
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
