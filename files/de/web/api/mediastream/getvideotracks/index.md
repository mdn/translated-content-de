---
title: "MediaStream: getVideoTracks()-Methode"
short-title: getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getVideoTracks()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle gibt eine Sequenz von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zurück, die die Videospuren in diesem Stream darstellen.

## Syntax

```js-nolint
getVideoTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, eines für jede Videospur, die im Medienstream enthalten ist. Videospuren sind diejenigen Spuren, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `video` ist. Das Array ist leer, wenn der Stream keine Videospuren enthält.

> [!NOTE]
> Die Reihenfolge der Spuren ist von der Spezifikation nicht definiert und kann von einem Aufruf von `getVideoTracks()` zum anderen unterschiedlich sein.

## Beispiele

Im folgenden Beispiel, das aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html) extrahiert wurde, wird `getVideoTracks()` verwendet, um eine Spur abzurufen, die an den [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)-Konstruktor übergeben wird.

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
