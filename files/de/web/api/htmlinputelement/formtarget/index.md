---
title: "HTMLInputElement: formTarget-Eigenschaft"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
l10n:
  sourceCommit: cd99a5b2726aa6e788edf23f6d7f8c1d4023618f
---

{{APIRef("HTML DOM")}}

Die **`formTarget`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist das Tab, das Fenster oder das iframe, in dem die Antwort des übermittelten {{HtmlElement("form")}} angezeigt werden soll. Sie spiegelt den Wert des [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget)-Attributs des {{HTMLElement("input")}}-Elements wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) `<input>` Elemente gültig.

Ihr Wert überschreibt die [`target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Eingabeelement übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

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
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)
- [Versenden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
