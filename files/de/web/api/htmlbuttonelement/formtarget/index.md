---
title: "HTMLButtonElement: formTarget-Eigenschaft"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formTarget`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist das Register, das Fenster oder das iframe, in dem die Antwort des übermittelten {{HtmlElement("form")}} angezeigt werden soll. Sie entspricht dem Wert des `formtarget`-Attributs des {{HTMLElement("button")}}-Elements.

Der Wert überschreibt die [`target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über den Button abgesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

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
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
