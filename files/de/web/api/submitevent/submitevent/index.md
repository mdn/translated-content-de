---
title: "SubmitEvent: SubmitEvent() Konstruktor"
short-title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("HTML DOM")}}

Der **`SubmitEvent()`**-Konstruktor erstellt und gibt ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Objekt zurück, das verwendet wird, um ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis darzustellen, das bei einem [HTML](/de/docs/Glossary/HTML)-[Formular](/de/docs/Learn/Forms) ausgelöst wird.

## Syntax

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist schreibungsabhängig, und Browser setzen ihn immer auf `submit`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `submitter` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das die Schaltfläche ist, die die Formularübermittlung ausgelöst hat.

### Rückgabewert

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Objekt, das mit den angegebenen Eingaben konfiguriert ist.

## Beispiele

Dieses Codebeispiel findet ein Formular im aktuellen Dokument und dann ein HTML
{{HTMLElement("button")}} innerhalb des Formulars mit der Klasse `submit`.
Anschließend wird ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) erstellt, das mit
seinem [`submitter`](/de/docs/Web/API/SubmitEvent/submitter) auf die identifizierte Schaltfläche
(oder `null`, wenn die Schaltfläche nicht gefunden wurde) gesetzt konfiguriert wird. Anschließend wird das Ereignis an das Formular gesendet, um dem Formular mitzuteilen, dass es durch die Schaltfläche übermittelt wurde.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

Dies ist ein etwas konstruiertes Beispiel, da Sie fast alles davon viel einfacher tun können, aber es gibt Ihnen eine tiefgehende Kontrolle über den Prozess, die nützlich sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
