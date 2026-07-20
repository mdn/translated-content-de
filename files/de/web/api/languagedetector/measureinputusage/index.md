---
title: "LanguageDetector: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/LanguageDetector/measureInputUsage
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`measureInputUsage()`** Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Interfaces gibt an, wie viel der Eingabequote durch eine Sprachenerkennungsoperation für einen gegebenen Texteingang genutzt würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Messung des Eingabeverbrauchs wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `measureInputUsage()`-Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, die `measureInputUsage()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota)-Nutzung des gegebenen Eingangstextes angibt.

Diese Zahl ist von der Implementierung abhängig; wenn sie kleiner als die [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) ist, kann die Sprache des Strings erkannt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der `LanguageDetector` API durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()` Aufruf aus irgendeinem anderen Grund fehlschlug oder einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Überprüfung, ob genug Quote vorhanden ist

Im unten stehenden Beispiel erstellen wir eine neue `LanguageDetector`-Instanz mithilfe von [`create()`](/de/docs/Web/API/LanguageDetector/create_static), dann geben wir die gesamte Eingabequote über [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) und die Eingabequotennutzung für die Erkennung der Sprache eines bestimmten Textstrings über `measureInputUsage()` zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer als die insgesamt verfügbare Quote ist. Falls ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Erkennung der Sprache des Strings mithilfe von [`detect()`](/de/docs/Web/API/LanguageDetector/detect).

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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
