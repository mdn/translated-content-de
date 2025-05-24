---
title: "LanguageDetector: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die statische Methode **`availability()`** der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle gibt einen enumerierten Wert zurück, der anzeigt, ob das KI-Modell des Browsers eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, dessen Sprache erkannt werden soll. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standard ist `["en"]`

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber er muss zuerst ein KI-Modell oder einige Feindaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, aber er muss einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()` Aufruf aus einem anderen Grund oder einem Grund, den der Benutzeragent nicht offenlegen wollte, fehlgeschlagen ist.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird, lehnt das Versprechen mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Code-Ausschnitt prüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mit der `availability()` Methode:

- Wenn es `unavailable` zurückgibt, wird eine entsprechende Fehlermeldung in die Konsole ausgegeben.
- Wenn es `available` zurückgibt, erstellen wir einen Sprachdetektor mit der [`create()`](/de/docs/Web/API/LanguageDetector/create_static) Methode, indem wir ihm die `expectedInputLanguages` übergeben. Das benötigte KI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()` Methodeaufruf aus, aber diesmal schließen wir einen `monitor` ein, der den Prozentsatz des heruntergeladenen Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

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
