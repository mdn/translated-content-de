---
title: "Translator: availability() static method"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt einen Aufzählungswert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration anzeigt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingangstextes angibt und ein gültiges [BCP 47-Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein sollte (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt werden soll, und ein gültiges BCP 47-Sprach-Tag sein sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Aufzählungswert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zunächst ein KI-Modell oder einige Feindaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebene `sourceLanguage` und `targetLanguage` gleich sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund oder einem Grund, den der Benutzeragent nicht offenlegen wollte, fehlgeschlagen ist.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird, wird das Promise mit einem Wert von `unavailable` abgelehnt.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Ausschnitt prüfen wir zuerst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der `availability()`-Methode:

- Wenn `unavailable` zurückgegeben wird, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn `available` zurückgegeben wird, erstellen wir einen Translator mit der [`create()`](/de/docs/Web/API/Translator/create_static)-Methode, indem wir die Quell- und Zielsprache angeben. Das benötigte KI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn ein anderer Wert zurückgegeben wird (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells protokolliert, jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

- [Verwendung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
