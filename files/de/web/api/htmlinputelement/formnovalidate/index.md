---
title: "HTMLInputElement: formNoValidate Eigenschaft"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formNoValidate`** Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces ist ein boolescher Wert, der anzeigt, ob das {{htmlelement("form")}} die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) umgeht, wenn es über das {{htmlelement("input")}} abgesendet wird. Sie spiegelt das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) Attribut des `<input>` Elements wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit) und [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) `<input>` Elemente gültig.

Ihr Wert überschreibt die [`noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate) Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Interfaces, wenn das Formular über das Input abgesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

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
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)
- {{HTMLElement("form")}}
- [`HTMLFormElement.noValidate`](/de/docs/Web/API/HTMLFormElement/noValidate)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
