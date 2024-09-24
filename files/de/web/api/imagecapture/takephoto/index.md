---
title: "ImageCapture: takePhoto()-Methode"
short-title: takePhoto()
slug: Web/API/ImageCapture/takePhoto
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`takePhoto()`**-Methode der {{domxref("ImageCapture")}}-Schnittstelle macht eine Einzelaufnahme mit dem Videogerät, das eine {{domxref("MediaStreamTrack")}} als Quelle verwendet und gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} aufgelöst wird, der die Daten enthält.

## Syntax

```js-nolint
takePhoto()
takePhoto(photoSettings)
```

### Parameter

- `photoSettings` {{optional_inline}}

  - : Ein Objekt, das Optionen für das aufzunehmende Foto festlegt. Die verfügbaren Optionen sind:

    - `fillLightMode`
      - : Die Blitzeinstellung des Aufnahmegerätes, entweder `"auto"`, `"off"` oder `"flash"`.
    - `imageHeight`
      - : Die gewünschte Bildhöhe als Ganzzahl. Der Benutzeragent wählt den nächsten Wert zur Angabe, wenn nur diskrete Höhen unterstützt werden.
    - `imageWidth`
      - : Die gewünschte Bildbreite als Ganzzahl. Der Benutzeragent wählt den nächsten Wert zur Angabe, wenn nur diskrete Breiten unterstützt werden.
    - `redEyeReduction`
      - : Ein boolescher Wert, der angibt, ob die Rote-Augen-Reduktion verwendet werden soll, wenn verfügbar.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("Blob")}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, der im Konstruktor übergeben wurde, nicht `live` ist.
- `UnknownError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel stammt aus dieser [Simple Image Capture-Demo](https://simpl.info/imagecapture/). Es zeigt, wie man das von `takePhoto()` zurückgegebene {{jsxref("Promise")}} verwendet, um den zurückgegebenen {{domxref("Blob")}} an ein {{htmlelement("img")}}-Element zu kopieren. Zur Vereinfachung zeigt es nicht, wie das {{domxref("ImageCapture")}}-Objekt instanziiert wird.

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
