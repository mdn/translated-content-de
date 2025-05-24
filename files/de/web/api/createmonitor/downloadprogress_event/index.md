---
title: "CreateMonitor: downloadprogress-Ereignis"
short-title: downloadprogress
slug: Web/API/CreateMonitor/downloadprogress_event
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Das **`downloadprogress`**-Ereignis der [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Schnittstelle wird ausgelöst, wenn ein Fortschritt beim Herunterladen des KI-Modells gemacht wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("downloadprogress", (event) => { })

ondownloadprogress = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

Sehen Sie sich die Hauptseite von [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
