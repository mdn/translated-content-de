---
title: "HTMLInputElement: FormNoValidate-Eigenschaft"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formNoValidate`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist ein boolescher Wert, der angibt, ob das {{htmlelement("form")}} die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) umgeht, wenn es über das {{htmlelement("input")}} gesendet wird. Sie spiegelt das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des `<input>`-Elements wider.

Diese Eigenschaft ist nur für die `<input>`-Elemente [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) gültig.

Ihr Wert überschreibt die [`noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über das Eingabefeld gesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputElement = document.getElementById("myInput");
console.log(inputElement.formNoValidate);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
- [`HTMLInputElement.formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
- [`HTMLInputElement.formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
- [`HTMLInputElement.formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)
- {{HTMLElement("form")}}
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [Learn: Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
