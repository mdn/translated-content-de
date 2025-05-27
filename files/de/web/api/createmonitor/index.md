---
title: CreateMonitor
slug: Web/API/CreateMonitor
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`CreateMonitor`** Schnittstelle bietet Informationen über den Fortschritt eines AI-Modell-Downloads oder einiger Feinabstimmungsdaten für das Modell.

Sie kann über folgende Methoden verwendet werden:

- [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static)
- [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static)
- [`Translator.create()`](/de/docs/Web/API/Translator/create_static)

{{InheritanceDiagram}}

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn Fortschritte beim AI-Modell-Download gemacht werden.

## Beispiele

### Grundlegende Verwendung von `CreateMonitor`

Eine `CreateMonitor`-Instanz wird über die `monitor`-Eigenschaft einer `create()`-Methode einer AI-API verwendet (nachfolgend ist [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static) gezeigt). Die `monitor`-Eigenschaft nimmt eine Callback-Funktion als Wert, deren Argument die `CreateMonitor`-Instanz ist. Sie können dann den Download-Fortschritt über das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis der Instanz überwachen.

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
