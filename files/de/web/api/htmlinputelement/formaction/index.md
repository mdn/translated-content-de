---
title: "HTMLInputElement: formAction-Eigenschaft"
short-title: formAction
slug: Web/API/HTMLInputElement/formAction
l10n:
  sourceCommit: 1c31c8e99de843940027ec4d17e128850ded7a71
---

{{APIRef("HTML DOM")}}

Die **`formAction`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist die URL des Programms, das auf dem Server ausgeführt wird, wenn das Formular, das dieses Steuerelement besitzt, eingereicht wird. Sie spiegelt den Wert des [`formaction`](/de/docs/Web/HTML/Element/input#formaction)-Attributs des `<input>`-Elements wider.

Diese Eigenschaft ist nur für die `<input>`-Elemente [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) gültig.

Ihr Wert überschreibt die [`action`](/de/docs/Web/API/HTMLFormElement/action)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über das Eingabefeld eingereicht wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein String. Die URL für die Formularübermittlung.

## Beispiele

```js
inputElement.formAction = "/cgi-bin/publish";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
- [`HTMLInputElement.formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
- [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
- [`HTMLInputElement.formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
