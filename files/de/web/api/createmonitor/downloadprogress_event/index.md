---
title: "CreateMonitor: downloadprogress Ereignis"
short-title: downloadprogress
slug: Web/API/CreateMonitor/downloadprogress_event
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`downloadprogress`** Ereignis der [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) Schnittstelle wird ausgelöst, wenn Fortschritte beim Herunterladen des KI-Modells erzielt werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("downloadprogress", (event) => { })

ondownloadprogress = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent), der von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

Siehe die Hauptseite von [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
