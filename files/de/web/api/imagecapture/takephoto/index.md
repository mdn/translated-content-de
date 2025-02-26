---
title: "ImageCapture: takePhoto() Methode"
short-title: takePhoto()
slug: Web/API/ImageCapture/takePhoto
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Image Capture API")}}

Die **`takePhoto()`** Methode der [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Schnittstelle macht eine einzelne Aufnahme mit dem Videogerät, das eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) liefert, und gibt ein {{jsxref("Promise")}}
zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, welches die Daten enthält.

## Syntax

```js-nolint
takePhoto()
takePhoto(photoSettings)
```

### Parameter

- `photoSettings` {{optional_inline}}

  - : Ein Objekt, das Optionen für das aufzunehmende Foto festlegt. Die verfügbaren Optionen sind:

    - `fillLightMode`
      - : Die Blitz-Einstellung des Aufnahmengeräts, eine der
        `"auto"`, `"off"` oder `"flash"`.
    - `imageHeight`
      - : Die gewünschte Bildhöhe als Ganzzahl. Der Benutzeragent
        wählt den nächstgelegenen Höhenwert zu dieser Einstellung, wenn er nur diskrete Höhen unterstützt.
    - `imageWidth`
      - : Die gewünschte Bildbreite als Ganzzahl. Der Benutzeragent
        wählt den nächstgelegenen Breitenwert zu dieser Einstellung, wenn er nur diskrete Breiten unterstützt.
    - `redEyeReduction`
      - : Ein boolescher Wert, der angibt, ob die Rote-Augen-Reduktion
        verwendet werden soll, wenn sie verfügbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft `readyState` des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel ist aus diesem [Simple Image Capture Demo](https://simpl.info/imagecapture/) entnommen. Es zeigt, wie das von `takePhoto()` zurückgegebene {{jsxref("Promise")}} verwendet wird, um das zurückgegebene [`Blob`](/de/docs/Web/API/Blob) in ein
{{htmlelement("img")}}-Element zu kopieren. Der Einfachheit halber wird nicht gezeigt, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture) Objekt instanziiert wird.

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
