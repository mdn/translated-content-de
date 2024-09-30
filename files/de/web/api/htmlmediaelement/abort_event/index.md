---
title: "HTMLMediaElement: abort Ereignis"
short-title: abort
slug: Web/API/HTMLMediaElement/abort_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

Das **`abort`**-Ereignis wird ausgelöst, wenn die Ressource nicht vollständig geladen wurde, jedoch nicht als Ergebnis eines Fehlers.

Dieses Ereignis kann nicht abgebrochen werden und perlt nicht nach oben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("abort", (event) => {});

onabort = (event) => {};
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
