---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Image Capture API")}}

Das **`ImageCapture`**-Interface der [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API) bietet Methoden zur Erfassung von Bildern oder Fotos von einer Kamera oder anderen fotografischen Geräten. Es stellt eine Schnittstelle für die Aufnahme von Bildern von einem fotografischen Gerät bereit, das durch ein gültiges [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Konstruktor

- [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture)
  - : Erstellt ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder (Fotos) von einem angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das einen Videostream repräsentiert, aufzunehmen.

## Instanz-Eigenschaften

- [`ImageCapture.track`](/de/docs/Web/API/ImageCapture/track) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das im Konstruktor übergebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück.

## Instanz-Methoden

- [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto)
  - : Nimmt eine einzelne Belichtung mit dem Videofanggerät auf, das einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) speist, und gibt ein {{jsxref("Promise")}} zurück, das sich mit einem [`Blob`](/de/docs/Web/API/Blob) auflöst, der die Daten enthält.
- [`ImageCapture.getPhotoCapabilities()`](/de/docs/Web/API/ImageCapture/getPhotoCapabilities)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt auflöst, das die Bereiche verfügbarer Konfigurationsoptionen enthält.
- [`ImageCapture.getPhotoSettings()`](/de/docs/Web/API/ImageCapture/getPhotoSettings)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt auflöst, das die aktuellen Fotoeinstellungen enthält.
- [`ImageCapture.grabFrame()`](/de/docs/Web/API/ImageCapture/grabFrame) {{Experimental_Inline}}
  - : Nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf und gibt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zurück, falls erfolgreich.

## Beispiel

Der folgende Code stammt aus [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html). Da `ImageCapture` einen Ort benötigt, um ein Bild zu erfassen, beginnt das unten stehende Beispiel mit einem Mediengerät des Geräts (mit anderen Worten, einer Kamera).

Dieses Beispiel zeigt grob, ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das aus einem [`MediaStream`](/de/docs/Web/API/MediaStream) eines Geräts extrahiert wurde. Der Track wird dann verwendet, um ein `ImageCapture`-Objekt zu erstellen, sodass `takePhoto()` und `grabFrame()` aufgerufen werden können. Schließlich zeigt es, wie die Ergebnisse dieser Aufrufe auf ein Canvas-Objekt angewendet werden.

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
