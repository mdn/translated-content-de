---
title: "HTMLButtonElement: formTarget-Eigenschaft"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`formTarget`**-Eigenschaft der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Schnittstelle ist der Tab, das Fenster oder das iframe, in dem die Antwort des abgeschickten {{HtmlElement("form")}} angezeigt wird. Sie spiegelt den Wert des [`formtarget`](/de/docs/Web/HTML/Reference/Elements/button#formtarget)-Attributes des {{HTMLElement("button")}}-Elements wider.

Der Wert überschreibt die [`target`](/de/docs/Web/API/HTMLFormElement/target)-Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Schnittstelle, wenn das Formular über den Button abgeschickt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie nicht gesetzt ist, ist der Wert der leere String (`""`).

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
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
