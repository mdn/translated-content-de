---
title: "CreateMonitor: downloadprogress-Ereignis"
short-title: downloadprogress
slug: Web/API/CreateMonitor/downloadprogress_event
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Das **`downloadprogress`**-Ereignis der [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Schnittstelle wird ausgelöst, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("downloadprogress", (event) => {});

ondownloadprogress = (event) => {};
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

Siehe die Hauptseite zu [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
