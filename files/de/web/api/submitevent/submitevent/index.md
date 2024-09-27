---
title: "SubmitEvent: SubmitEvent() Konstruktor"
short-title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Der **`SubmitEvent()`** Konstruktor erstellt und gibt ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) Objekt zurück,
das verwendet wird, um ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event) Ereignis darzustellen,
das bei einem [HTML](/de/docs/Glossary/HTML) [Formular](/de/docs/Learn/Forms) ausgelöst wird.

## Syntax

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dieser ist case-sensitive und Browser setzen ihn immer auf `submit`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `submitter` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt, das der Sende-Button ist, der das Formular ausgelöst hat.

### Rückgabewert

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) Objekt, das mit den gegebenen Eingaben konfiguriert ist.

## Beispiele

Dieses Code-Snippet lokalisiert ein Formular im aktuellen Dokument und dann ein HTML
{{HTMLElement("button")}} innerhalb des Formulars mit der Klasse `submit`.
Anschließend wird ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) erstellt, das mit
seinem [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) auf den identifizierten Button (oder `null`, wenn der Button nicht gefunden wurde) konfiguriert ist. Dann wird das Ereignis an das Formular gesendet,
wodurch dem Formular mitgeteilt wird, dass es vom Button gesendet wurde.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

Dies ist ein etwas konstruiertes Beispiel, da man fast alles viel einfacher erledigen kann, aber es gibt Ihnen tiefgehende Kontrolle über den Prozess, was nützlich sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
