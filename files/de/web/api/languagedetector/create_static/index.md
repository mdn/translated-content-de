---
title: "LanguageDetector: create() static method"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: caa4012f6c46e355ad9840a3603ab69cb436d36f
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die statische Methode **`create()`** der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle erstellt eine neue `LanguageDetector`-Instanz zur Erkennung von Sprachen.

> [!NOTE]
> Die `create()`-Methode erfordert eine {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder das Drücken eines Buttons aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen des Eingabetextes angibt, was zur Verbesserung der Genauigkeit der Spracherkennung beiträgt. Diese sollten gültige [BCP 47-Sprachtags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine Instanz eines [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es erlaubt, den `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

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
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells in irgendeiner Weise blockiert hat.
    - Die `create()`-Methode nicht über eine {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprachtags ungültig oder nicht unterstützt sind.
    - Kein KI-Modell verfügbar ist, um die angegebenen `expectedInputLanguages` zu unterstützen.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefehler, der ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus einem anderen Grund fehlschlägt.

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

- [Verwendung der Übersetzer- und Spracherkennung-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
