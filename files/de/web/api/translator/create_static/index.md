---
title: "`create()` statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle erstellt eine neue `Translator`-Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` festlegt. Mögliche Werte umfassen:
    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingangstextes angibt. Es sollte ein gültiges [BCP 47-Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt wird. Es sollte ein gültiges BCP 47-Sprach-Tag sein.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das das Überwachen des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk war nicht verfügbar, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()`-Methode nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind.
    - Kein KI-Modell zur Unterstützung der angegebenen Kombination aus `sourceLanguage` und `targetLanguage` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefall, der ausgelöst wird, wenn die Erstellung des `Translator` aus irgendeinem anderen Grund fehlschlägt.

## Beispiele

### Grundlegende Erstellung eines `Translator`

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
