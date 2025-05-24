---
title: "Summarizer: summarizeStreaming() Methode"
short-title: summarizeStreaming()
slug: Web/API/Summarizer/summarizeStreaming
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`summarizeStreaming()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle generiert eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Syntax

```js-nolint
summarizeStreaming(input)
summarizeStreaming(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Text darstellt, der zusammengefasst werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `summarizeStreaming()` Vorgang angibt. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird. Dies hilft dem `Summarizer`, eine passendere Zusammenfassung zu erstellen.
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, den `summarizeStreaming()` Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die generierte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabezusammenfassung vom Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` in einer Sprache ist, die der `Summarizer` nicht unterstützt.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zusammenfassungsvorgang das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarizeStreaming()` Aufruf aus einem anderen Grund fehlschlug oder ein Grund, den der Benutzeragent nicht mitteilen wollte.

## Beispiele

### Grundlegende Nutzung von `summarizeStreaming()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
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
