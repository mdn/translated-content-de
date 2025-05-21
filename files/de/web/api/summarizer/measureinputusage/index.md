---
title: "Summarizer: measureInputUsage()-Methode"
short-title: measureInputUsage()
slug: Web/API/Summarizer/measureInputUsage
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`measureInputUsage()`**-Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt an, wie viel [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) durch eine Zusammenfassungsoperation für einen gegebenen Texteingang verbraucht werden würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext repräsentiert, für den Sie eine Eingabenutzungsmessung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `measureInputUsage()`-Operation spezifiziert. Mögliche Werte umfassen:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet wird, um eine geeignetere Zusammenfassung zu generieren.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt, das es erlaubt, die `measureInputUsage()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer Zahl erfüllt, die die [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota)-Nutzung des gegebenen Eingabetextes angibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer', 'summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabezusammenfassung vom Benutzeragenten gefiltert wurde, z. B. weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache vorliegt, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()`-Aufruf aus einem anderen Grund fehlgeschlagen ist, oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Überprüfen, ob genügend Kontingent vorhanden ist

Im folgenden Beispiel erstellen wir eine neue `Summarizer`-Instanz mit Hilfe von [`create()`](/de/docs/Web/API/Summarizer/create_static) und geben dann das gesamte Eingabekontingent über [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) und die Eingabenutzung für die Zusammenfassung eines bestimmten Textstrings über `measureInputUsage()` zurück.

Dann prüfen wir, ob die individuelle Nutzung dieses Strings größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen entsprechenden Fehler; andernfalls beginnen wir mit der Zusammenfassung des Strings unter Verwendung von [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
});

const totalInputQuota = summarizer.inputQuota;
const inputUsage = await summarizer.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to generate a summary.");
} else {
  console.log("Yay, quota available to generate a summary.");
  const summary = await summarizer.summarize(myTextString);
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
