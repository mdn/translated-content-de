---
title: "Übersetzer: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/Translator/measureInputUsage
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`measureInputUsage()`**-Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt an, wie viel Eingabequote bei einem Übersetzungsvorgang für einen gegebenen Texteingabewert verwendet würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Messung der Eingabenutzung durchführen möchten.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `measureInputUsage()`-Vorgang spezifiziert. Mögliche Werte umfassen:
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, den `measureInputUsage()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Nutzung der [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) des gegebenen Eingabetextes angibt.

Diese Zahl ist implementierungsabhängig; wenn sie kleiner als die [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) ist, kann der String übersetzt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der `Translator`-API durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabetranslation vom Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `measureInputUsage()` aus irgendeinem anderen Grund fehlschlug oder ein Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Überprüfen, ob genügend Quote vorhanden ist

Im untenstehenden Schnipsel erstellen wir eine neue `Translator`-Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static), dann geben wir die gesamte Eingabenutzungsquote über [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) und die Eingabenutzungsquote für die Übersetzung eines bestimmten Text-Strings über `measureInputUsage()` zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mittels [`translate()`](/de/docs/Web/API/Translator/translate).

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

- [Verwendung der APIs für Übersetzer und Spracherkennung](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
