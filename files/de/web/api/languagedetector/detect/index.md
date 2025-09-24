---
title: "LanguageDetector: detect() Methode"
short-title: detect()
slug: Web/API/LanguageDetector/detect
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`detect()`** Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle erkennt die am besten passende Sprache oder Sprachen, in denen ein gegebener Textstring wahrscheinlich geschrieben ist.

## Syntax

```js-nolint
detect(input)
detect(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Text darstellt, dessen Sprache erkannt werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `detect()`-Operation angibt. Mögliche Werte beinhalten:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, die `detect()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die die erkannten Sprachen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `detectedLanguage`
  - : Ein {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}}, das die erkannte Sprache repräsentiert.
- `confidence`
  - : Eine Zahl zwischen `0` und `1`, die das Vertrauen des KI-Modells angibt, dass die erkannte Sprache korrekt ist.

Die Summe aller zurückgegebenen `confidence`-Werte sollte theoretisch 1 betragen, kann jedoch niedriger sein, da sehr niedrige Vertrauenswerte aus den Ergebnissen ausgeschlossen werden.

Das letzte zurückgegebene Array-Element wird immer einen `detectedLanguage`-Wert von `und` haben — dies ist eine Abkürzung für "unbestimmt" und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer dem Modell bekannten Sprache verfasst ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Sprachenerkennungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) überschreitet.

## Beispiele

### Grundlegende Verwendung von `detect()`

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const results = await detector.detect(myTextString);

results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
// und: 0.0003214875760022551
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
