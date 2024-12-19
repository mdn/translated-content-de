---
title: "SubmitEvent: SubmitEvent() Konstruktor"
short-title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Der **`SubmitEvent()`**-Konstruktor erstellt und gibt ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Objekt zurück, das verwendet wird, um ein [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)-Ereignis darzustellen, das bei einem {{Glossary("HTML", "HTML")}}-[Formular](/de/docs/Learn_web_development/Extensions/Forms) ausgelöst wird.

## Syntax

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv, und Browser setzen es immer auf `submit`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _neben den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `submitter` {{optional_inline}}
      - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekt, das die Schaltfläche ist, die das Formular ausgelöst hat.

### Rückgabewert

Ein [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)-Objekt, das anhand der angegebenen Eingaben konfiguriert wird.

## Beispiele

Dieses Codebeispiel findet ein Formular im aktuellen Dokument und dann ein HTML
{{HTMLElement("button")}} innerhalb des Formulars mit der Klasse `submit`.
Anschließend wird ein neues [`SubmitEvent`](/de/docs/Web/API/SubmitEvent) erstellt, das mit
seinem [`submitter`](/de/docs/Web/API/SubmitEvent/submitter), das auf die identifizierte Schaltfläche gesetzt ist (oder `null`, wenn die Schaltfläche nicht gefunden wurde), konfiguriert ist. Dann wird das Ereignis an das Formular gesendet,
um dem Formular mitzuteilen, dass es durch die Schaltfläche übermittelt wurde.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

Dies ist ein etwas konstruiertes Beispiel, da Sie fast all dies viel einfacher tun können, aber es gibt Ihnen tiefe Kontrolle über den Prozess, was nützlich sein kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
