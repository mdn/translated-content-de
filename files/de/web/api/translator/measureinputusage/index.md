---
title: "Translator: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/Translator/measureInputUsage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`measureInputUsage()`** Methode der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle gibt an, wie viel Eingabequote durch einen Übersetzungsvorgang für einen gegebenen Texteingang verbraucht werden würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingangstext darstellt, für den Sie eine Eingabenutzungsmessung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `measureInputUsage()` Vorgang angibt. Mögliche Werte umfassen:
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, den `measureInputUsage()` Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Nutzung der [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) des gegebenen Eingangstexts angibt.

Diese Zahl ist implementationsabhängig; wenn sie kleiner als die [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) ist, kann der String übersetzt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der `Translator` API durch ein {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabeübersetzung vom User-Agent gefiltert wurde, zum Beispiel, weil sie als schadhaft, ungenau oder unsinnig erkannt wurde.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()` Aufruf aus irgendeinem anderen Grund fehlschlug oder ein Grund, den der User-Agent nicht offenlegen wollte.

## Beispiele

### Überprüfen, ob genug Quote vorhanden ist

Im folgenden Code-Snippet erstellen wir eine neue `Translator`-Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static), dann geben wir die gesamte Eingabequote über [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) und die Eingabequotennutzung für die Übersetzung eines bestimmten Textstrings über `measureInputUsage()` zurück.

Dann testen wir, ob die individuelle Eingabenutzung für diesen String größer als die insgesamt verfügbare Quote ist. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to translate.");
} else {
  console.log("Quota available to translate.");
  const translation = await translator.translate(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
