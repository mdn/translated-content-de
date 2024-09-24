---
title: "SubmitEvent: SubmitEvent() Konstruktor"
short-title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Der **`SubmitEvent()`** Konstruktor erstellt und gibt ein neues {{domxref("SubmitEvent")}} Objekt zurück,
das verwendet wird, um ein {{domxref("HTMLFormElement.submit_event", "submit")}} Ereignis zu repräsentieren,
das an einem {{Glossary("HTML")}} [Formular](/de/docs/Learn/Forms) ausgelöst wurde.

## Syntax

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `submit`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `submitter` {{optional_inline}}
      - : Ein {{domxref('HTMLElement')}} Objekt, das der Sende-Button ist, der die Formularübermittlung ausgelöst hat.

### Rückgabewert

Ein {{domxref("SubmitEvent")}} Objekt, das mit den gegebenen Eingaben konfiguriert ist.

## Beispiele

Dieses Codebeispiel findet ein Formular im aktuellen Dokument und dann ein HTML
{{HTMLElement("button")}} innerhalb des Formulars mit der Klasse `submit`.
Anschließend wird ein neues {{domxref("SubmitEvent")}} erstellt, konfiguriert mit
seinem {{domxref("SubmitEvent.submitter", "submitter")}}, das auf den ermittelten Button gesetzt wird
(oder `null`, wenn der Button nicht gefunden wurde). Dann wird das Ereignis an das Formular gesendet,
um dem Formular mitzuteilen, dass es durch den Button übermittelt wurde.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

Dies ist ein etwas konstruiertes Beispiel, da man fast alles davon viel einfacher erreichen kann, aber es gibt Ihnen eine tiefe Kontrolle über den Prozess, die nützlich sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
