---
title: "Translator: create() statische Methode"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`create()`** der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle erstellt eine neue `Translator` Instanz, die zum Übersetzen von Text verwendet werden kann.

> [!NOTE]
> Die Methode `create()` erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingabetextes angibt, und sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird, und sollte ebenfalls ein gültiges BCP 47 Sprach-Tag sein.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, die das Monitoring des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekts, die es ermöglicht, einen `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` aufgerufen wird, bevor das `create()`-Versprechen aufgelöst wird, wird der `create()`-Vorgang abgebrochen.
        - Wenn `abort()` aufgerufen wird, nachdem das `create()`-Versprechen erfüllt wurde, hat dies die gleiche Wirkung wie ein Aufruf von [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy): Die Ressourcen, die der resultierenden `Translator`-Instanz zugewiesen sind, werden freigegeben, und laufende sowie nachfolgende `Translator`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator` Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den KI-Modell Download abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()`-Methode nicht durch {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig sind oder nicht unterstützt werden. Dies ist der Fall, wenn die angegebene `sourceLanguage` und `targetLanguage` gleich sind.
    - Ein KI-Modell zur Unterstützung der angegebenen Kombination aus `sourceLanguage` und `targetLanguage` nicht verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `Translator` aus einem anderen Grund fehlgeschlagen ist.

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

- [Verwenden der Translator- und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
