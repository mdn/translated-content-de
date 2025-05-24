---
title: "Summarizer: summarize() Methode"
short-title: summarize()
slug: Web/API/Summarizer/summarize
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`summarize()`**-Methode des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces erzeugt eine neue Zusammenfassungszeichenkette.

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
      - : Ein String, der den Kontext beschreibt, in dem der Eingangstext verwendet wird, was dem `Summarizer` hilft, eine geeignetere Zusammenfassung zu erzeugen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, das es ermöglicht, die `summarize()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird mit einem String, der die generierte Zusammenfassung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabezusammenfassung vom Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer vom `Summarizer` unterstützten Sprache ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Zusammenfassungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) überschreitet.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `summarize()`-Aufruf aus einem anderen Grund fehlschlägt oder aus einem Grund, den der Benutzeragent nicht offenlegen möchte.

## Beispiele

### Grundlegende Verwendung von `summarize()`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
