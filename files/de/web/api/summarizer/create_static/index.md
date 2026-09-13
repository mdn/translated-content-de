---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`create()`** der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erstellt eine neue `Summarizer` Instanz, um Zusammenfassungen zu generieren.

> [!NOTE]
> Die `create()` Methode erfordert {{Glossary("Transient_activation", "transient activation")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` spezifiziert. Mögliche Werte umfassen:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, die gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprachtags")}} sein sollten. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen aller bereitgestellten Kontextzeichenfolgen angibt (entweder der an den `Summarizer` übergebene [`sharedContext`](#sharedcontext), oder ein während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs spezifizierter `context`), die gültige BCP 47 Sprachtags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem die Zusammenfassungen zurückgegeben werden sollen. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, die ein gültiger BCP 47 Sprachtag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Eine [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Zeichenfolge, die den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu generieren.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, eine `create()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` vor der Auflösung des `create()` Promise aufgerufen wird, wird die `create()` Operation abgebrochen.
        - Wenn `abort()` nach der Erfüllung des `create()` Promise aufgerufen wird, hat es die gleiche Wirkung wie der Aufruf von [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy): Die den resultierenden `Summarizer` Instanz zugewiesenen Ressourcen werden freigegeben, und alle laufenden und nachfolgenden `Summarizer` Methodenanrufe werden mit einem `AbortError` abgelehnt.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer` Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Zweck-Ausnahme ausgelöst, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlgeschlagen ist.

## Beispiele

### Grundlegende `Summarizer` Erstellung

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
