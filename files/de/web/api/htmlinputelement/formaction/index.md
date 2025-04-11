---
title: "HTMLInputElement: formAction-Eigenschaft"
short-title: formAction
slug: Web/API/HTMLInputElement/formAction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formAction`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist die URL des Programms, das auf dem Server ausgeführt wird, wenn das Formular, das dieses Steuerelement besitzt, abgeschickt wird. Sie spiegelt den Wert des [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attributs des `<input>`-Elements wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und [`image`](/de/docs/Web/HTML/Reference/Elements/input/image)-`<input>`-Elemente gültig.

Ihr Wert überschreibt die [`action`](/de/docs/Web/API/HTMLFormElement/action)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Eingabeelement abgeschickt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein String. Die URL für das Abschicken des Formulars.

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
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
