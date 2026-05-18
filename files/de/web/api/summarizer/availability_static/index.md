---
title: "Summarizer: availability() statische Methode"
short-title: availability()
slug: Web/API/Summarizer/availability_static
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`availability()`** statische Methode des [`Summarizer`](/de/docs/Web/API/Summarizer) Interface gibt einen Wert zurück, der angibt, ob das KI-Modell des Browsers eine gegebene `Summarizer` Konfiguration unterstützt (oder unterstützen wird).

## Syntax

```js-nolint
Summarizer.availability()
Summarizer.availability(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das eine mögliche Konfiguration für einen `Summarizer` spezifiziert. Mögliche Werte umfassen:
    - `expectedInputLanguages`
      - : Ein Array von Zeichenketten entsprechend {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}}, das die erwarteten Sprachen des Eingabetextes spezifiziert. Standard ist `["en"]`.
    - `expectedContextLanguages`
      - : Ein Array von Zeichenketten entsprechend BCP 47 Sprach-Tags, das die erwarteten Sprachen der bereitgestellten Kontextstrings spezifiziert (entweder der [`sharedContext`](/de/docs/Web/API/Summarizer/create_static#sharedcontext), der dem `Summarizer` übergeben wird, oder ein `context`, der während eines [`summarize()`](/de/docs/Web/API/Summarizer/summarize) oder [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) Aufrufs angegeben wird). Standard ist `["en"]`.
    - `format`
      - : Ein enumerierter Wert, der das Text-[`format`](/de/docs/Web/API/Summarizer/format) spezifiziert, in dem Sie die Zusammenfassungen zurückerhalten möchten. Standard ist `markdown`.
    - `length`
      - : Ein enumerierter Wert, der die relative [`length`](/de/docs/Web/API/Summarizer/length) für die generierten Zusammenfassungen spezifiziert. Standard ist `short`.
    - `outputLanguage`
      - : Eine Zeichenkette entsprechend einem BCP 47 Sprach-Tag, die die erwartete Sprache der vom `Summarizer` generierten Zusammenfassungen spezifiziert. Standard ist `en`.
    - `type`
      - : Ein enumerierter Wert, der den [`type`](/de/docs/Web/API/Summarizer/type) der Zusammenfassung spezifiziert, die dieser `Summarizer` generieren soll. Standard ist `key-points`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem enumerierten Wert erfüllt wird, der angibt, ob Unterstützung für eine gegebene `Summarizer` Konfiguration verfügbar ist (oder verfügbar sein wird), oder `null`, wenn die Unterstützung nicht bestimmt werden konnte.

Mögliche Werte umfassen:

- `available`
  - : Der Browser unterstützt die gegebene Konfiguration und kann sofort verwendet werden.
- `downloadable`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch zuerst ein KI-Modell oder Feintuning-Daten für das Modell herunterladen.
- `downloading`
  - : Der Browser unterstützt die gegebene Konfiguration, muss jedoch einen laufenden Download abschließen, bevor er fortfahren kann.
- `unavailable`
  - : Der Browser unterstützt die gegebene Konfiguration nicht, oder die Summarizer-API wird durch eine {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} blockiert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `context` nicht in einer Sprache ist, die der `Summarizer` unterstützt.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `measureInputUsage()` Aufruf aus einem anderen Grund fehlschlägt oder ein Grund vorliegt, den der User-Agent nicht offenlegen möchte.

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

- [Verwenden der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
