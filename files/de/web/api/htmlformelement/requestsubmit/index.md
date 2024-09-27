---
title: "HTMLFormElement: requestSubmit()-Methode"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die Methode **`requestSubmit()`** des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) fordert an, dass das Formular mit einem bestimmten Absende-Button abgeschickt wird.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameter

- `submitter` {{optional_inline}}

  - : Ein [Absende-Button](/de/docs/Glossary/submit_button), der Mitglied des Formulars ist.

    Wenn der `submitter` `form*`-Attribute angibt, [werden diese die](/de/docs/Glossary/Submit_button#overriding_the_forms_behavior) Übermittlungsverhalten des Formulars überschreiben (z.B. `formmethod="POST"`).

    Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten [in die](/de/docs/Glossary/Submit_button#form_data_entries) Formularübermittlung einbezogen (z.B. `btnName=btnValue`).

    Wenn Sie den `submitter`-Parameter weglassen, wird das Formularelement selbst als Absender verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der angegebene `submitter` kein [Absende-Button](/de/docs/Glossary/submit_button) ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene `submitter` kein Mitglied des Formulars ist, auf dem `requestSubmit()` aufgerufen wurde. Der Absender muss entweder ein Nachfahre des Formular-Elements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut haben, das auf das Formular verweist.

## Hinweise zur Verwendung

Die offensichtliche Frage ist: Warum existiert diese Methode, wenn wir seit ewigen Zeiten die
[`submit()`](/de/docs/Web/API/HTMLFormElement/submit)-Methode haben?

Die Antwort ist einfach. `submit()` sendet das Formular ab, aber das ist auch alles, was es tut. `requestSubmit()` hingegen agiert, als ob ein Absende-Button angeklickt wurde. Der Inhalt des Formulars wird validiert und das Formular nur dann abgeschickt, wenn die Validierung erfolgreich ist. Sobald das Formular abgesendet wurde, wird das [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis an das Formularobjekt zurückgesendet.

## Beispiele

Im folgenden Beispiel wird das Formular durch den Versuch übermittelt, die Anforderung mit `requestSubmit()` zu senden, wenn es verfügbar ist. Wenn ein Absende-Button mit der ID `main-submit` gefunden wird, wird dieser verwendet, um das Formular abzusenden. Andernfalls wird das Formular ohne `submitter`-Parameter abgeschickt, sodass es direkt vom Formular selbst geschickt wird.

Wenn `requestSubmit()` hingegen nicht verfügbar ist, fällt dieser Code zurück und ruft die Methode [`submit()`](/de/docs/Web/API/HTMLFormElement/submit) des Formulars auf.

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
