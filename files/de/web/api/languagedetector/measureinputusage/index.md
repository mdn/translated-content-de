---
title: "LanguageDetector: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/LanguageDetector/measureInputUsage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`measureInputUsage()`**-Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt an, wie viel Eingabequote durch einen Spracherkennungsvorgang für einen bestimmten Texteingang verwendet wird.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Eingabenutzungsmessung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `measureInputUsage()`-Vorgang angibt. Mögliche Werte sind:
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, den `measureInputUsage()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Nutzung der [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) des gegebenen Texteingangs spezifiziert.

Diese Zahl ist implementierungsabhängig; wenn sie kleiner als die [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) ist, kann die Sprache des Strings erkannt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der `LanguageDetector`-API durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()`-Aufruf aus anderen Gründen, oder aus einem Grund, den der Benutzeragent nicht offenlegen möchte, fehlschlägt.

## Beispiele

### Überprüfen, ob Sie genug Quote haben

Im folgenden Beispiel erstellen wir eine neue `LanguageDetector`-Instanz mit [`create()`](/de/docs/Web/API/LanguageDetector/create_static), dann geben wir die Gesamtquote der Eingabe über [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) zurück und die Nutzung der Eingabequote für die Erkennung der Sprache eines bestimmten Textstrings über `measureInputUsage()`.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Erkennung der Sprache des Strings unter Verwendung von [`detect()`](/de/docs/Web/API/LanguageDetector/detect).

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const totalInputQuota = detector.inputQuota;
const inputUsage = await detector.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to detect languages.");
} else {
  console.log("Quota available to detect languages.");
  const results = await detector.detect(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
