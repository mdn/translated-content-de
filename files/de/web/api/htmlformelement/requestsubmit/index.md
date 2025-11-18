---
title: "HTMLFormElement: requestSubmit() Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die Methode **`requestSubmit()`** von [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) fordert an, dass das Formular unter Verwendung eines bestimmten Absende-Buttons gesendet wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}
  - : Ein {{Glossary("submit_button", "Absende-Button")}}, der ein Mitglied des Formulars ist.

    Wenn der `submitter` `form*` Attribute spezifiziert, {{Glossary("Submit_button#overriding_the_forms_behavior", "werden diese das Absendeverhalten des Formulars überschreiben")}} (z.B. `formmethod="POST"`).

    Wenn der `submitter` ein `name` Attribut besitzt oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "in die Formularübermittlung einbezogen")}} (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter` Parameter weglassen, wird das Formularelement selbst als Submitter verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Absende-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der Submitter muss entweder ein Nachfahre des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) Attribut besitzen, das auf das Formular verweist.

## Anwendungshinweise

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir doch die
[`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode seit Anbeginn der Zeit haben?

Die Antwort ist einfach. `submit()` sendet das Formular, aber das ist alles, was es tut. `requestSubmit()` hingegen verhält sich so, als ob ein Absende-Button geklickt wurde. Der Inhalt des Formulars wird validiert, und das Formular wird nur gesendet, wenn die Validierung erfolgreich ist. Sobald das Formular gesendet wurde, wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis an das Formularobjekt zurückgesendet.

## Beispiele

Im untenstehenden Beispiel wird das Formular versucht zu senden, indem `requestSubmit()` verwendet wird, wenn dies verfügbar ist. Wird ein Absende-Button mit der ID `main-submit` gefunden, wird dieser zum Senden des Formulars verwendet. Andernfalls wird das Formular ohne `submitter` Parameter gesendet, sodass es direkt vom Formular selbst gesendet wird.

Falls `requestSubmit()` nicht verfügbar ist, fällt dieser Code zurück auf das Aufrufen der [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode des Formulars.

```js
let myForm = document.querySelector("form");
let submitButton = myForm.querySelector("#main-submit");

if (myForm.requestSubmit) {
  if (submitButton) {
    myForm.requestSubmit(submitButton);
  } else {
    myForm.requestSubmit();
  }
} else {
  myForm.submit();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
