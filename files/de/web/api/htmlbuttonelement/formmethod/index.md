---
title: "HTMLButtonElement: formMethod-Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formMethod`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces ist die {{Glossary("HTTP", "HTTP")}}-Methode, die verwendet wird, um das {{HtmlElement("form")}} zu übermitteln, wenn das {{HTMLElement("button")}}-Element das Steuerelement ist, das das Formular einreicht. Sie spiegelt den Wert des [`formmethod`](/de/docs/Web/HTML/Element/button#formmethod)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method)-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces, wenn das Formular über den Button eingereicht wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie mit einem leeren oder ungültigen Wert gesetzt wird, ist der ungültige Standardwert `"get"`. Wenn sie überhaupt nicht gesetzt ist, ist der Wert der leere String (`""`).

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
- [Übermittlung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
