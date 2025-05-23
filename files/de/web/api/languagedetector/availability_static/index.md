---
title: "LanguageDetector: `availability()` statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}

Die **`availability()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das Browser-AI-Modell eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, dessen Sprache erkannt werden soll. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie im [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben). Standardmäßig `["en"]`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert aufgelöst wird, der angibt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein AI-Modell oder einige Feineinstellungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst einen laufenden Download abschließen.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des AI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus irgendeinem anderen Grund oder einem Grund, den der User-Agent nicht offenlegen möchte, fehlgeschlagen ist.

Wenn die Nutzung der Methode durch ein {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert ist, wird das Promise mit einem Wert von `unavailable` abgelehnt.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Schnipsel prüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mittels der `availability()` Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir mit der [`create()`](/de/docs/Web/API/LanguageDetector/create_static) Methode einen Sprachdetektor und übergeben ihm die `expectedInputLanguages`. Das erforderliche AI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal einschließlich eines `monitor`, der das heruntergeladene Prozent des Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

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
    monitor: (monitor) => {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const detector = await getDetector(["en-US", "zh"]);
```

### Erkennung der Sprachunterstützung

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
