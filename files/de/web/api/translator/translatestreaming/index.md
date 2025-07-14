---
title: "Translator: `translateStreaming()` Methode"
short-title: translateStreaming()
slug: Web/API/Translator/translateStreaming
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`translateStreaming()`** Methode des [`Translator`](/de/docs/Web/API/Translator) Schnittstelle erzeugt eine Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Syntax

```js-nolint
translateStreaming(input)
translateStreaming(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu übersetzenden Text repräsentiert.
- `options` {{optional_inline}}
  - : Ein Objekt, welches Konfigurationsoptionen für die `translateStreaming()` Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, welches ermöglicht, die `translateStreaming()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die erzeugte Übersetzung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Übersetzungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) überschreitet.

## Beispiele

### Grundlegende Verwendung von `translate()`

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  console.log(chunk);
  translation += chunk;
}

console.log("Complete translation:", translation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
