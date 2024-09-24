---
title: "HTMLFormElement: requestSubmit()-Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die Methode **`requestSubmit()`** des {{domxref("HTMLFormElement")}} fordert an, dass das Formular unter Verwendung eines bestimmten Absende-Buttons übermittelt wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}

  - : Ein {{Glossary("submit button")}}, der Mitglied des Formulars ist.

    Wenn der `submitter` `form*` Attribute angibt, [überschreiben diese](/de/docs/Glossary/Submit_button#overriding_the_forms_behavior) das Absendeverhalten des Formulars (z.B. `formmethod="POST"`).

    Hat der `submitter` ein `name`-Attribut oder ist er ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`, werden seine Daten [in die Formularübermittlung einbezogen](/de/docs/Glossary/Submit_button#form_data_entries) (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter`-Parameter weglassen, wird das Formularelement selbst als submitter verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit button")}} ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der submitter muss entweder ein Nachkomme des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form) Attribut haben, das auf das Formular verweist.

## Verwendungshinweise

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir schon die {{domxref("HTMLFormElement.submit", "submit()")}}-Methode seit jeher haben?

Die Antwort ist einfach. `submit()` übermittelt das Formular, aber das ist auch alles. `requestSubmit()` dagegen wirkt so, als ob ein Absende-Button geklickt wurde. Der Inhalt des Formulars wird validiert, und das Formular wird nur gesendet, wenn die Validierung erfolgreich ist. Sobald das Formular gesendet wurde, wird das {{domxref("HTMLFormElement.submit_event", "submit")}}-Ereignis an das Formularobjekt zurückgesendet.

## Beispiele

Im untenstehenden Beispiel wird das Formular durch den Versuch gesendet, die Anforderung mit `requestSubmit()` zu senden, wenn es verfügbar ist. Wenn ein Absende-Button mit der ID `main-submit` gefunden wird, wird dieser verwendet, um das Formular zu senden. Ansonsten wird das Formular ohne `submitter`-Parameter gesendet, so dass es direkt vom Formular selbst gesendet wird.

Wenn andererseits `requestSubmit()` nicht verfügbar ist, wird in diesem Code auf die {{domxref("HTMLFormElement.submit", "submit()")}}-Methode des Formulars zurückgefallen.

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
