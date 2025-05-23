---
title: "Translator: `availability()` statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}

Die **`availability()`** statische Methode des [`Translator`](/de/docs/Web/API/Translator)-Interfaces gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingabetextes angibt. Dies sollte ein gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt werden soll. Dies sollte ein gültiges BCP 47 Sprach-Tag sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlschlägt oder einem Grund, den der Benutzeragent nicht offenlegen möchte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird, schlägt das Promise mit dem Wert `unavailable` fehl.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Abschnitt prüfen wir zuerst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der `availability()`-Methode:

- Wenn `unavailable` zurückgegeben wird, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn `available` zurückgegeben wird, erstellen wir einen Übersetzer mit der [`create()`](/de/docs/Web/API/Translator/create_static) Methode und übergeben die Quell- und Zielsprache. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort nutzen können.
- Wenn ein anderer Wert zurückgegeben wird (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der den Prozentsatz der heruntergeladenen Modelle jedes Mal protokolliert, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

```js
const availability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
let translator;

if (availability === "unavailable") {
  console.log(
    `Translation not supported; try a different language combination.`,
  );
  return;
} else if (availability === "available") {
  translator = await Translator.create({
    sourceLanguage: "en",
    targetLanguage: "ja",
  });
} else {
  translator = await Translator.create({
    sourceLanguage: "en",
    targetLanguage: "ja",
    monitor: (monitor) => {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}
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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
