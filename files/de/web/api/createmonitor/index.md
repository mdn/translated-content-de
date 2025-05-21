---
title: CreateMonitor
slug: Web/API/CreateMonitor
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`CreateMonitor`**-Schnittstelle liefert Informationen über den Fortschritt des Downloads eines KI-Modells oder einiger Feinabstimmungsdaten für das Modell.

Es kann verwendet werden über:

- [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static)
- [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static)
- [`Translator.create()`](/de/docs/Web/API/Translator/create_static)

{{InheritanceDiagram}}

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Fortschritte beim Download des KI-Modells gemacht werden.

## Beispiele

### Grundlegende `CreateMonitor`-Nutzung

Eine `CreateMonitor`-Instanz wird über die `monitor`-Eigenschaft der `create()`-Methode einer KI-API verwendet (unten wird [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static) gezeigt). Die `monitor`-Eigenschaft nimmt eine Callback-Funktion als Wert, deren Argument die `CreateMonitor`-Instanz ist. Sie können dann den Download-Fortschritt über das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis der Instanz überwachen.

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  monitor: (monitor) => {
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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
