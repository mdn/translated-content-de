---
title: "Translator: Methode create()"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`**-Methode des [`Translator`](/de/docs/Web/API/Translator)-Interfaces erstellt eine neue `Translator`-Instanz, die verwendet werden kann, um Text zu übersetzen.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die erwartete Sprache des zu übersetzenden Eingabetextes angibt und ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein sollte.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird. Auch dieser sollte ein gültiger BCP 47 Sprach-Tag sein.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt-Instanz, die es ermöglicht, eine `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` aufgerufen wird, bevor das `create()`-Versprechen aufgelöst wird, wird die `create()`-Operation abgebrochen.
        - Wenn `abort()` aufgerufen wird, nachdem das `create()`-Versprechen erfüllt wurde, hat es denselben Effekt wie ein Aufruf von [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy): Die Ressourcen, die der resultierenden `Translator`-Instanz zugewiesen sind, werden freigegeben, und alle laufenden und nachfolgenden `Translator`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `Translator`-Objekt-Instanz erfüllt wird.

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
    - Die in `sourceLanguage` oder `targetLanguage` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind. Dies ist der Fall, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind.
    - Kein KI-Modell für die Unterstützung der angegebenen Kombination von `sourceLanguage` und `targetLanguage` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmetyp, der ausgelöst wird, wenn die Erstellung des `Translator` aus irgendeinem anderen Grund fehlgeschlagen ist.

## Beispiele

### Basis-Erstellung eines `Translator`

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
