---
title: "ImageCapture: Methode takePhoto()"
short-title: takePhoto()
slug: Web/API/ImageCapture/takePhoto
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`takePhoto()`**-Methode des [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Interfaces nimmt eine einzelne Aufnahme mit dem Videogerät vor, das eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellt, und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, welcher die Daten enthält.

## Syntax

```js-nolint
takePhoto()
takePhoto(photoSettings)
```

### Parameter

- `photoSettings` {{optional_inline}}

  - : Ein Objekt, das Optionen für das aufzunehmende Foto festlegt. Die verfügbaren Optionen sind:

    - `fillLightMode`
      - : Die Blitz-Einstellung des Aufnahmegeräts, eine von `"auto"`, `"off"` oder `"flash"`.
    - `imageHeight`
      - : Die gewünschte Bildhöhe als Ganzzahl. Der User-Agent wählt den nächstgelegenen Höhenwert zu dieser Einstellung, wenn er nur diskrete Höhen unterstützt.
    - `imageWidth`
      - : Die gewünschte Bildbreite als Ganzzahl. Der User-Agent wählt den nächstgelegenen Breitenwert zu dieser Einstellung, wenn er nur diskrete Breiten unterstützt.
    - `redEyeReduction`
      - : Ein Boolean, der angibt, ob die Rote-Augen-Reduzierung verwendet werden soll, sofern verfügbar.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft der im Konstruktor übergebenen `MediaStreamTrack` nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel stammt aus dieser [Simple Image Capture-Demo](https://simpl.info/imagecapture/). Es zeigt, wie das zurückgegebene {{jsxref("Promise")}} von `takePhoto()` verwendet wird, um den zurückgegebenen [`Blob`](/de/docs/Web/API/Blob) in ein {{htmlelement("img")}}-Element zu kopieren. Zur Vereinfachung wird nicht gezeigt, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt instanziiert wird.

```js
let takePhotoButton = document.querySelector("button#takePhoto");
let canvas = document.querySelector("canvas");

takePhotoButton.onclick = takePhoto;

function takePhoto() {
  imageCapture
    .takePhoto()
    .then((blob) => {
      console.log("Took photo:", blob);
      img.classList.remove("hidden");
      img.src = URL.createObjectURL(blob);
    })
    .catch((error) => {
      console.error("takePhoto() error: ", error);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
