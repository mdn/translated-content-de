---
title: "Translator: translateStreaming() Methode"
short-title: translateStreaming()
slug: Web/API/Translator/translateStreaming
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`translateStreaming()`** Methode des [`Translator`](/de/docs/Web/API/Translator) Interface generiert eine Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Syntax

```js-nolint
translateStreaming(input)
translateStreaming(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu übersetzenden Text repräsentiert.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `translateStreaming()` Operation angibt. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es erlaubt, die `translateStreaming()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der die generierte Übersetzung enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `Translator` zuvor zerstört wurde (d.h. es wurde [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) aufgerufen oder er wurde nach der Erstellung über sein Abbruchs- [`signal`](/de/docs/Web/API/Translator/create_static#signal) abgebrochen).
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
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

- [Verwendung der Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
