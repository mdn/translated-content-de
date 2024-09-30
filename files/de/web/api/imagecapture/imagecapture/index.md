---
title: "ImageCapture: ImageCapture() Konstruktor"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Der **`ImageCapture()`** Konstruktor erstellt ein neues [`ImageCapture`](/de/docs/Web/API/ImageCapture) Objekt.

## Syntax

```js-nolint
new ImageCapture(videoTrack)
```

### Parameter

- `videoTrack`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), von dem die Standbilder aufgenommen werden. Dies
    kann jede Quelle sein, wie ein eingehender Stream einer Videokonferenz, ein abspielender Film oder der Stream von einer Webcam.

### Rückgabewert

Ein neues `ImageCapture` Objekt, das verwendet werden kann, um Standbilder von dem angegebenen Videotrack aufzunehmen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `kind` Eigenschaft des `videoTrack` Parameters nicht `video` ist.

## Beispiele

Das folgende Beispiel zeigt, wie ein Aufruf von
[`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um den
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu erhalten, der vom `ImageCapture()` Konstruktor benötigt wird.

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
