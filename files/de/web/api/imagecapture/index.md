---
title: ImageCapture
slug: Web/API/ImageCapture
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`ImageCapture`**-Schnittstelle der [MediaStream Image Capture API](/de/docs/Web/API/MediaStream_Image_Capture_API) bietet Methoden, um die Aufnahme von Bildern oder Fotos von einer Kamera oder einem anderen fotografischen Gerät zu ermöglichen. Sie stellt eine Schnittstelle zum Erfassen von Bildern von einem fotografischen Gerät bereit, das durch einen gültigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) referenziert wird.

## Konstruktor

- [`ImageCapture()`](/de/docs/Web/API/ImageCapture/ImageCapture) {{Experimental_Inline}}
  - : Erstellt ein neues `ImageCapture`-Objekt, das verwendet werden kann, um Standbilder (Fotos) von einem gegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) aufzunehmen, der einen Videostream darstellt.

## Instanz-Eigenschaften

- [`ImageCapture.track`](/de/docs/Web/API/ImageCapture/track) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, der an den Konstruktor übergeben wurde.

## Instanz-Methoden

- [`ImageCapture.takePhoto()`](/de/docs/Web/API/ImageCapture/takePhoto) {{Experimental_Inline}}
  - : Macht eine einzelne Belichtung mit dem Videogerät, das einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) liefert, und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, der die Daten enthält.
- [`ImageCapture.getPhotoCapabilities()`](/de/docs/Web/API/ImageCapture/getPhotoCapabilities) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.
- [`ImageCapture.getPhotoSettings()`](/de/docs/Web/API/ImageCapture/getPhotoSettings) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die aktuellen Foto-Konfigurationseinstellungen enthält.
- [`ImageCapture.grabFrame()`](/de/docs/Web/API/ImageCapture/grabFrame) {{Experimental_Inline}}
  - : Macht einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), wobei ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) zurückgegeben wird, wenn erfolgreich.

## Beispiel

Der folgende Code stammt von [Chrome's Grab Frame - Take Photo Sample](https://googlechrome.github.io/samples/image-capture/grab-frame-take-photo.html). Da `ImageCapture` einen Ort benötigt, um ein Bild aufzunehmen, beginnt das untenstehende Beispiel mit dem Mediengerät eines Geräts (mit anderen Worten einer Kamera).

Dieses Beispiel zeigt, grob gesagt, einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der aus dem [`MediaStream`](/de/docs/Web/API/MediaStream) eines Geräts extrahiert wurde. Der Track wird dann verwendet, um ein `ImageCapture`-Objekt zu erstellen, sodass `takePhoto()` und `grabFrame()` aufgerufen werden können. Schließlich zeigt es, wie die Ergebnisse dieser Aufrufe auf ein Canvas-Objekt angewendet werden können.

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
