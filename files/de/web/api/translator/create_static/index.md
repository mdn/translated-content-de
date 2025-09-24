---
title: "Translator: `create()` statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle erstellt eine neue `Translator`-Instanz, die verwendet werden kann, um Text zu übersetzen.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte sind:
    - `sourceLanguage`
      - : Eine Zeichenkette, die die erwartete Sprache des zu übersetzenden Eingangstextes angibt und ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}} sein sollte.
    - `targetLanguage`
      - : Eine Zeichenkette, die die Sprache angibt, in die der Eingangstext übersetzt wird und ebenfalls ein gültiges BCP 47-Sprachtag sein sollte.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es erlaubt, die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Die Verwendung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist.
    - Der Benutzer den Download des KI-Modells in irgendeiner Weise blockiert hat.
    - Die `create()`-Methode nicht durch eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprachtags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn `sourceLanguage` und `targetLanguage` gleich sind.
    - Ein KI-Modell zur Unterstützung der angegebenen Kombination von `sourceLanguage` und `targetLanguage` nicht verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefehler, wenn die Erstellung des `Translator` aus irgendeinem anderen Grund fehlgeschlagen ist.

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
