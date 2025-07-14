---
title: "Summarizer: summarize() Methode"
short-title: summarize()
slug: Web/API/Summarizer/summarize
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`summarize()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erzeugt eine neue Zusammenfassungszeichenkette.

## Syntax

```js-nolint
summarize(input)
summarize(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenfolge, die den zu zusammenfassenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `summarize()` Operation spezifiziert. Mögliche Werte umfassen:
    - `context`
      - : Eine Zeichenfolge, die den Kontext beschreibt, in dem der Eingabetext verwendet wird, um dem `Summarizer` zu helfen, eine geeignetere Zusammenfassung zu erstellen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, die `summarize()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zeichenkette erfüllt wird, die die erzeugte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabesummary vom Benutzeragent gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache vorliegt, die der `Summarizer` unterstützt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zusammenfassungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarize()` Aufruf aus irgendeinem anderen Grund fehlschlug oder einen Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Grundlegende Verwendung von `summarize()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
