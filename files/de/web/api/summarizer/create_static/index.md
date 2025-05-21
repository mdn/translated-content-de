---
title: "Summarizer: Methode `create()`"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{securecontext_header}}

Die statische Methode **`create()`** der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle erstellt eine neue `Summarizer`-Instanz, um Zusammenfassungen zu generieren.

> [!NOTE]
> Die Methode `create()` erfordert eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder das Drücken eines Knopfes aufgerufen werden.

## Syntax

```js-nolint
Summarizer.create()
Summarizer.create(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für den `Summarizer` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen des Eingabetextes angibt, welche gültige [BCP 47-Sprachtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein sollten (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben). Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen aller bereitgestellten Kontext-Strings angibt (entweder der [`sharedContext`](#sharedContext), der dem `Summarizer` übergeben wird, oder ein `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird), welche gültige BCP 47-Sprachtags sein sollten. Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das gewünschte Text-`format` angibt, in dem die Zusammenfassungen zurückgegeben werden sollen. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative `length` für die generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem `CreateMonitor`-Argument, das die Überwachung des Download-Fortschritts des AI-Modells ermöglicht.
    - `outputLanguage`
      - : Ein String, der die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt, welche ein gültiges BCP 47-Sprachtag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Ein `sharedContext`-String, der den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu generieren.
    - `signal`
      - : Eine Instanz eines `AbortSignal`-Objekts, das es ermöglicht, den `create()`-Vorgang über den zugehörigen `AbortController` abzubrechen.
    - `type`
      - : Ein enumerierter Wert, der den `type` der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprachtags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefall, der ausgelöst wird, wenn die Erstellung des `Summarizer` aus einem anderen Grund fehlgeschlagen ist.

## Beispiele

### Einfaches Erstellen eines `Summarizer`

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
