---
title: "Translator: translate() Methode"
short-title: translate()
slug: Web/API/Translator/translate
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die Methode **`translate()`** des [`Translator`](/de/docs/Web/API/Translator)-Interfaces gibt eine Übersetzung eines Eingabestrings zurück.

## Syntax

```js-nolint
translate(input)
translate(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu übersetzenden Text darstellt.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `translate()`-Operation angibt. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, welche die `translate()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der die generierte Übersetzung enthält.

### Ausnahmen

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

const translation = await translator.translate(myTextString);
console.log(translation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
