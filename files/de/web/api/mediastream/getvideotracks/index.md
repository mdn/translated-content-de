---
title: "MediaStream: Methode getVideoTracks()"
short-title: getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getVideoTracks()`**-Methode der
{{domxref("MediaStream")}}-Schnittstelle gibt eine Sequenz von
{{domxref("MediaStreamTrack")}}-Objekten zurück, die die Videospuren in diesem Stream repräsentieren.

## Syntax

```js-nolint
getVideoTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("MediaStreamTrack")}}-Objekten, eines für jede Videospur, die im Media-Stream enthalten ist. Videospuren sind diejenigen Spuren, deren
{{domxref("MediaStreamTrack.kind", "kind")}}-Eigenschaft `video` ist. Das Array
ist leer, wenn der Stream keine Videospuren enthält.

> [!NOTE]
> Die Reihenfolge der Spuren wird in der Spezifikation nicht definiert
> und kann von einem Aufruf von `getVideoTracks()` zum nächsten unterschiedlich sein.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's
Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet `getVideoTracks()`, um eine Spur zum Übergeben an den {{domxref("ImageCapture.ImageCapture", "ImageCapture()")}}-Konstruktor zu extrahieren.

```js
let imageCapture;

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  document.querySelector("video").srcObject = mediaStream;

  const track = mediaStream.getVideoTracks()[0];
  imageCapture = new ImageCapture(track);

  return imageCapture.getPhotoCapabilities();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
