---
title: "LanguageDetector: `create()` statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`create()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle erstellt eine neue `LanguageDetector`-Instanz, um Sprachen zu erkennen.

> [!NOTE]
> Die `create()`-Methode erfordert {{Glossary("Transient_activation", "flüchtige Aktivierung")}}, d.h. sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder Tastendruck aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, um die Genauigkeit der Spracherkennung zu verbessern. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein. Standardmäßig `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, die das Überwachen des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objektinstanz, die es erlaubt, die `create()`-Operation über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

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
    - Der Benutzer den Download des KI-Modells irgendwie blockiert hat.
    - Die `create()`-Methode nicht durch {{Glossary("transient_activation", "flüchtige Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprach-Tags ungültig oder nicht unterstützt sind.
    - Kein KI-Modell verfügbar ist, um die angegebenen `expectedInputLanguages` zu unterstützen.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allgemeiner Ausnahmefehler, der ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus irgendeinem anderen Grund fehlgeschlagen ist.

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
