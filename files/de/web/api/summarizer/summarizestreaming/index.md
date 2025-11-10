---
title: "Summarizer: summarizeStreaming() Methode"
short-title: summarizeStreaming()
slug: Web/API/Summarizer/summarizeStreaming
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`summarizeStreaming()`**-Methode des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces erzeugt eine neue Zusammenfassung als einen [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Syntax

```js-nolint
summarizeStreaming(input)
summarizeStreaming(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu zusammenfassenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `summarizeStreaming()`-Operation angibt. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird, was dem `Summarizer` hilft, eine geeignetere Zusammenfassung zu erstellen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, die `summarizeStreaming()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die generierte Zusammenfassung enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `Summarizer` zuvor zerstört wurde (mit [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) aufgerufen, oder wenn er nach seiner Erstellung über sein Abbruch-`signal` abgebrochen wurde).
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabenzusammenfassung vom Benutzeragenten gefiltert wurde, zum Beispiel weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer vom `Summarizer` unterstützten Sprache ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Zusammenfassungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarizeStreaming()`-Aufruf aus irgendeinem anderen Grund fehlschlug, oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Grundlegende Nutzung von `summarizeStreaming()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
