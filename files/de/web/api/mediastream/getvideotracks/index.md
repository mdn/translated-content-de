---
title: "MediaStream: getVideoTracks()-Methode"
short-title: getVideoTracks()
slug: Web/API/MediaStream/getVideoTracks
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getVideoTracks()`**-Methode des [`MediaStream`](/de/docs/Web/API/MediaStream)-Interfaces gibt eine Sequenz von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten zurück, die die Videospuren in diesem Stream repräsentieren.

## Syntax

```js-nolint
getVideoTracks()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, eines für jede Videospur im Medienstream. Videospuren sind die Spuren, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft `video` ist. Das Array ist leer, wenn der Stream keine Videospuren enthält.

> [!NOTE]
> Die Reihenfolge der Spuren ist durch die Spezifikation nicht definiert und kann von einem Aufruf von `getVideoTracks()` zum nächsten unterschiedlich sein.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet `getVideoTracks()`, um eine Spur für die Übergabe an den [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)-Konstruktor abzurufen.

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
