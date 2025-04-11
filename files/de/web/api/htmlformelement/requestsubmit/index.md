---
title: "HTMLFormElement: requestSubmit() Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die Methode **`requestSubmit()`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) fordert an, dass das Formular mit einem bestimmten Absende-Button eingereicht wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}

  - : Ein {{Glossary("submit_button", "Absende-Button")}}, der Mitglied des Formulars ist.

    Wenn der `submitter` `form*` Attribute angibt, {{Glossary("Submit_button#overriding_the_forms_behavior", "werden diese die")}} Übermittlungsverhalten des Formulars überschreiben (z.B. `formmethod="POST"`).

    Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "im Formularversand enthalten sein")}} (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter`-Parameter weglassen, wird das Formularelement selbst als `submitter` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Absende-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der `submitter` muss entweder ein Nachkomme des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form) Attribut haben, das auf das Formular verweist.

## Verwendungshinweise

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir die
[`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode schon seit jeher haben?

Die Antwort ist einfach. `submit()` reicht das Formular ein, aber das ist alles, was es tut. `requestSubmit()` hingegen verhält sich, als ob ein Absende-Button geklickt würde. Der Inhalt des Formulars wird validiert und das Formular wird nur übermittelt, wenn die Validierung erfolgreich ist. Sobald das Formular eingereicht wurde, wird das
[`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis an das Formularobjekt zurückgesendet.

## Beispiele

Im Beispiel unten wird versucht, das Formular mithilfe von `requestSubmit()` einzureichen, falls es verfügbar ist. Wenn ein Absende-Button mit der ID `main-submit` gefunden wird, wird dieser verwendet, um das Formular einzureichen. Andernfalls wird das Formular ohne `submitter`-Parameter übermittelt, sodass es direkt vom Formular selbst eingereicht wird.

Falls `requestSubmit()` hingegen nicht verfügbar ist, weicht dieser Code auf den Aufruf der [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) Methode des Formulars zurück.

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
