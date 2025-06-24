---
title: "Summarizer: `availability()` statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das Browser-KI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` angibt. Mögliche Werte umfassen:
    - `expectedInputLanguages`
      - : Ein Array von Strings, das den [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) entspricht (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert) und die erwarteten Sprachen des Eingabetextes angibt. Standard ist `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Strings, das den BCP 47 Sprach-Tags entspricht und die erwarteten Sprachen von bereitgestellten Kontext-Strings angibt (entweder der [`sharedContext`](/de/docs/Web/API/Summarizer/create_static#sharedcontext), der dem `Summarizer` übergeben wird, oder ein `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird). Standard ist `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Zusammenfassungen zurückgegeben werden sollen. Standard ist `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standard ist `short`.
    - `outputLanguage`
      - : Ein String, der einem BCP 47 Sprach-Tag entspricht und die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt. Standard ist `en`.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erstellen soll. Standard ist `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Summarizer`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht festgestellt werden konnte.

Mögliche Werte umfassen:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein KI-Modell oder einige Daten zur Feinabstimmung des Modells herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verwendung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, falls der `measureInputUsage()`-Aufruf aus irgendeinem anderen Grund fehlgeschlagen ist oder einem Grund, den der Benutzeragent nicht bekannt geben wollte.

## Beispiele

### Grundlegende Verwendung von `availability()`

```js
async function getSummarizer() {
  const options = {
    sharedContext: "This is a scientific article",
    type: "key-points",
    format: "markdown",
    length: "medium",
  };

  const availability = await Summarizer.availability(options);
  if (availability === "unavailable") {
    // The Summarizer API isn't usable
    return undefined;
  } else if (availability === "available") {
    // The Summarizer API can be used immediately
    return Summarizer.create(options);
  }
  // The Summarizer API can be used after the model is downloaded
  const summarizer = await Summarizer.create(options);
  summarizer.addEventListener("downloadprogress", (e) => {
    console.log(`Downloaded ${e.loaded * 100}%`);
  });
  return summarizer;
}
```

### Erkennung von Sprachunterstützung

```js
async function langSupport(lang) {
  const availability = await Summarizer.availability({
    expectedInputLanguages: [lang],
  });
  return availability;
}

langSupport("en-US");
langSupport("fr");
langSupport("zh-CN");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
