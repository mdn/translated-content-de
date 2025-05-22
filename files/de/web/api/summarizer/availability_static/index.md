---
title: "Summarizer: availability() statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: 06263fe7058dcf5945d20eede345d04f84b08c8e
---

{{APIRef("Summarizer API")}}{{securecontext_header}}{{SeeCompatTable}}

Die statische Methode **`availability()`** der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das Browser-AI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` angibt. Mögliche Werte sind:

    - `expectedInputLanguages`
      - : Ein Array von Zeichenfolgen entsprechend den [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) angegeben), das die erwarteten Sprachen des Eingangstextes angibt. Standardmäßig `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenfolgen entsprechend den BCP 47 Sprach-Tags, das die erwarteten Sprachen der bereitgestellten Kontexthinweise angibt (entweder den [`sharedContext`](#sharedContext), der dem `Summarizer` übergeben wurde, oder einen `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize)- oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming)-Aufrufs angegeben wird). Standardmäßig `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie Zusammenfassungen erhalten möchten. Standardmäßig `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die erstellten Zusammenfassungen angibt. Standardmäßig `short`.
    - `outputLanguage`
      - : Eine Zeichenfolge entsprechend einem BCP 47 Sprach-Tag, die die erwartete Sprache der vom `Summarizer` erstellten Zusammenfassungen angibt. Standardmäßig `en`.
    - `type`
      - : Ein enumerierter Wert, der die [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung angibt, die dieser `Summarizer` erzeugen soll. Standardmäßig `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Summarizer`-Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht ermittelt werden konnte.

Mögliche Werte sind:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort benutzt werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, aber es muss zuerst ein AI-Modell oder einige Feintuning-Daten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, es muss jedoch ein laufender Download abgeschlossen werden, bevor fortgefahren werden kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `measureInputUsage()`-Aufruf aus einem anderen Grund fehlschlug, oder aus einem Grund, den der User-Agent nicht offenlegen wollte.

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

- [Using the Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
