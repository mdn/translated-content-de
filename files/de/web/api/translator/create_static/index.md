---
title: "Übersetzer: `create()` statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}

Die **`create()`** statische Methode des [`Translator`](/de/docs/Web/API/Translator) Interfaces erstellt eine neue `Translator` Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die `create()` Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte umfassen:

    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingangstextes angibt und ein gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben) sein sollte.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt wird, und ebenfalls ein gültiges BCP 47 Sprach-Tag sein sollte.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das es ermöglicht, den Downloadfortschritt des KI-Modells zu überwachen.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die ermöglicht, die `create()` Operation via des zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator` Objektinstanz erfüllt wird.

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
    - Der Benutzer den Download des KI-Modells in irgendeiner Weise blockiert hat.
    - Die `create()` Methode nicht durch {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn das angegebene `sourceLanguage` und `targetLanguage` identisch sind.
    - Kein KI-Modell zur Unterstützung der angegebenen Kombination von `sourceLanguage` und `targetLanguage` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Translator` aus einem anderen Grund fehlgeschlagen ist.

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
