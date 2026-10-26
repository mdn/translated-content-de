---
title: "MediaSource: sourceclose-Ereignis"
short-title: sourceclose
slug: Web/API/MediaSource/sourceclose_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`sourceclose`**-Ereignis wird ausgelöst, wenn sich der [`readyState`](/de/docs/Web/API/MediaSource/readyState) eines [`MediaSource`](/de/docs/Web/API/MediaSource)-Objekts zu `"closed"` ändert. Dies zeigt an, dass die `MediaSource` vom Medienelement getrennt wurde.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("sourceclose", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsourceclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das sourceclose-Ereignis behandeln

Dieses Beispiel zeigt, wie ein Medienelement von einer `MediaSource` getrennt und das `sourceclose`-Ereignis behandelt wird, um Ressourcen ordnungsgemäß freizugeben. Der Code richtet eine [`MediaSource`](/de/docs/Web/API/MediaSource) ein, verknüpft sie mit einem Videoelement und überwacht das `sourceclose`-Ereignis. Wenn das Ereignis ausgelöst wird, gibt er Ressourcen mithilfe von `revokeObjectURL` frei.

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
