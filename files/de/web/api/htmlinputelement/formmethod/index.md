---
title: "HTMLInputElement: formMethod-Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
l10n:
  sourceCommit: 8bbefa76803785b6e0e1d278679c38b092e6b234
---

{{APIRef("HTML DOM")}}

Die **`formMethod`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist die {{Glossary("HTTP", "HTTP")}}-Methode, die zum Absenden des {{HtmlElement("form")}} verwendet wird, wenn das {{HTMLElement("input")}}-Element die Steuerung ist, die das Formular absendet. Sie spiegelt den Wert des `formmethod`-Attributs des `<input>`-Elements wider.

Diese Eigenschaft ist nur gültig für [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) `<input>`-Elemente.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das `input` abgesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wird sie mit einem leeren oder ungültigen Wert gesetzt, ist der ungültige Standardwert `"get"`. Wenn sie überhaupt nicht gesetzt ist, ist der Wert der leere String (`""`).

## Wert

Ein String; `"post"`, `"get"`, `"dialog"` oder `""`.

## Beispiele

```js
inputElement.formMethod = "post";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
- [`HTMLInputElement.formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
- [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
- [`HTMLInputElement.formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
- [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Element/input/image)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
