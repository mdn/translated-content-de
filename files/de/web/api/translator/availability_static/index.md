---
title: "Translator: availability() statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator` Konfiguration anzeigt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`

  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` angibt. Mögliche Werte sind:

    - `sourceLanguage`
      - : Ein String, der die Sprache des Eingabetextes angibt, der übersetzt werden soll. Dies sollte ein gültiges [BCP 47 Sprach-Tag](https://de.wikipedia.org/wiki/IETF-Sprachcode#Liste_von_h%C3%A4ufigen_prim%C3%A4ren_Sprach-Tags) sein (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert).
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt werden soll, und der ein gültiges BCP 47 Sprach-Tag sein sollte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem enumerierten Wert erfüllt, der angibt, ob Unterstützung für eine gegebene `Translator` Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und sie kann sofort genutzt werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein KI-Modell oder einige Feindaten für das Modell heruntergeladen werden.
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
  - : Wird ausgelöst, wenn der `availability()`-Aufruf aus einem anderen Grund fehlgeschlagen ist, oder aus einem Grund, den der Nutzer-Agent nicht offenlegen wollte.

Wenn die Nutzung der Methode durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert wird, lehnt das Promise mit einem Wert von `unavailable` ab.

## Beispiele

### Grundlegende Verwendung von `availability()`

Im folgenden Beispiel überprüfen wir zuerst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der Methode `availability()`:

- Wenn sie `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn sie `available` zurückgibt, erstellen wir einen Translator mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), indem wir die Quell- und Zielsprachen übergeben. Das erforderliche KI-Modell ist verfügbar, daher können wir es sofort verwenden.
- Wenn sie einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, jedoch diesmal mit einem `monitor`, der jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis ausgelöst wird, den Prozentsatz des heruntergeladenen Modells protokolliert.

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

### Erkennung von Sprachunterstützung

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
