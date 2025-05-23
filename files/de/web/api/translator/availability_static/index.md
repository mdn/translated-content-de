---
title: "Translator: Methode availability()"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}

Die statische Methode **`availability()`** der [`Translator`](/de/docs/Web/API/Translator)-Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration anzeigt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingangstextes angibt. Dieser sollte ein gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt werden soll. Dieser sollte ebenfalls ein gültiges BCP 47 Sprach-Tag sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem enumerierten Wert erfüllt, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, es muss jedoch zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, es muss jedoch ein laufender Download abgeschlossen werden, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` gleich sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlschlug.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `availability()` aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

Wenn die Verwendung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird, lehnt das Versprechen mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Nutzung von `availability()`

Im folgenden Codeausschnitt prüfen wir zunächst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der Methode `availability()`:

- Wenn `unavailable` zurückgegeben wird, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn `available` zurückgegeben wird, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static) und übergeben die Quell- und Zielsprache. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn ein anderer Wert zurückgegeben wird (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, fügen jedoch einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells protokolliert, jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

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

- [Verwendung der Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
