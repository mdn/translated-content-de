---
title: "LanguageDetector: detect() Methode"
short-title: detect()
slug: Web/API/LanguageDetector/detect
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`detect()`** Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Interface erkennt die am ehesten passende Sprache oder Sprachen, in denen ein gegebener Text geschrieben ist.

## Syntax

```js-nolint
detect(input)
detect(input, options)
```

### Parameter

- `input`
  - : Ein String, der den zu analysierenden Text repräsentiert, um dessen Sprache erkannt zu werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `detect()` Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, die `detect()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die die erkannten Sprachen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `detectedLanguage`
  - : Ein {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, das die erkannte Sprache repräsentiert.
- `confidence`
  - : Eine Zahl zwischen `0` und `1`, die das Vertrauen des KI-Modells darstellt, dass die erkannte Sprache korrekt ist.

Die Summe aller zurückgegebenen `confidence` Werte sollte theoretisch 1 sein, kann aber niedriger sein, da sehr niedrige Vertrauenswerte aus den Ergebnissen ausgeschlossen werden.

Das letzte zurückgegebene Array-Element wird immer einen `detectedLanguage` Wert von `und` haben — dies ist eine Abkürzung für "undetermined" und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer vom Modell bekannten Sprache geschrieben ist.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `LanguageDetector` zuvor zerstört wurde (es wurde [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) darauf aufgerufen oder er wurde über sein Abbruch-`signal` abgebrochen) [`signal`](/de/docs/Web/API/LanguageDetector/create_static#signal) nach Erstellung).
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Wird ausgelöst, wenn die Sprachenerkennungsoperation das verfügbare [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) überschreitet.

## Beispiele

### Grundlegende `detect()` Nutzung

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

- [Die Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
