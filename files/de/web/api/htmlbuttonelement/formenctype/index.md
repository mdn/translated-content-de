---
title: "HTMLButtonElement: formEnctype-Eigenschaft"
short-title: formEnctype
slug: Web/API/HTMLButtonElement/formEnctype
l10n:
  sourceCommit: b44ac907c042c0c1de23092412a80701e1ade87d
---

{{APIRef("HTML DOM")}}

Die **`formEnctype`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist der {{Glossary("MIME_type", "MIME-Typ")}} des Inhalts, der an den Server gesendet wird, wenn das Formular abgeschickt wird. Sie spiegelt den Wert des [`formenctype`](/de/docs/Web/HTML/Element/button#formenctype)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`enctype`](/de/docs/Web/API/HTMLFormElement/enctype)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Absende-Knopf abgeschickt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Falls nicht gesetzt, ist der Wert ein leerer String (`""`).

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
- [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
