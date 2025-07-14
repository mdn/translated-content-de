---
title: "Summarizer: `availability()` statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`availability()`** statische Methode der [`Summarizer`](/de/docs/Web/API/Summarizer) Schnittstelle gibt einen enumerierten Wert zurück, der angibt, ob das Browser-AI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` angibt. Mögliche Werte sind:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenketten, die den [BCP 47 Sprach-Tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) entsprechen (wie in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) spezifiziert), die die erwarteten Sprachen des Eingabetexts angeben. Standard ist `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenketten, die den BCP 47 Sprach-Tags entsprechen, und die erwarteten Sprachen für bereitgestellte Kontextstrings angeben (entweder der [`sharedContext`](/de/docs/Web/API/Summarizer/create_static#sharedcontext), der dem `Summarizer` übergeben wurde, oder ein `context`, das während eines Aufrufs von [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) angegeben wurde). Standard ist `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text[`format`](/de/docs/Web/API/Summarizer/format) angibt, in dem Sie die Zusammenfassungen zurückerhalten möchten. Standard ist `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) der generierten Zusammenfassungen angibt. Standard ist `short`.
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
  - : Der Browser unterstützt die gegebene Konfiguration, jedoch muss zuerst ein AI-Modell oder einige Feinabstimmungsdaten für das Modell heruntergeladen werden.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor es fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Nutzung der Summarizer-API durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `measureInputUsage()` Aufruf aus einem anderen Grund fehlschlug oder aus einem Grund, den der Benutzer-Agent nicht offenlegen wollte.

## Beispiele

### Grundlegende Nutzung von `availability()`

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

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
