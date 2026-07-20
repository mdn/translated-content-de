---
title: "Translator: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/Translator/measureInputUsage
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`measureInputUsage()`** Methode der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle gibt an, wie viel Eingabequote für eine Übersetzungsoperation für einen bestimmten Texteingang verwendet werden würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Eingabeverwendungsbewertung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `measureInputUsage()`-Operation spezifiziert. Mögliche Werte sind:
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, die `measureInputUsage()`-Operation über den verbundenen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) Verwendung des angegebenen Eingabetextes angibt.

Diese Zahl ist implementierungsabhängig; wenn sie weniger als die [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) ist, kann der String übersetzt werden.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der `Translator` API durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabeübersetzung vom Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()` Aufruf aus einem anderen Grund fehlschlägt oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Überprüfung, ob genügend Quota vorhanden ist

Im unten stehenden Codebeispiel erstellen wir eine neue `Translator` Instanz mit [`create()`](/de/docs/Web/API/Translator/create_static), geben dann die gesamte Eingabequote über [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) und die Eingabequotenutzung für die Übersetzung eines bestimmten Textstrings über `measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer als die insgesamt verfügbare Quote ist. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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
