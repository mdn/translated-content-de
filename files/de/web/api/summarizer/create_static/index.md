---
title: "Summarizer: `create()` statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`** statische Methode des [`Summarizer`](/de/docs/Web/API/Summarizer)-Interfaces erstellt eine neue `Summarizer`-Instanz, um Zusammenfassungen zu generieren.

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
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingangstextes angibt. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) festgelegt). Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen der bereitgestellten Kontextstrings angibt (entweder des [`sharedContext`](#sharedcontext), der dem `Summarizer` übergeben wird, oder eines `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird), die gültige BCP 47 Sprach-Tags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Zusammenfassungen zurückgegeben werden sollen. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Rückruffunktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das das Monitoring des Download-Fortschritts des KI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` erzeugten Zusammenfassungen angibt und ein gültiger BCP 47 Sprach-Tag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Ein [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Zeichenfolgen, das den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu erzeugen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, den `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn einer der Sprach-Tags in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlschlägt.

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
