---
title: "HTMLButtonElement: formMethod-Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
l10n:
  sourceCommit: 8bbefa76803785b6e0e1d278679c38b092e6b234
---

{{APIRef("HTML DOM")}}

Die **`formMethod`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist die {{Glossary("HTTP", "HTTP")}}-Methode, die verwendet wird, um das {{HtmlElement("form")}} zu übermitteln, wenn das {{HTMLElement("button")}}-Element das Steuerelement ist, das das Formular übermittelt. Sie spiegelt den Wert des [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Button übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn mit einem leeren oder ungültigen Wert gesetzt, ist der ungültige Standardwert `"get"`. Wenn überhaupt nicht gesetzt, ist der Wert der leere String (`""`).

## Wert

Ein String; `"post"`, `"get"`, `"dialog"` oder `""`.

## Beispiele

```js
btnEl.formMethod = "post";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
