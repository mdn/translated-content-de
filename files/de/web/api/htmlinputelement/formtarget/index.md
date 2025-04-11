---
title: "HTMLInputElement: formTarget-Eigenschaft"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formTarget`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist der Tab, das Fenster oder das iframe, in dem die Antwort des eingereichten {{HtmlElement("form")}} angezeigt werden soll. Sie spiegelt den Wert des [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attributs des {{HTMLElement("input")}}-Elements wider.

Diese Eigenschaft ist nur gültig für [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit) und [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) `<input>`-Elemente.

Ihr Wert überschreibt die [`target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über das Input-Element eingereicht wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

## Wert

Ein String.

## Beispiele

```js
inputElement.formTarget = "_blank";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
- [`HTMLInputElement.formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
- [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
- [`HTMLInputElement.formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
