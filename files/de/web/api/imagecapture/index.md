---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Image Capture API")}}

Die **`ImageCapture`**-Schnittstelle der [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API) bietet Methoden zum Erfassen von Bildern oder Fotos von einer Kamera oder einem anderen fotografischen Gerät. Sie stellt eine Schnittstelle zur Verfügung, um Bilder von einem fotografischen Gerät zu erfassen, das über einen gültigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Konstruktor

- [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)
  - : Erstellt ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder (Fotos) von einem gegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der einen Videostream darstellt, aufzunehmen.

## Instanz-Eigenschaften

- [`ImageCapture.track`](/de/docs/Web/API/ImageCapture/track) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, der dem Konstruktor übergeben wurde.

## Instanz-Methoden

- [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto)
  - : Nimmt eine Einzelaufnahme mit dem Videogerät auf, das einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellt, und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, der die Daten enthält.
- [`ImageCapture.getPhotoCapabilities()`](/de/docs/Web/API/ImageCapture/getPhotoCapabilities)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.
- [`ImageCapture.getPhotoSettings()`](/de/docs/Web/API/ImageCapture/getPhotoSettings)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die aktuellen Fotoeinstellungen enthält.
- [`ImageCapture.grabFrame()`](/de/docs/Web/API/ImageCapture/grabFrame)
  - : Nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf und gibt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zurück, wenn erfolgreich.

## Beispiel

Der folgende Code ist aus [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html) entnommen. Da `ImageCapture` eine Quelle benötigt, um ein Bild aufzunehmen, beginnt das folgende Beispiel mit dem Mediengerät eines Geräts (mit anderen Worten, einer Kamera).

Dieses Beispiel zeigt, grob gesagt, einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der aus einem Gerät's [`MediaStream`](/de/docs/Web/API/MediaStream) extrahiert wurde. Der Track wird dann verwendet, um ein `ImageCapture`-Objekt zu erstellen, damit `takePhoto()` und `grabFrame()` aufgerufen werden können. Schließlich wird gezeigt, wie man die Ergebnisse dieser Aufrufe auf ein Canvas-Objekt anwendet.

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
