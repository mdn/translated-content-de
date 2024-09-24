---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`ImageCapture`** Schnittstelle der [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API) stellt Methoden bereit, um die Aufnahme von Bildern oder Fotos von einer Kamera oder einem anderen fotografischen Gerät zu ermöglichen. Sie bietet eine Schnittstelle zur Erfassung von Bildern eines fotografischen Geräts, das durch einen gültigen {{domxref("MediaStreamTrack")}} referenziert wird.

## Konstruktor

- {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `ImageCapture` Objekt, das zur Erfassung von Standbildern (Fotos) von einem angegebenen {{domxref("MediaStreamTrack")}}, der einen Videostream darstellt, verwendet werden kann.

## Instanzeigenschaften

- {{domxref("ImageCapture.track")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu dem {{domxref("MediaStreamTrack")}} zurück, der dem Konstruktor übergeben wurde.

## Instanzmethoden

- {{domxref("ImageCapture.takePhoto()")}} {{Experimental_Inline}}
  - : Nimmt eine einzelne Belichtung mit dem Videogerät auf, das einen {{domxref("MediaStreamTrack")}} bereitstellt, und gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} aufgelöst wird, das die Daten enthält.
- {{domxref("ImageCapture.getPhotoCapabilities()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.
- {{domxref("ImageCapture.getPhotoSettings()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die aktuellen Fotoeinstellungen enthält.
- {{domxref("ImageCapture.grabFrame()")}} {{Experimental_Inline}}
  - : Nimmt einen Schnappschuss des Live-Videos in einem {{domxref("MediaStreamTrack")}} auf und gibt, falls erfolgreich, ein {{domxref("ImageBitmap")}} zurück.

## Beispiel

Der folgende Code ist aus [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html) entnommen. Da `ImageCapture` einen Ort erfordert, von dem ein Bild aufgenommen werden kann, beginnt das untenstehende Beispiel mit einem Mediengerät eines Geräts (anders gesagt, einer Kamera).

Dieses Beispiel zeigt grob einen {{domxref("MediaStreamTrack")}}, der aus einem {{domxref("MediaStream")}} eines Geräts extrahiert wird. Der Track wird dann verwendet, um ein `ImageCapture` Objekt zu erstellen, damit `takePhoto()` und `grabFrame()` aufgerufen werden können. Schließlich wird gezeigt, wie man die Ergebnisse dieser Aufrufe auf ein Canvas-Objekt anwendet.

```js
let imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((mediaStream) => {
      document.querySelector("video").srcObject = mediaStream;

      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
    })
    .catch((error) => console.error(error));
}

function onGrabFrameButtonClick() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      const canvas = document.querySelector("#grabFrameCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.error(error));
}

function onTakePhotoButtonClick() {
  imageCapture
    .takePhoto()
    .then((blob) => createImageBitmap(blob))
    .then((imageBitmap) => {
      const canvas = document.querySelector("#takePhotoCanvas");
      drawCanvas(canvas, imageBitmap);
    })
    .catch((error) => console.error(error));
}

/* Utils */

function drawCanvas(canvas, img) {
  canvas.width = getComputedStyle(canvas).width.split("px")[0];
  canvas.height = getComputedStyle(canvas).height.split("px")[0];
  let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
  let x = (canvas.width - img.width * ratio) / 2;
  let y = (canvas.height - img.height * ratio) / 2;
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  canvas
    .getContext("2d")
    .drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      x,
      y,
      img.width * ratio,
      img.height * ratio,
    );
}

document.querySelector("video").addEventListener("play", () => {
  document.querySelector("#grabFrameButton").disabled = false;
  document.querySelector("#takePhotoButton").disabled = false;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
