---
title: "Translator: `create()` statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: caa4012f6c46e355ad9840a3603ab69cb436d36f
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle erstellt eine neue `Translator`-Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder einen Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingabetextes angibt, und der ein gültiges [BCP 47-Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein sollte.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird, und der ein gültiges BCP 47-Sprach-Tag sein sollte.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das das Monitoring des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()`-Methode nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn die angegebenen `sourceLanguage` und `targetLanguage` gleich sind.
    - Kein KI-Modell zur Unterstützung der angegebenen Kombination von `sourceLanguage` und `targetLanguage` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Translator` aus einem anderen Grund fehlschlug.

## Beispiele

### Grundlegende `Translator`-Erstellung

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

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
