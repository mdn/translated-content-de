---
title: "HTMLMediaElement: error Ereignis"
short-title: error
slug: Web/API/HTMLMediaElement/error_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Das **`error`** Ereignis wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte (zum Beispiel bei einem Netzwerkverbindungsproblem).

Dieses Ereignis kann nicht abgebrochen werden und löst keine Ereignisweitergabe aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

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
