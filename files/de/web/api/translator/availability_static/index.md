---
title: "Translator: availability() statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`availability()`** des [`Translator`](/de/docs/Web/API/Translator)-Interfaces gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration anzeigt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingangstextes angibt. Es sollte ein gültiges [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben) sein.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingangstext übersetzt wird. Es sollte ein gültiges BCP 47 Sprach-Tag sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob die Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird) oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein KI-Modell oder einige Feindaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein laufender Download abgeschlossen werden.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebene `sourceLanguage` und `targetLanguage` gleich sind.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlgeschlagen ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte, fehlgeschlagen ist.

Sollte die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert sein, schlägt das Promise mit einem Wert von `unavailable` fehl.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Codeausschnitt prüfen wir zunächst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der `availability()`-Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der [`create()`](/de/docs/Web/API/Translator/create_static)-Methode, indem wir die Quell- und Zielsprachen übergeben. Das erforderliche KI-Modell ist verfügbar, also können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells protokolliert, jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird.

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

- [Verwendung der Translator- und Language-Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
