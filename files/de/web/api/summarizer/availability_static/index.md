---
title: "Summarizer: availability() statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{securecontext_header}}

Die statische Methode **`availability()`** der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt einen enumerierten Wert zurück, der anzeigt, ob das Browser-AI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` angibt. Mögliche Werte beinhalten:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen, die den [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) entsprechen (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert), das die erwarteten Sprachen des Eingangstextes angibt. Standard ist `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen, die den BCP 47 Sprach-Tags entsprechen und die erwarteten Sprachen für alle bereitgestellten Kontextzeichenfolgen angeben (entweder den [`sharedContext`](#sharedContext), der dem `Summarizer` übergeben wird, oder einen während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs spezifizierten `context`). Standard ist `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie Zusammenfassungen erhalten möchten. Standard ist `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen angibt. Standard ist `short`.
    - `outputLanguage`
      - : Eine Zeichenkette, die einem BCP 47 Sprach-Tag entspricht und die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen angibt. Standard ist `en`.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` generieren soll. Standard ist `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Summarizer`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

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
  - : Wird ausgelöst, wenn die Verwendung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()` Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzeragent nicht offenlegen wollte.

## Beispiele

### Grundlegende Nutzung von `availability()`

```js
const options = {
  sharedContext: "This is a scientific article",
  type: "key-points",
  format: "markdown",
  length: "medium",
};

const availability = await Summarizer.availability(options);
let summarizer;
if (availability === "unavailable") {
  // The Summarizer API isn't usable
  return;
} else if (availability === "available") {
  // The Summarizer API can be used immediately
  summarizer = await Summarizer.create(options);
} else {
  // The Summarizer API can be used after the model is downloaded
  summarizer = await Summarizer.create(options);
  summarizer.addEventListener("downloadprogress", (e) => {
    console.log(`Downloaded ${e.loaded * 100}%`);
  });
}
```

### Erkennung der Sprachunterstützung

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
