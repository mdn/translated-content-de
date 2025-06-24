---
title: "LanguageDetector: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`** statische Methode der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das AI-Modell des Browsers eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die Konfigurationsoptionen für den `LanguageDetector` spezifiziert. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, die die erwarteten Sprachen des Eingabetextes angeben, dessen Sprache erkannt werden soll. Diese sollten gültige [BCP 47-Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standardmäßig `["en"]`

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zunächst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des AI-Modells aus irgendeinem Grund fehlschlägt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund oder aus einem Grund, den der User-Agent nicht offenlegen wollte, fehlschlägt.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird, schlägt das Promise mit einem Wert von `unavailable` fehl.

## Beispiele

### Grundlegende `availability()`-Nutzung

Im folgenden Code-Snippet prüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mit der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, wird eine entsprechende Fehlermeldung in die Konsole ausgegeben.
- Wenn es `available` zurückgibt, erstellen wir einen Sprachdetektor mithilfe der [`create()`](/de/docs/Web/API/LanguageDetector/create_static)-Methode und übergeben die `expectedInputLanguages`. Das erforderliche AI-Modell ist verfügbar, sodass wir es sofort nutzen können.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, schließen diesmal jedoch einen `monitor` ein, der den Prozentsatz des heruntergeladenen Modells protokolliert, jedes Mal wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
