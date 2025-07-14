---
title: "LanguageDetector: create() statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle erstellt eine neue `LanguageDetector` Instanz zur Erkennung von Sprachen.

> [!NOTE]
> Die `create()` Methode erfordert {{Glossary("Transient_activation", "transiente Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen des Eingabetextes angibt, was hilft, die Genauigkeit der Spracherkennung zu verbessern. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) sein. Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Argument, die das Überwachen des Download-Fortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt, das die `create()` Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abbrechen lässt.

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
    - Die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert ist.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()` Methode nicht durch {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind.
    - Kein KI-Modell zur Unterstützung der angegebenen `expectedInputLanguages` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeine Ausnahme, die ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus irgendeinem anderen Grund fehlschlägt.

## Beispiele

### Grundlegende `LanguageDetector` Erstellung

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

- [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
