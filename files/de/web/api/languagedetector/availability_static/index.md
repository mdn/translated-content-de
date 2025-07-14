---
title: "LanguageDetector: `availability()` statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`availability()`** der Schnittstelle [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) gibt einen enumerierten Wert zurück, der angibt, ob das Browser-AI-Modell eine bestimmte `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` spezifiziert. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes spezifiziert, dessen Sprache erkannt werden soll. Diese sollten gültige [BCP 47 Sprach-Tags](https://de.wikipedia.org/wiki/IETF-Sprachcode#Liste_g%C3%A4ngiger_prim%C3%A4rer_Sprachuntercodes) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert). Standardmäßig `["en"]`

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine bestimmte `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die angegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die angegebene Konfiguration, muss jedoch zuerst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die angegebene Konfiguration, muss den laufenden Download jedoch abschließen, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die angegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des AI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()` Aufruf aus einem anderen Grund fehlgeschlagen ist, oder einem Grund, den der Benutzeragent nicht offenlegen wollte.

Wenn die Verwendung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}} blockiert wird, lehnt das Promise mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Ausschnitt überprüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mit der Methode `availability()`:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in die Konsole aus.
- Wenn es `available` zurückgibt, erstellen wir einen Sprachdetektor mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static) und übergeben ihm die `expectedInputLanguages`. Das erforderliche AI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, jedoch diesmal mit einem `monitor`, der den Prozentsatz des heruntergeladenen Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
