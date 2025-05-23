---
title: "LanguageDetector: Methode measureInputUsage()"
short-title: measureInputUsage()
slug: Web/API/LanguageDetector/measureInputUsage
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`measureInputUsage()`**-Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt an, wie viel Eingabe-Kontingent durch eine Spracherkennungsoperation für einen gegebenen Texteingang verbraucht würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Eingabenutzungsmessung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `measureInputUsage()`-Operation spezifiziert. Mögliche Werte umfassen:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, die `measureInputUsage()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer Zahl erfüllt, welche die Nutzung des [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) des gegebenen Eingabetextes angibt.

Diese Zahl ist implementierungsabhängig; wenn sie kleiner als die [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) ist, kann die Sprache des Strings erkannt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der `LanguageDetector`-API durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `measureInputUsage()`-Aufruf aus einem anderen Grund fehlgeschlagen ist oder aus einem Grund, den der User-Agent nicht offenlegen wollte.

## Beispiele

### Überprüfung, ob genügend Kontingent vorhanden ist

Im untenstehenden Schnipsel erstellen wir eine neue `LanguageDetector`-Instanz mithilfe von [`create()`](/de/docs/Web/API/LanguageDetector/create_static) und geben dann das gesamte Eingabe-Kontingent über [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) und die Eingabe-Kontingentnutzung für die Erkennung der Sprache eines bestimmten Textstrings über `measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; falls nein, beginnen wir mit der Erkennung der Sprache des Strings über [`detect()`](/de/docs/Web/API/LanguageDetector/detect).

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
