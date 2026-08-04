---
title: CreateMonitor
slug: Web/API/CreateMonitor
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`CreateMonitor`**-Interface liefert Informationen über den Fortschritt eines Downloads eines KI-Modells, zum Beispiel eines Sprachpakets oder einiger Feinabstimmungsdaten.

Es kann verwendet werden über:

- [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static)
- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
- [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static)
- [`Translator.create()`](/de/docs/Web/API/Translator/create_static)

{{InheritanceDiagram}}

## Ereignisse

_Erbt Ereignisse von seinem übergeordneten Element, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Fortschritte beim Download des KI-Modells gemacht werden.

## Beispiele

### Grundlegende Verwendung von `CreateMonitor`

Eine `CreateMonitor`-Instanz wird über die `monitor`-Eigenschaft der `create()`-Methode einer KI-API verwendet ([`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static) wird unten gezeigt). Die `monitor`-Eigenschaft nimmt eine Callback-Funktion als Wert, deren Argument die `CreateMonitor`-Instanz ist. Sie können dann den Downloadfortschritt über das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis der Instanz überwachen.

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

- [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using)
- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Verwendung der Übersetzer- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
