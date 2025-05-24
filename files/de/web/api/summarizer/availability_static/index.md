---
title: "Summarizer: availability() statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`availability()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das AI-Modell des Browsers eine gegebene `Summarizer`-Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` spezifiziert. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Strings, die [BCP 47 Sprachcodes](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) entsprechen (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) festgelegt), welches die erwarteten Sprachen des Eingabetexts angibt. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Strings, die BCP 47 Sprachcodes entsprechen und die erwarteten Sprachen der bereitgestellten Kontext-Strings angeben (entweder der [`sharedContext`](/de/docs/Web/API/Summarizer/create_static#sharedcontext), der an den `Summarizer` übergeben wird, oder ein während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs spezifizierter `context`). Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie Zusammenfassungen erhalten möchten. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standardmäßig `short`.
    - `outputLanguage`
      - : Ein String, der einem BCP 47 Sprachcode entspricht und die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt. Standardmäßig `en`.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der anzeigt, ob Unterstützung für eine gegebene `Summarizer`-Konfiguration verfügbar (oder verfügbar sein wird) ist, oder `null`, wenn die Unterstützung nicht festgestellt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft einen Fehler, wenn die Verwendung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft einen Fehler, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft einen Fehler, wenn der `measureInputUsage()`-Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht bekannt geben wollte.

## Beispiele

### Grundlegende `availability()`-Nutzung

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

### Erkennen der Sprachunterstützung

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

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
