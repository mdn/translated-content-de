---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Das **`ImageCapture`**-Interface der [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API) bietet Methoden zum Erfassen von Bildern oder Fotos von einer Kamera oder einem anderen fotografischen Gerät. Es stellt eine Schnittstelle zum Erfassen von Bildern von einem fotografischen Gerät bereit, das durch ein gültiges [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Konstruktor

- [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture) {{Experimental_Inline}}
  - : Erstellt ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder (Fotos) von einem gegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der einen Videostream darstellt, zu erfassen.

## Instanz-Eigenschaften

- [`ImageCapture.track`](/de/docs/Web/API/ImageCapture/track) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zu dem an den Konstruktor übergebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück.

## Instanz-Methoden

- [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto) {{Experimental_Inline}}
  - : Macht eine einzelne Aufnahme mit dem Videoaufnahmegerät, das eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nutzt, und gibt ein {{jsxref("Promise")}} zurück, das sich mit einem [`Blob`](/de/docs/Web/API/Blob) mit den Daten auflöst.
- [`ImageCapture.getPhotoCapabilities()`](/de/docs/Web/API/ImageCapture/getPhotoCapabilities) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt auflöst, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.
- [`ImageCapture.getPhotoSettings()`](/de/docs/Web/API/ImageCapture/getPhotoSettings) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt auflöst, das die aktuellen Fotokonfigurationseinstellungen enthält.
- [`ImageCapture.grabFrame()`](/de/docs/Web/API/ImageCapture/grabFrame) {{Experimental_Inline}}
  - : Nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), zurückgebend ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), sofern erfolgreich.

## Beispiel

Der folgende Code ist aus [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html) entnommen. Da `ImageCapture` einen Ort zum Aufnehmen eines Bildes erfordert, beginnt das Beispiel unten mit einem Mediengerät des Geräts (also einer Kamera).

Dieses Beispiel zeigt grob ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) eines Geräts extrahiert wird. Der Track wird dann verwendet, um ein `ImageCapture`-Objekt zu erstellen, sodass `takePhoto()` und `grabFrame()` aufgerufen werden können. Schließlich wird gezeigt, wie die Ergebnisse dieser Aufrufe auf ein Canvas-Objekt angewendet werden.

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
