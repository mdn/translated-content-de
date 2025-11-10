---
title: "ImageCapture: ImageCapture() Konstruktor"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Image Capture API")}}

Der **`ImageCapture()`** Konstruktor erstellt ein neues [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt.

## Syntax

```js-nolint
new ImageCapture(videoTrack)
```

### Parameter

- `videoTrack`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), aus dem die Standbilder aufgenommen werden. Dies
    kann jede Quelle sein, wie ein eingehender Videokonferenz-Stream, ein ablaufender Film
    oder der Stream einer Webcam.

### Rückgabewert

Ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder vom
angegebenen Videotrack aufzunehmen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `kind`-Eigenschaft des `videoTrack`-Parameters nicht `video` ist.

## Beispiele

Das folgende Beispiel zeigt, wie ein Aufruf von
[`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um den
für den `ImageCapture()`-Konstruktor benötigten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu erhalten.

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
