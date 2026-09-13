---
title: "Translator: create() statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`create()`** der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle erstellt eine neue `Translator` Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die Methode `create()` erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck ausgelöst werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingangstextes angibt, und ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein sollte.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt wird, und ebenfalls ein gültiges BCP 47 Sprach-Tag sein sollte.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das die Überwachung des Downloadfortschritts des AI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, eine `create()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` aufgerufen wird, bevor das `create()` Versprechen erfüllt wird, wird die `create()` Operation abgebrochen.
        - Wenn `abort()` aufgerufen wird, nachdem das `create()` Versprechen erfüllt wurde, hat es die gleiche Wirkung wie ein Aufruf von [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy): Die für die resultierende `Translator` Instanz zugewiesenen Ressourcen werden freigegeben, und alle laufenden und nachfolgenden `Translator` Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einer `Translator` Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das AI-Modell herunterzuladen.
    - Der Benutzer den Download des AI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des AI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()` Methode nicht durch {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn die angegebene `sourceLanguage` und `targetLanguage` gleich sind.
    - Kein AI-Modell zur Unterstützung der angegebenen Kombination von `sourceLanguage` und `targetLanguage` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Zweckfehler, der ausgelöst wird, wenn die Erstellung des `Translator` aus einem anderen Grund fehlschlägt.

## Beispiele

### Grundlegende `Translator` Erstellung

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
