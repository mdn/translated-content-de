---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erstellt eine neue `Summarizer`-Instanz, um Zusammenfassungen zu generieren.

> [!NOTE]
> Die `create()`-Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen des Eingabetexts spezifiziert, die gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein sollten. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen aller bereitgestellten Kontext-Strings spezifiziert (entweder der [`sharedContext`](#sharedcontext), der dem `Summarizer` übergeben wurde, oder ein `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs spezifiziert wurde), die gültige BCP 47 Sprach-Tags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie Zusammenfassungen erhalten möchten. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, die es ermöglicht, den Download-Fortschritt des KI-Modells zu überwachen.
    - `outputLanguage`
      - : Ein String, der die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, die ein gültiges BCP 47 Sprach-Tag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Ein [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) String, der den Kontext beschreibt, in dem die zusammenzufassenden Texte verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu generieren.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt, das es ermöglicht, die `create()`-Operation über den assoziierten [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
    - `type`
      - : Ein enumerierter Wert, der die [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlschlug.

## Beispiele

### Grundlegende Erstellung eines `Summarizer`

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
