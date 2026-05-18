---
title: "LanguageDetector: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`availability()`** statische Methode des [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interfaces gibt einen enumerierten Wert zurück, der anzeigt, ob das Browser-AI-Modell eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` spezifiziert. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Strings, das die erwarteten Sprachen des Eingabetextes angibt, deren Sprache erkannt werden soll. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} sein. Standardmäßig auf `["en"]` gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht festgestellt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht, oder die Language Detector API wird durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des AI-Modells aus irgendeinem Grund fehlschlägt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlschlägt, oder aus einem Grund, den der Benutzeragent nicht bekannt geben wollte.

## Beispiele

### Grundlegende `availability()`-Nutzung

Im folgenden Beispiel überprüfen wir zunächst die Verfügbarkeit des Modells für die Erkennung einiger Sprachen mit der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static) einen Sprachdetektor und übergeben ihm die `expectedInputLanguages`. Das erforderliche AI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal fügen wir einen `monitor` hinzu, der den Prozentsatz des Modells protokolliert, der jedes Mal heruntergeladen wird, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

```js
async function getDetector(languages) {
  const availability = await LanguageDetector.availability({
    expectedInputLanguages: languages,
  });
  if (availability === "unavailable") {
    console.log(`Detection not supported; try a different set of languages.`);
    return undefined;
  } else if (availability === "available") {
    return await LanguageDetector.create({
      expectedInputLanguages: languages,
    });
  }
  return await LanguageDetector.create({
    expectedInputLanguages: languages,
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const detector = await getDetector(["en-US", "zh"]);
```

### Erkennung von Sprachunterstützung

```js
async function langSupport(language) {
  const availability = await LanguageDetector.availability({
    expectedInputLanguages: [language],
  });
  return availability;
}

await langSupport("en");
await langSupport("pt");
await langSupport("zh");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
