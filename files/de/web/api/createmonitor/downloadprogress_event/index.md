---
title: "CreateMonitor: downloadprogress-Ereignis"
short-title: downloadprogress
slug: Web/API/CreateMonitor/downloadprogress_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`downloadprogress`**-Ereignis der [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Schnittstelle wird ausgelöst, wenn der Download des KI-Modells voranschreitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("downloadprogress", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondownloadprogress = (event) => { }
```

## Ereignistyp

Ein [`ProgressEvent`](/de/docs/Web/API/ProgressEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ProgressEvent")}}

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`CreateMonitor`](/de/docs/Web/API/CreateMonitor).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev.
