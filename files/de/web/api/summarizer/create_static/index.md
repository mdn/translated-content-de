---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erstellt eine neue `Summarizer` Instanz, um Zusammenfassungen zu generieren.

> [!NOTE]
> Die `create()` Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen der bereitgestellten Kontextzeichenfolgen angibt (entweder der [`sharedContext`](#sharedcontext), der an den `Summarizer` übergeben wird, oder ein `context`, das während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs angegeben wird). Diese sollten gültige BCP 47 Sprach-Tags sein. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Zusammenfassungen zurückgegeben werden sollen. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) der generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das das Überwachen des Downloadfortschritts des AI-Modells ermöglicht.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, welche ein gültiges BCP 47 Sprach-Tag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Ein [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Zeichenfolge, die den Kontext beschreibt, in dem die zusammenzufassenden Texte verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu erzeugen.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt-Instanz, die es ermöglicht, den `create()` Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erzeugen soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer` Objekt-Instanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefehler, der ausgelöst wird, wenn die Erstellung des `Summarizer` aus anderen Gründen fehlschlägt.

## Beispiele

### Grundlegende `Summarizer` Erstellung

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
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
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
