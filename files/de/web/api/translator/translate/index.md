---
title: "`translate()` Methode des Übersetzers"
short-title: translate()
slug: Web/API/Translator/translate
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
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
  - : Ein Objekt, das die Konfigurationsoptionen für die `translate()` Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, die `translate()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String erfüllt wird, der die generierte Übersetzung enthält.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Übersetzungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) überschreitet.

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

- [Verwendung der Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
