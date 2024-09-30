---
title: "HTMLFormElement: requestSubmit()-Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Methode **`requestSubmit()`** fordert an, dass das Formular mit einem spezifischen Submit-Button abgeschickt wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}

  - : Ein [submit button](/de/docs/Glossary/submit_button), der ein Mitglied des Formulars ist.

    Wenn der `submitter` `form*`-Attribute angibt, [werden diese](/de/docs/Glossary/Submit_button#overriding_the_forms_behavior) das Absendeverhalten des Formulars überschreiben (z.B. `formmethod="POST"`).

    Wenn der `submitter` ein `name`-Attribut besitzt oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten [in das Formular eingeschlossen](/de/docs/Glossary/Submit_button#form_data_entries) (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter`-Parameter weglassen, wird das Formularelement selbst als `submitter` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein [submit button](/de/docs/Glossary/submit_button) ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der `submitter` muss entweder ein Nachkomme des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut besitzen, das auf das Formular verweist.

## Hinweise zur Verwendung

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir schon seit Ewigkeiten die [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode haben?

Die Antwort ist einfach. `submit()` sendet das Formular ab, aber das ist alles, was es tut. `requestSubmit()` hingegen agiert, als ob ein Submit-Button geklickt wurde. Der Inhalt des Formulars wird validiert, und das Formular wird nur abgeschickt, wenn die Validierung erfolgreich ist. Sobald das Formular abgeschickt wurde, wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis zurück an das Formularobjekt gesendet.

## Beispiele

Im folgenden Beispiel wird das Formular durch den Versuch, die Anfrage mit `requestSubmit()` zu senden, abgeschickt, sofern dies verfügbar ist. Wenn ein Submit-Button mit der ID `main-submit` gefunden wird, wird dieser verwendet, um das Formular abzuschicken. Andernfalls wird das Formular ohne `submitter`-Parameter abgeschickt und somit direkt vom Formular selbst gesendet.

Wenn andererseits `requestSubmit()` nicht verfügbar ist, fällt dieser Code auf den Aufruf der [`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode des Formulars zurück.

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
