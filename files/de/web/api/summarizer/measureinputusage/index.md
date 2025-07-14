---
title: "Summarizer: measureInputUsage() Methode"
short-title: measureInputUsage()
slug: Web/API/Summarizer/measureInputUsage
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`measureInputUsage()`** Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt an, wie viel [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) durch eine Zusammenfassungsoperation für einen gegebenen Texteingang verbraucht würde.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameter

- `input`
  - : Ein String, der den Eingabetext darstellt, für den Sie eine Messung der Eingabenutzung wünschen.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für die `measureInputUsage()`-Operation angibt. Mögliche Werte sind:
    - `context`
      - : Ein String, der den Kontext beschreibt, in dem der Eingabetext verwendet werden würde, um eine besser geeignete Zusammenfassung zu erzeugen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, die `measureInputUsage()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Zahl erfüllt wird, die die Nutzung der [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) des gegebenen Eingabetextes angibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ausgabenzusammenfassung durch den Benutzeragenten gefiltert wurde, beispielsweise weil sie als schädlich, ungenau oder unsinnig erkannt wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()`-Aufruf aus irgendeinem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Überprüfen, ob Sie genügend Quota haben

Im folgenden Codeabschnitt erstellen wir eine neue `Summarizer`-Instanz mittels [`create()`](/de/docs/Web/API/Summarizer/create_static) und geben dann die gesamte Eingabequote über [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) und die Eingabequotenutzung für eine Zusammenfassung eines bestimmten Textstrings über `measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Falls ja, werfen wir einen entsprechenden Fehler; falls nicht, beginnen wir mit der Zusammenfassung des Strings mittels [`summarize()`](/de/docs/Web/API/Summarizer/summarize).

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
