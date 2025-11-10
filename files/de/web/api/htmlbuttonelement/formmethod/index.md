---
title: "HTMLButtonElement: formMethod Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formMethod`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist die {{Glossary("HTTP", "HTTP")}}-Methode, die verwendet wird, um das {{HtmlElement("form")}} zu übermitteln, falls das {{HTMLElement("button")}}-Element das Steuerelement ist, das das Formular übermittelt. Sie spiegelt den Wert des [`formmethod`](/de/docs/Web/HTML/Reference/Elements/button#formmethod)-Attributs des `<button>`-Elements wider.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über den Button übermittelt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie mit einem leeren oder ungültigen Wert gesetzt wird, ist der ungültige Standardwert `"get"`. Wenn sie überhaupt nicht gesetzt ist, ist der Wert die leere Zeichenkette (`""`).

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
- [Versenden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
