---
title: "LanguageDetector: create() statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle erstellt eine neue `LanguageDetector`-Instanz zur Spracherkennung.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte umfassen:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, was die Genauigkeit der Spracherkennung verbessert. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprachcodes")}} sein. Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, die es ermöglicht, den Downloadfortschritt des KI-Modells zu überwachen.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es ermöglicht, eine `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Auswirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` vor der Auflösung des `create()`-Promises aufgerufen wird, wird die `create()`-Operation abgebrochen.
        - Wenn `abort()` nach der Erfüllung des `create()`-Promises aufgerufen wird, hat es die gleiche Auswirkung wie der Aufruf von [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy): Die Ressourcen, die der resultierenden `LanguageDetector`-Instanz zugewiesen wurden, werden freigegeben, und alle laufenden und nachfolgenden `LanguageDetector`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `LanguageDetector`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk war nicht verfügbar, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()`-Methode nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprachcodes ungültig oder nicht unterstützt sind.
    - Kein KI-Modell zur Unterstützung der angegebenen `expectedInputLanguages` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Zweckausnahmefehler, der ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus irgendeinem anderen Grund fehlgeschlagen ist.

## Beispiele

### Grundlegende Erstellung eines `LanguageDetector`

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
