---
title: "Translator: translate() Methode"
short-title: translate()
slug: Web/API/Translator/translate
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`translate()`** Methode des [`Translator`](/de/docs/Web/API/Translator) Interfaces gibt eine Übersetzung eines Eingabestrings zurück.

## Syntax

```js-nolint
translate(input)
translate(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu übersetzenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `translate()`-Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, die `translate()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der die generierte Übersetzung enthält.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `Translator` zuvor zerstört wurde (entweder durch Aufruf von [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) oder durch Abbruch über das zugehörige [`signal`](/de/docs/Web/API/Translator/create_static#signal) nach Erzeugung).
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Übersetzungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) übersteigt.

## Beispiele

### Grundlegende Nutzung von `translate()`

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const translation = await translator.translate(myTextString);
console.log(translation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
