---
title: "Summarizer: summarize() Methode"
short-title: summarize()
slug: Web/API/Summarizer/summarize
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`summarize()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle generiert einen neuen Zusammenfassungs-String.

## Syntax

```js-nolint
summarize(input)
summarize(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu zusammenfassenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `summarize()` Operation spezifiziert. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird, was dem `Summarizer` hilft, eine geeignetere Zusammenfassung zu erstellen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es erlaubt, die `summarize()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der die generierte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabenzusammenfassung vom Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Zusammenfassungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarize()` Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Grundlegende Nutzung von `summarize()`

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
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
