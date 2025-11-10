---
title: "Translator: availability() statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`availability()`** der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` festlegt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die Sprache des Eingabetextes spezifiziert, der übersetzt werden soll. Diese sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird. Diese sollte ein gültiges BCP 47 Sprach-Tag sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem enumerierten Wert erfüllt, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, es muss jedoch zunächst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, es muss jedoch ein laufender Download abgeschlossen werden, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` gleich sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund als fehlgeschlagen markiert wird oder wenn ein Grund nicht offengelegt werden sollte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist, lehnt das Promise mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Beispiel prüfen wir zunächst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der [`create()`](/de/docs/Web/API/Translator/create_static)-Methode und übergeben die Quell- und Zielsprachen. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (das heißt `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

```js
async function getTranslator(languages) {
  const availability = await Translator.availability(languages);

  if (availability === "unavailable") {
    console.log(
      `Translation not supported; try a different language combination.`,
    );
    return undefined;
  } else if (availability === "available") {
    return await Translator.create(languages);
  }
  return await Translator.create({
    ...languages,
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const translator = await getTranslator({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### Erkennung der Sprachunterstützung

```js
async function langSupport(source, target) {
  const availability = await Translator.availability({
    sourceLanguage: source,
    targetLanguage: target,
  });
  return availability;
}

await langSupport("en", "fr");
await langSupport("en", "pt");
await langSupport("en", "zh");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Übersetzungs- und Spracherkennung-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
