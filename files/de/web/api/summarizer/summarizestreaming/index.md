---
title: "Summarizer: summarizeStreaming() Methode"
short-title: summarizeStreaming()
slug: Web/API/Summarizer/summarizeStreaming
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`summarizeStreaming()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erzeugt eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Syntax

```js-nolint
summarizeStreaming(input)
summarizeStreaming(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu zusammenfassenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `summarizeStreaming()` Vorgang spezifiziert. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird, was dem `Summarizer` hilft, eine passendere Zusammenfassung zu erstellen.
    - `signal`
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, das es ermöglicht, den `summarizeStreaming()` Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die erzeugte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgangszusammenfassung vom Benutzeragent herausgefiltert wurde, zum Beispiel, weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer vom `Summarizer` unterstützten Sprache vorliegt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zusammenfassungsvorgang das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarizeStreaming()` Aufruf aus einem anderen Grund fehlschlug oder einen Grund, den der Benutzeragent nicht preisgeben wollte.

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
