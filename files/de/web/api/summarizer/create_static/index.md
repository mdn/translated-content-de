---
title: "Summarizer: create() statische Methode"
short-title: create()
slug: Web/API/Summarizer/create_static
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle erstellt eine neue `Summarizer`-Instanz, um Zusammenfassungen zu generieren.

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
      - : Ein Array von Zeichenfolgen, die die erwarteten Sprachen des Eingabetextes angeben. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} sein. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, die die erwarteten Sprachen aller bereitgestellten Kontexttexte angeben (entweder der [`sharedContext`](#sharedcontext), der dem `Summarizer` übergeben wurde, oder ein `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs angegeben wurde). Diese sollten gültige BCP 47-Sprachtags sein. Standardmäßig `["en"]`.
    - `format`
      - : Ein Aufzählungswert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie die Zusammenfassungen zurückgeben möchten. Standardmäßig `markdown`.
    - `length`
      - : Ein Aufzählungswert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die erzeugten Zusammenfassungen angibt. Standardmäßig `short`.
    - `monitor`
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das es ermöglicht, den Download-Fortschritt des KI-Modells zu überwachen.
    - `outputLanguage`
      - : Eine Zeichenfolge, die die erwartete Sprache der vom `Summarizer` erzeugten Zusammenfassungen angibt, die ein gültiges BCP 47-Sprachtag sein sollte. Standardmäßig `en`.
    - `sharedContext`
      - : Eine [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) Zeichenfolge, die den Kontext beschreibt, in dem die zusammenzufassenden Textstücke verwendet werden. Dies hilft dem `Summarizer`, geeignetere Zusammenfassungen zu erstellen.
    - `signal`
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, eine `create()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` vor der Auflösung des `create()`-Promise aufgerufen wird, wird die `create()`-Operation abgebrochen.
        - Wenn `abort()` nach Erfüllung des `create()`-Promise aufgerufen wird, hat es den gleichen Effekt wie ein Aufruf von [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy): Die Ressourcen der resultierenden `Summarizer`-Instanz werden freigegeben, und laufende sowie nachfolgende `Summarizer`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.
    - `type`
      - : Ein Aufzählungswert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erzeugen soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Summarizer`-Objektinstanz erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Summarizer API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eines der in `expectedContextLanguages`, `expectedInputLanguages` oder `outputLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Summarizer` aus irgendeinem anderen Grund fehlschlägt.

## Beispiele

### Grundlegendes `Summarizer`-Erstellung

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
- [Web KI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
