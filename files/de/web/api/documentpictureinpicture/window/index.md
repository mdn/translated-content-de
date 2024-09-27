---
title: "DocumentPictureInPicture: window-Eigenschaft"
short-title: window
slug: Web/API/DocumentPictureInPicture/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`window`**-Eigenschaft der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Schnittstelle gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext im Picture-in-Picture-Fenster repräsentiert.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-Objekt, falls das Picture-in-Picture-Fenster bereits mit [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet wurde, oder `null` andernfalls.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...

const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Mute video playing in the Picture-in-Picture window.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
