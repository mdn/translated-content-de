---
title: "ImageCapture: ImageCapture() Konstruktor"
short-title: ImageCapture()
slug: Web/API/ImageCapture/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Der **`ImageCapture()`** Konstruktor
erstellt ein neues {{domxref("ImageCapture")}}-Objekt.

## Syntax

```js-nolint
new ImageCapture(videoTrack)
```

### Parameter

- `videoTrack`
  - : Ein {{domxref("MediaStreamTrack")}}, von dem die Standbilder aufgenommen werden. Dies
    kann jede Quelle sein, wie ein eingehender Stream einer Videokonferenz, ein laufender Film
    oder der Stream einer Webcam.

### Rückgabewert

Ein neues `ImageCapture`-Objekt, das zum Aufnehmen von Standbildern aus
dem angegebenen Videotrack verwendet werden kann.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `kind`-Eigenschaft des `videoTrack`-Parameters nicht `video` ist.

## Beispiele

Das folgende Beispiel zeigt, wie ein Aufruf von
{{domxref("MediaDevices.getUserMedia()")}} verwendet wird, um den
erforderlichen {{domxref("MediaStreamTrack")}} für den `ImageCapture()`-Konstruktor zu erhalten.

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
