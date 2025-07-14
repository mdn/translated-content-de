---
title: "LanguageDetector: detect() Methode"
short-title: detect()
slug: Web/API/LanguageDetector/detect
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`detect()`** Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle erkennt die am wahrscheinlichsten zutreffende Sprache oder Sprachen, in der ein gegebener Text geschrieben ist.

## Syntax

```js-nolint
detect(input)
detect(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Text darstellt, dessen Sprache erkannt werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `detect()`-Operation angibt. Mögliche Werte sind unter anderem:
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt, das es ermöglicht, die `detect()`-Operation über den dazugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von Objekten erfüllt wird, die die erkannten Sprachen darstellen. Jedes Objekt enthält die folgenden Eigenschaften:

- `detectedLanguage`
  - : Ein [BCP 47-Sprachentag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags), der die erkannte Sprache darstellt.
- `confidence`
  - : Eine Zahl zwischen `0` und `1`, die die Zuversicht des KI-Modells angibt, dass die erkannte Sprache korrekt ist.

Die Summe aller zurückgegebenen `confidence`-Werte sollte theoretisch 1 betragen, kann jedoch niedriger sein, da sehr niedrige Zuversichtswerte von den Ergebnissen ausgeschlossen werden.

Das letzte zurückgegebene Array-Element wird immer einen `detectedLanguage` Wert von `und` haben — dies steht für "undetermined" (unbestimmt) und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Sprachenerkennungsoperation die verfügbare [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) überschreitet.

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

- [Die Translator und Language Detector APIs verwenden](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
