---
title: "MediaSource: sourceclose-Ereignis"
short-title: sourceclose
slug: Web/API/MediaSource/sourceclose_event
l10n:
  sourceCommit: 0f8be363b1b680bdab9bc2f459787160f232e158
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceclose`**-Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekts auf `"closed"` ändert. Dies weist darauf hin, dass die `MediaSource` von dem Medien-Element getrennt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("sourceclose", (event) => { })

onsourceclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Umgang mit dem sourceclose-Ereignis

Dieses Beispiel zeigt, wie ein Medien-Element von einer `MediaSource` getrennt wird und wie das `sourceclose`-Ereignis zur ordnungsgemäßen Ressourcenverwaltung behandelt wird. Der Code richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, verbindet sie mit einem Video-Element und hört auf das `sourceclose`-Ereignis. Wenn das Ereignis ausgelöst wird, führt es Bereinigungsaufgaben aus (`revokeObjectURL`).

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );
  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
    });
});

function detachMediaSource() {
  video.src = null; // Detach the MediaSource
}

mediaSource.addEventListener("sourceclose", (event) => {
  console.log("MediaSource sourceclose:", event);
  // Perform cleanup tasks here, e.g., release resources, update UI
  URL.revokeObjectURL(video.src); // Clean up the object URL
});

// Call detachMediaSource() when appropriate, e.g., on a button click
document
  .getElementById("detachButton")
  .addEventListener("click", detachMediaSource);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
