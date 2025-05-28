---
title: "Summarizer: summarize() Methode"
short-title: summarize()
slug: Web/API/Summarizer/summarize
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`summarize()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle erzeugt eine neue Zusammenfassungszeichenkette.

## Syntax

```js-nolint
summarize(input)
summarize(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu zusammenfassenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `summarize()`-Operation angibt. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird, was dem `Summarizer` hilft, eine passendere Zusammenfassung zu erzeugen.
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, die `summarize()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem String erfüllt wird, der die erzeugte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die erzeugte Zusammenfassung vom Benutzeragenten gefiltert wurde, zum Beispiel, weil sie als schädlich, ungenau oder sinnlos erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer vom `Summarizer` unterstützten Sprache ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zusammenfassungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarize()` Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Grundlegende `summarize()`-Verwendung

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
