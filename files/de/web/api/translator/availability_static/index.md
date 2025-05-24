---
title: "Translator: `availability()` statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die statische Methode **`availability()`** der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingabetexts angibt, der ein gültiges [BCP 47-Sprachtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein sollte (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt werden soll, der ebenfalls ein gültiges BCP 47-Sprachtag sein sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem enumerierten Wert erfüllt, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, falls die Unterstützung nicht ermittelt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort genutzt werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch erst einen laufenden Download abschließen, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlschlug, oder einem Grund, den der Benutzeragent nicht offenlegen wollte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist, schlägt das Versprechen mit einem Wert von `unavailable` fehl.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Snippet prüfen wir zunächst die Verfügbarkeit des Modells zum Übersetzen zwischen zwei Sprachen mit der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der [`create()`](/de/docs/Web/API/Translator/create_static)-Methode, indem wir die Quell- und Zielsprache übergeben. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort nutzen können.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal inkludieren wir einen `monitor`, der das prozentuale Herunterladen des Modells jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

- [Verwendung der Translator- und Sprachdetektor-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
