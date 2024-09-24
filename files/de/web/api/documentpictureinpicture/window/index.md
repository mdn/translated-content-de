---
title: "DocumentPictureInPicture: Fenster-Eigenschaft"
short-title: Fenster
slug: Web/API/DocumentPictureInPicture/window
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`window`**-Eigenschaft, die nur lesbar ist, der {{domxref("DocumentPictureInPicture")}}-Schnittstelle gibt eine {{domxref("Window")}}-Instanz zurück, die den Browsing-Kontext innerhalb des Bild-in-Bild-Fensters darstellt.

## Wert

Ein {{domxref("Window")}}-Objekt, wenn das Bild-in-Bild-Fenster bereits mit {{domxref("DocumentPictureInPicture.requestWindow()")}} geöffnet wurde, oder `null` andernfalls.

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
  // Deaktivieren Sie den Ton des Videos, das im Bild-in-Bild-Fenster abgespielt wird.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document Picture-in-Picture API", "Dokument-Bild-in-Bild-API", "", "nocode")}}
- [Verwendung der Dokument-Bild-in-Bild-API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
