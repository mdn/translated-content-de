---
title: "HTMLButtonElement: Eigenschaft formAction"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formAction`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist die URL des Programms, das auf dem Server ausgeführt wird, wenn das Formular, das dieses Steuerelement enthält, gesendet wird. Sie spiegelt den Wert des [`formaction`](/de/docs/Web/HTML/Element/button#formaction)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`action`](/de/docs/Web/API/HTMLFormElement/action)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Button abgesendet wird. Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein String. Die URL für das Absenden des Formulars.

## Beispiele

```js
btnEl.formAction = "/cgi-bin/publish";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.formEnctype`](/de/docs/Web/API/HTMLButtonElement/formEnctype)
- [`HTMLButtonElement.formMethod`](/de/docs/Web/API/HTMLButtonElement/formMethod)
- [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)
- [`HTMLButtonElement.formTarget`](/de/docs/Web/API/HTMLButtonElement/formTarget)
- [Absenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
