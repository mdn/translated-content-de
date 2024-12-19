---
title: "HTMLInputElement: formEnctype-Eigenschaft"
short-title: formEnctype
slug: Web/API/HTMLInputElement/formEnctype
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formEnctype`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist der {{Glossary("MIME_type", "MIME-Typ")}} des Inhalts, der an den Server gesendet wird, wenn das `<input>` mit `formEnctype` die Methode zur Formularübermittlung ist. Sie spiegelt den Wert des [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attributs des `<input>` wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Element/input/submit)- und [`image`](/de/docs/Web/HTML/Element/input/image)-`<input>`-Elemente gültig.

Ihr Wert überschreibt die [`enctype`](/de/docs/Web/API/HTMLFormElement/enctype)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Input-Element übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert die leere Zeichenkette (`""`).

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
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
