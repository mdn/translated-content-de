---
title: "HTMLButtonElement: formTarget-Eigenschaft"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
l10n:
  sourceCommit: cd99a5b2726aa6e788edf23f6d7f8c1d4023618f
---

{{APIRef("HTML DOM")}}

Die **`formTarget`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist der Tab, das Fenster oder das iframe, in dem die Antwort des übermittelten {{HtmlElement("form")}} angezeigt werden soll. Sie spiegelt den Wert des [`formtarget`](/de/docs/Web/HTML/Element/button#formtarget)-Attributs des {{HTMLElement("button")}}-Elements wider.

Der Wert überschreibt die [`target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über den Button gesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert die leere Zeichenfolge (`""`).

## Wert

Ein String.

## Beispiele

```js
btnEl.formTarget = "_self";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.formAction`](/de/docs/Web/API/HTMLButtonElement/formAction)
- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
- [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)
