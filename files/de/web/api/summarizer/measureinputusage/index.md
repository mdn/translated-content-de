---
title: "Summarizer: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/Summarizer/measureInputUsage
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`measureInputUsage()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt an, wie viel [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) durch eine Zusammenfassung für einen gegebenen Texteingang verbraucht würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie einen Eingabenutzungswert erhalten möchten.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `measureInputUsage()`-Vorgang angibt. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet würde, um eine geeignetere Zusammenfassung zu erzeugen.
    - `signal`
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, den `measureInputUsage()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Nutzung der [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) des gegebenen Eingabetextes angibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} gesperrt wird.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabezusammenfassung durch den Benutzer-Agent gefiltert wurde, zum Beispiel, weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer vom `Summarizer` unterstützten Sprache ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()`-Aufruf aus einem anderen Grund fehlgeschlagen ist, oder aus einem Grund, den der Benutzer-Agent nicht offenlegen wollte.

## Beispiele

### Überprüfen, ob Sie über ausreichend Quota verfügen

Im folgenden Beispiel erstellen wir eine neue `Summarizer`-Instanz mit [`create()`](/de/docs/Web/API/Summarizer/create_static), dann geben wir die gesamte Eingabequote über [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) und die Eingabenutzungsquote für die Zusammenfassung eines bestimmten Textstrings über `measureInputUsage()` zurück.

Wir überprüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Ist dies der Fall, werfen wir einen entsprechenden Fehler; ist dies nicht der Fall, beginnen wir mit der Zusammenfassung des Strings mithilfe von [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
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
