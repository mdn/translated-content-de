---
title: "HTMLMediaElement: error-Event"
short-title: error
slug: Web/API/HTMLMediaElement/error_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`error`**-Event wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte (beispielsweise wegen eines Problems mit der Netzwerkverbindung).

Dieses Event kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Event-Namen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const video = document.querySelector("video");
const videoSrc = "https://path/to/video.webm";

video.addEventListener("error", () => {
  console.error(`Error loading: ${videoSrc}`);
});

video.setAttribute("src", videoSrc);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
