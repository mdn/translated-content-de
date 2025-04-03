---
title: "HTMLFormElement: requestSubmit() Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}

Die Methode **`requestSubmit()`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) fordert an, dass das Formular mithilfe eines bestimmten Absende-Buttons übermittelt wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}

  - : Ein {{Glossary("submit_button", "Absende-Button")}}, der Mitglied des Formulars ist.

    Wenn der `submitter` `form*` Attribute spezifiziert, {{Glossary("Submit_button#overriding_the_forms_behavior", "werden sie das Verhalten des Formulars ersetzen")}} (z.B. `formmethod="POST"`).

    Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "in die Formularübermittlung einbezogen")}} (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter` Parameter weglassen, wird das Formularelement selbst als submitter verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Absende-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der submitter muss entweder ein Nachfahre des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form) Attribut haben, das auf das Formular verweist.

## Hinweise zur Verwendung

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir bereits die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode seit Anbeginn der Zeit haben?

Die Antwort ist einfach. `submit()` übermittelt das Formular, aber das ist alles, was es tut. `requestSubmit()` hingegen handelt so, als ob ein Absende-Button geklickt worden wäre. Der Inhalt des Formulars wird validiert und das Formular nur übermittelt, wenn die Validierung erfolgreich ist. Nachdem das Formular übermittelt wurde, wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis an das Formularobjekt zurückgesendet.

## Beispiele

Im untenstehenden Beispiel wird das Formular durch den Versuch, die Anfrage mit `requestSubmit()` zu senden, übermittelt, falls dies verfügbar ist. Wenn ein Absende-Button mit der ID `main-submit` gefunden wird, wird dieser verwendet, um das Formular abzusenden. Andernfalls wird das Formular ohne `submitter` Parameter übermittelt, sodass es direkt vom Formular selbst übermittelt wird.

Wenn `requestSubmit()` hingegen nicht verfügbar ist, fällt dieser Code darauf zurück, die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode des Formulars aufzurufen.

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
