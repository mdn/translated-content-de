---
title: "HTMLMediaElement: error Ereignis"
short-title: error
slug: Web/API/HTMLMediaElement/error_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef}}

Das **`error`** Ereignis wird ausgelöst, wenn die Ressource aufgrund eines Fehlers nicht geladen werden konnte (zum Beispiel ein Problem mit der Netzwerkverbindung).

Dieses Ereignis ist nicht abbruchfähig und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
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
