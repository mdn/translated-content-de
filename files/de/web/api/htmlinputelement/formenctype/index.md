---
title: "HTMLInputElement: formEnctype-Eigenschaft"
short-title: formEnctype
slug: Web/API/HTMLInputElement/formEnctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formEnctype`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces beschreibt den {{Glossary("MIME_type", "MIME-Typ")}} der Inhalte, die an den Server gesendet werden, wenn das `<input>` mit `formEnctype` die Methode der Formularübermittlung ist. Sie spiegelt den Wert des [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attributs des `<input>` wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit) und [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) `<input>`-Elemente gültig.

Ihr Wert überschreibt die [`enctype`](/de/docs/Web/API/HTMLFormElement/enctype)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Input-Element übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

## Wert

Ein String.

## Beispiele

```js
inputElement.formEnctype = "application/x-www-form-urlencoded";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
- [`HTMLInputElement.formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
- [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
- [`HTMLInputElement.formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
- [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
