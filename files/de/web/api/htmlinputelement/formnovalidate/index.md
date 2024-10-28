---
title: "HTMLInputElement: formNoValidate-Eigenschaft"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
l10n:
  sourceCommit: d7ac54d009f0c200d612dee1d1f2a1c633791706
---

{{APIRef("HTML DOM")}}

Die **`formNoValidate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist ein boolescher Wert, der angibt, ob das {{htmlelement("form")}} die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) umgeht, wenn es über das {{htmlelement("input")}} eingereicht wird. Sie spiegelt das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des `<input>`-Elements wider.

Diese Eigenschaft ist nur gültig für [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) `<input>`-Elemente.

Ihr Wert überschreibt die [`noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Eingabefeld eingereicht wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

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
- [Erfahren Sie mehr: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation)
