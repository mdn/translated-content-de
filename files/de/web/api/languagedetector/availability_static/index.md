---
title: "LanguageDetector: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die statische Methode **`availability()`** der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das Browser-AI-Modell eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` spezifiziert. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenketten, das die erwarteten Sprachen des Eingabetexts angibt, dessen Sprache erkannt werden soll. Diese sollten gültige [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standardmäßig `["en"]`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, aber ein laufender Download muss abgeschlossen sein, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlschlug oder einem Grund, den der Benutzeragent nicht offenlegen wollte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird, lehnt das Promise mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Ausschnitt überprüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mit der Methode `availability()`:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in der Konsole aus.
- Wenn es `available` zurückgibt, erstellen wir einen Sprachdetektor mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), indem wir die `expectedInputLanguages` übergeben. Das erforderliche KI-Modell ist verfügbar, also können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben Aufruf der Methode `create()` aus, aber diesmal mit einem `monitor`, der den Prozentsatz des heruntergeladenen Modells protokolliert, jedes Mal wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

- [Verwendung der Übersetzer- und Sprachdetektor-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
