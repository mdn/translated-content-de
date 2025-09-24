---
title: "LanguageDetector: availability() statische Methode"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`availability()`** der [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle gibt einen enumerierten Wert zurück, der anzeigt, ob das Browser-AI-Modell eine gegebene `LanguageDetector`-Konfiguration unterstützt.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `LanguageDetector` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, das die erwarteten Sprachen des Eingabetextes angibt, dessen Sprache erkannt werden soll. Diese sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} sein. Voreinstellung ist `["en"]`

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `LanguageDetector`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht ermittelt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein AI-Modell heruntergeladen werden oder einige Feinabstimmungen für das Modell benötigt werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss ein laufender Download abgeschlossen werden, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des AI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlgeschlagen ist oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/language-detector','language-detector')}}-{{httpheader("Permissions-Policy")}} blockiert wird, wird das Versprechen mit einem Wert von `unavailable` abgelehnt.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Beispiel überprüfen wir zunächst die Verfügbarkeit des Modells zur Erkennung einiger Sprachen mit der `availability()`-Methode:

- Wenn sie `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in die Konsole aus.
- Wenn sie `available` zurückgibt, erstellen wir einen Sprachenerkenner mit der [`create()`](/de/docs/Web/API/LanguageDetector/create_static)-Methode unter Übergabe der `expectedInputLanguages`. Das benötigte AI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn sie einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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
