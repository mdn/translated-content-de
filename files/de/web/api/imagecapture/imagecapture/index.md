---
title: "ImageCapture: `ImageCapture()` Konstruktor"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Der **`ImageCapture()`** Konstruktor
erstellt ein neues [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt.

## Syntax

```js-nolint
new ImageCapture(videoTrack)
```

### Parameter

- `videoTrack`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), aus dem die Standbilder aufgenommen werden sollen. Dies
    kann jede Quelle sein, wie ein eingehender Stream einer Videokonferenz, ein laufender Film
    oder der Stream einer Webcam.

### Rückgabewert

Ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder von
der angegebenen Videospur aufzunehmen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `kind`-Eigenschaft des `videoTrack`-Parameters nicht `video` ist.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Aufruf von
[`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden können, um die
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) abzurufen, die vom `ImageCapture()`-Konstruktor benötigt wird.

```js
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch((error) => console.error(error));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
