---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle erstellt eine neue `Summarizer`-Instanz, um Zusammenfassungen zu generieren.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, die gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein sollten. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen aller bereitgestellten Kontextzeichenfolgen angibt (entweder der [`sharedContext`](#sharedcontext), der dem `Summarizer` übergeben wird, oder ein `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird), die gültige BCP 47 Sprach-Tags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie die Zusammenfassungen erhalten möchten. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die erzeugten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, die die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` erzeugten Zusammenfassungen angibt, die ein gültiges BCP 47 Sprach-Tag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Eine [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext)-Zeichenfolge, die den Kontext beschreibt, in dem die zusammenzufassenden Textstücke verwendet werden, was dem `Summarizer` hilft, besser geeignete Zusammenfassungen zu erzeugen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erzeugen soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die geworfen wird, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlgeschlagen ist.

## Beispiele

### Grundlegende `Summarizer`-Erstellung

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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
