---
title: "Translator: create() statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle erstellt eine neue `Translator`-Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die `create()`-Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingabetextes angibt und ein gültiger [BCP 47 Sprach-Tag](https://de.wikipedia.org/wiki/IETF-Sprachcode) (wie im [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein sollte.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird, und ein gültiger BCP 47 Sprach-Tag sein sollte.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt, das es ermöglicht, den `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die Verwendung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist.
    - Der Benutzer hat den Download des KI-Modells auf irgendeine Weise blockiert.
    - Die `create()`-Methode wurde nicht über {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprache-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind.
    - Kein KI-Modell verfügbar ist, um die angegebene Kombination von `sourceLanguage` und `targetLanguage` zu unterstützen.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Translators` aus einem anderen Grund fehlgeschlagen ist.

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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
