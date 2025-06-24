---
title: "ImageCapture: takePhoto() Methode"
short-title: takePhoto()
slug: Web/API/ImageCapture/takePhoto
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Image Capture API")}}

Die **`takePhoto()`**-Methode des [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Interfaces macht eine Einzelaufnahme mithilfe des Videokameras, der eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als Quelle verwendet. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird, der die Daten enthält.

## Syntax

```js-nolint
takePhoto()
takePhoto(photoSettings)
```

### Parameter

- `photoSettings` {{optional_inline}}
  - : Ein Objekt, das Optionen für das aufzunehmende Foto festlegt. Die verfügbaren Optionen sind:
    - `fillLightMode`
      - : Die Blitzlichteinstellung des Aufnahmegeräts, eine der Optionen `"auto"`, `"off"` oder `"flash"`.
    - `imageHeight`
      - : Die gewünschte Bildhöhe als Ganzzahl. Der Benutzeragent wählt den nächstliegenden Höhenwert zu dieser Einstellung, falls er nur diskrete Höhen unterstützt.
    - `imageWidth`
      - : Die gewünschte Bildbreite als Ganzzahl. Der Benutzeragent wählt den nächstliegenden Breitenwert zu dieser Einstellung, falls er nur diskrete Breiten unterstützt.
    - `redEyeReduction`
      - : Ein boolescher Wert, der angibt, ob die Rote-Augen-Reduktion verwendet werden soll, wenn sie verfügbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des in den Konstruktor übergebenen `MediaStreamTrack` nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel ist einem [einfachen Bildaufnahme-Demo](https://simpl.info/imagecapture/) entnommen. Es zeigt, wie man das von `takePhoto()` zurückgegebene {{jsxref("Promise")}} verwendet, um den zurückgegebenen [`Blob`](/de/docs/Web/API/Blob) in ein {{htmlelement("img")}}-Element zu kopieren. Der Einfachheit halber zeigt es nicht, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt instanziiert wird.

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
