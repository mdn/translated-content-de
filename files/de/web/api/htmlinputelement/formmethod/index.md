---
title: "HTMLInputElement: formMethod Eigenschaft"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`formMethod`** Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist die {{Glossary("HTTP", "HTTP")}} Methode, die verwendet wird, um das {{HtmlElement("form")}} zu senden, falls das {{HTMLElement("input")}} Element das Kontrollelement ist, das das Formular abschickt. Sie spiegelt den Wert des [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod) Attributs des `<input>` Elements wider.

Diese Eigenschaft ist nur für [`submit`](/de/docs/Web/HTML/Element/input/submit) und [`image`](/de/docs/Web/HTML/Element/input/image) `<input>` Elemente gültig.

Der Wert überschreibt die [`method`](/de/docs/Web/API/HTMLFormElement/method) Eigenschaft der [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) Schnittstelle, wenn das Formular über das Input-Element abgeschickt wird. Diese Eigenschaft kann abgerufen oder gesetzt werden. Wenn sie mit einem leeren oder ungültigen Wert gesetzt wird, ist der ungültige Standardwert `"get"`. Wenn sie überhaupt nicht gesetzt wird, ist der Wert der leere String (`""`).

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
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
