---
title: "MediaSource: sourceopen Ereignis"
short-title: sourceopen
slug: Web/API/MediaSource/sourceopen_event
l10n:
  sourceCommit: 0f8be363b1b680bdab9bc2f459787160f232e158
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceopen`** Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource) Objekts in `"open"` ändert. Dies deutet darauf hin, dass das `MediaSource` bereit ist, Daten von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) Objekten zu empfangen. Dies kann entweder auftreten, wenn das `MediaSource` Objekt erstmals an ein Medienelement angehängt wird oder wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) von `"ended"` zurück zu `"open"` ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("sourceopen", (event) => {});

onsourceopen = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Umgang mit dem sourceopen Ereignis

Dieses Beispiel richtet ein [`MediaSource`](/de/docs/Web/API/MediaSource) ein, verbindet es mit einem Video-Element und lauscht auf das `sourceopen` Ereignis. Wenn das Ereignis ausgelöst wird, wird ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) hinzugefügt, um die Videodaten zu handhaben, die Daten werden abgerufen, dem Puffer hinzugefügt und schließlich die Objekt-URL widerrufen, wenn die Quelle endet.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  console.log("MediaSource sourceopen:", event);
  // Add source buffers and begin adding media data.
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );
  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
    });
});

mediaSource.addEventListener("sourceended", () => {
  URL.revokeObjectURL(video.src);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
