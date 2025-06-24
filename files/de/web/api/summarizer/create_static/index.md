---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`**-statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle erstellt eine neue `Summarizer`-Instanz, von der aus Zusammenfassungen generiert werden können.

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
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, die gültige [BCP 47-Sprachtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein sollten. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen der bereitgestellten Kontextzeichenfolgen angibt (entweder der [`sharedContext`](#sharedcontext), die an den `Summarizer` übergeben wird, oder ein `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird), die gültige BCP 47-Sprachtags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem die Zusammenfassungen zurückgegeben werden sollen. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) der generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, die ein gültiges BCP 47-Sprachtag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Eine [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext)-Zeichenfolge, die den Kontext beschreibt, in dem die zusammenzufassenden Textstücke verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu erstellen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, mit dem die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden kann.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erzeugen soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprachtags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Summarizer` aus irgendeinem anderen Grund fehlgeschlagen ist.

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
