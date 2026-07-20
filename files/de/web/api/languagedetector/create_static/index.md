---
title: "LanguageDetector: create() statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle erstellt eine neue `LanguageDetector` Instanz, um Sprachen zu erkennen.

> [!NOTE]
> Die `create()` Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` spezifiziert. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, was die Genauigkeit der Spracherkennung verbessert. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein. Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, das die Überwachung des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objektinstanz, die es erlaubt, einen `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen. Die genaue Wirkung hängt davon ab, wann [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufgerufen wird:
        - Wenn `abort()` aufgerufen wird, bevor das `create()` Versprechen aufgelöst wird, wird der `create()`-Vorgang abgebrochen.
        - Wenn `abort()` aufgerufen wird, nachdem das `create()` Versprechen erfüllt wurde, hat es die gleiche Wirkung wie der Aufruf von [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy): Die Ressourcen, die der resultierenden `LanguageDetector` Instanz zugewiesen sind, werden freigegeben, und alle laufenden und folgenden `LanguageDetector` Methodenaufrufe werden mit einem `AbortError` abgelehnt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer `LanguageDetector` Objektinstanz erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Das Netzwerk nicht verfügbar war, um das KI-Modell herunterzuladen.
    - Der Benutzer den Download des KI-Modells abgebrochen hat.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die Nutzung der Methode von einer {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()` Methode nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind.
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

- [Verwendung der Übersetzer- und Spracherkennungsschnittstellen](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
