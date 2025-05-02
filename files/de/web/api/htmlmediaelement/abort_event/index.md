---
title: "HTMLMediaElement: abort event"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`abort`** Ereignis wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, aber nicht als Ergebnis eines Fehlers.

Dieses Ereignis ist nicht abbrechbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const video = document.querySelector("video");
const videoSrc = "https://example.org/path/to/video.webm";

video.addEventListener("abort", () => {
  console.log(`Abort loading: ${videoSrc}`);
});

const source = document.createElement("source");
source.setAttribute("src", videoSrc);
source.setAttribute("type", "video/webm");

video.appendChild(source);
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
