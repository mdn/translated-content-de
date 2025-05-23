---
title: "LanguageDetector: detect() Methode"
short-title: detect()
slug: Web/API/LanguageDetector/detect
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`detect()`**-Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces erkennt die am besten passende Sprache oder Sprachen, in denen ein gegebener Textstring höchstwahrscheinlich geschrieben ist.

## Syntax

```js-nolint
detect(input)
detect(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Text darstellt, dessen Sprache erkannt werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `detect()`-Vorgang angibt. Mögliche Werte sind:
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, den `detect()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Array von Objekten zurückgibt, die die erkannten Sprachen repräsentieren. Jedes Objekt enthält die folgenden Eigenschaften:

- `detectedLanguage`
  - : Ein [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags), das die erkannte Sprache repräsentiert.
- `confidence`
  - : Eine Zahl zwischen `0` und `1`, die das Vertrauen des KI-Modells anzeigt, dass die erkannte Sprache korrekt ist.

Die Summe aller zurückgegebenen `confidence`-Werte sollte theoretisch `1` betragen, kann jedoch geringer sein, da sehr niedrige Vertrauenswerte von den Ergebnissen ausgeschlossen werden.

Das letzte zurückgegebene Array-Element wird immer einen `detectedLanguage`-Wert von `und` haben – dies ist eine Abkürzung für "unbestimmt" und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) nicht aktiv ist.
- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Sprachenerkennungsvorgang das verfügbare [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) überschreitet.

## Beispiele

### Grundlegende `detect()`-Verwendung

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
