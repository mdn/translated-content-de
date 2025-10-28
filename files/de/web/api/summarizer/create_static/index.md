---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erstellt eine neue `Summarizer` Instanz, von der aus Zusammenfassungen generiert werden können.

> [!NOTE]
> Die `create()` Methode erfordert eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, die gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein sollten. Standard ist `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen aller bereitgestellten Kontextzeichenfolgen angibt (entweder der [`sharedContext`](#sharedcontext), der dem `Summarizer` übergeben wird, oder ein `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs angegeben wird), die gültige BCP 47 Sprach-Tags sein sollten. Standard ist `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie die Rückgabe der Zusammenfassungen wünschen. Standard ist `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standard ist `short`.
    - `monitor`
      - : Eine Rückruffunktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, die ein gültiges BCP 47 Sprach-Tag sein soll. Standard ist `en`.
    - `sharedContext`
      - : Eine [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Zeichenfolge, die den Kontext beschreibt, in dem die zu summarierenden Textstücke verwendet werden und die dem `Summarizer` hilft, geeignetere Zusammenfassungen zu erstellen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, eine `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` vor der Auflösung des `create()`-Promises aufgerufen wird, wird die `create()`-Operation abgebrochen.
        - Wenn `abort()` nach der Erfüllung des `create()`-Promises aufgerufen wird, hat es die gleiche Wirkung wie ein Aufruf von [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy): Die Ressourcen, die der resultierenden `Summarizer` Instanz zugewiesen sind, werden freigegeben, und alle laufenden und nachfolgenden `Summarizer`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standard ist `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer` Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der Sprach-Tags, die in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegeben sind, ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Zweck Fehler, der ausgelöst wird, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlgeschlagen ist.

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
- [Web KI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
