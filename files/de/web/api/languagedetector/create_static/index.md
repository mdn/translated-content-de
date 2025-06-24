---
title: "LanguageDetector: `create()` statische Methode"
short-title: create()
slug: Web/API/LanguageDetector/create_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`create()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle erstellt eine neue `LanguageDetector`-Instanz zur Erkennung von Sprachen.

> [!NOTE]
> Die `create()`-Methode erfordert {{Glossary("Transient_activation", "transienten Aktivierung")}}, das heißt, sie muss als Reaktion auf eine Benutzeraktion wie einen Mausklick oder das Drücken einer Taste aufgerufen werden.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetexts angibt, was hilft, die Genauigkeit der Spracherkennung zu verbessern. Diese sollten gültige [BCP 47-Sprachtags](https://de.wikipedia.org/wiki/IETF-Sprachcode#Liste_h%C3%A4ufiger_prim%C3%A4rer_Sprachtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben) sein. Standardwert ist `["en"]`.
    - `monitor` {{optional_inline}}
      - : Eine Callback-Funktion mit einem [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Argument, das die Überwachung des Downloadfortschritts des KI-Modells ermöglicht.
    - `signal` {{optional_inline}}
      - : Eine Instanz des [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekts, die es ermöglicht, den `create()`-Vorgang über den zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) abzubrechen.

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
    - Die Verwendung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird.
    - Der Benutzer den Download des KI-Modells auf irgendeine Weise blockiert hat.
    - Die `create()`-Methode nicht durch {{Glossary("transient_activation", "transiente Aktivierung")}} aufgerufen wurde.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die in `expectedInputLanguages` angegebenen Sprachcodes ungültig oder nicht unterstützt sind.
    - Kein KI-Modell zur Unterstützung der angegebenen `expectedInputLanguages` verfügbar ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Allzweck-Ausnahme, die ausgelöst wird, wenn die Erstellung des `LanguageDetector` aus einem anderen Grund fehlgeschlagen ist.

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

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
