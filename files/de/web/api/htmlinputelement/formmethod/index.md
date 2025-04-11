---
title: "HTMLInputElement: formMethod Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formMethod`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist die {{Glossary("HTTP", "HTTP")}}-Methode, die zum Absenden des {{HtmlElement("form")}} verwendet wird, wenn das {{HTMLElement("input")}}-Element das Steuerungselement ist, das das Formular absendet. Sie spiegelt den Wert des `formmethod`-Attributs des `<input>`-Elements wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit) und [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) `<input>`-Elemente gültig.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über das Input-Element abgesendet wird. Diese Eigenschaft kann abgerufen oder festgelegt werden. Wenn sie mit einem leeren oder ungültigen Wert gesetzt wird, ist der ungültige Standardwert `"get"`. Wenn sie überhaupt nicht gesetzt wird, ist der Wert der leere String (`""`).

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
- [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)
- [`<input type="image">`](/de/docs/Web/HTML/Reference/Elements/input/image)
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
