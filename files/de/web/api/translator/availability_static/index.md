---
title: "Translator: `availability()`-Methoden"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: caa4012f6c46e355ad9840a3603ab69cb436d36f
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`**-Methoden der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration anzeigt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` festlegt. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingabetextes spezifiziert, und der einen gültigen [BCP 47-Sprachtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) darstellen sollte (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) definiert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt werden soll, und der einen gültigen BCP 47-Sprachtag darstellen sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, er muss jedoch zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss aber einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` gleich sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund oder einem Grund, den der User-Agent nicht offenlegen möchte, fehlgeschlagen ist.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist, wird das Versprechen mit einem Wert von `unavailable` abgelehnt.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Beispiel überprüfen wir zunächst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mittels der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in die Konsole aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mithilfe der [`create()`](/de/docs/Web/API/Translator/create_static)-Methode, der die Quell- und Zielsprachen übergibt. Das erforderliche KI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal schließen wir einen `monitor` ein, der den Prozentsatz des heruntergeladenen Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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
    monitor: (monitor) => {
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

### Erkennen der Sprachunterstützung

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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
