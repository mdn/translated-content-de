---
title: "Translator: availability() statische Methode"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`availability()`** statische Methode der [`Translator`](/de/docs/Web/API/Translator) Schnittstelle gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen für den `Translator` spezifiziert. Mögliche Werte sind:
    - `sourceLanguage`
      - : Ein String, der die Sprache des zu übersetzenden Eingabetextes angibt, und sollte ein gültiger {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein.
    - `targetLanguage`
      - : Ein String, der die Sprache angibt, in die der Eingabetext übersetzt wird, und sollte ein gültiger BCP 47 Sprach-Tag sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Translator`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann unmittelbar verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein KI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor es weitergehen kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht. Dieser Wert wird auch zurückgegeben, wenn die angegebenen `sourceLanguage` und `targetLanguage` identisch sind oder wenn die Translator API durch eine {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}} blockiert ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Document`](/de/docs/Web/API/Document) der Seite noch nicht aktiv ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Initialisierung des KI-Modells aus irgendeinem Grund fehlschlägt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `availability()` Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht mitteilen wollte.

## Beispiele

### Grundlegende `availability()` Verwendung

Im folgenden Beispiel prüfen wir zunächst die Verfügbarkeit des Modells für die Übersetzung zwischen zwei Sprachen mit der `availability()` Methode:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in die Konsole.
- Wenn es `available` zurückgibt, erstellen wir einen Translator mit der [`create()`](/de/docs/Web/API/Translator/create_static) Methode, indem wir die Quell- und Zielsprache übergeben. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()` Methodenaufruf durch, aber diesmal mit einem `monitor`, der den Prozentsatz des heruntergeladenen Modells bei jedem Auftreten des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignisses protokolliert.

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

### Unterstützung von Sprachen erkennen

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
