---
title: CreateMonitor
slug: Web/API/CreateMonitor
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`CreateMonitor`**-Interface bietet Informationen über den Fortschritt eines KI-Modell-Downloads oder einiger Feintuning-Daten für das Modell.

Es kann verwendet werden über:

- [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static)
- [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static)
- [`Translator.create()`](/de/docs/Web/API/Translator/create_static)

{{InheritanceDiagram}}

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Fortschritte beim KI-Modell-Download gemacht werden.

## Beispiele

### Grundlegende Verwendung von `CreateMonitor`

Eine `CreateMonitor`-Instanz wird über die `monitor`-Eigenschaft der `create()`-Methode einer KI-API verwendet (unten ist [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static) gezeigt). Die `monitor`-Eigenschaft nimmt eine Callback-Funktion als Wert, deren Argument die `CreateMonitor`-Instanz ist. Sie können dann den Download-Fortschritt über das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis der Instanz überwachen.

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`download progress: ${e.loaded}/${e.total}`);
    });
  },
});

const summary = await summarizer.summarize(myText);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
