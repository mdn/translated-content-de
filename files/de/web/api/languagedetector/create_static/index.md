---
title: "LanguageDetector: create() statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle erstellt eine neue `LanguageDetector`-Instanz, um Sprachen zu erkennen.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transient activation")}}, das heißt, sie muss als Antwort auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, was hilft, die Genauigkeit der Spracherkennung zu verbessern. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 language tags")}} sein. Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es ermöglicht, eine `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` aufgerufen wird, bevor das `create()`-Promise gelöst wird, wird die `create()`-Operation abgebrochen.
        - Wenn `abort()` aufgerufen wird, nachdem das `create()`-Promise erfüllt wird, hat es die gleiche Wirkung wie das Aufrufen von [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy): Die dem resultierenden `LanguageDetector`-Instanz zugewiesenen Ressourcen werden freigegeben und alle laufenden und nachfolgenden `LanguageDetector`-Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `LanguageDetector`-Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert ist.
    - Der Benutzer auf irgendeine Weise den Download des KI-Modells blockiert hat.
    - Die `create()`-Methode nicht durch {{Glossary("transient_activation", "transient activation")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprachentags ungültig oder nicht unterstützt sind.
    - Ein KI-Modell zur Unterstützung der angegebenen `expectedInputLanguages` nicht verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus einem anderen Grund fehlgeschlagen ist.

## Beispiele

### Grundlegende `LanguageDetector`-Erstellung

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
