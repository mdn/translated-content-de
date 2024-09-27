---
title: "ImageCapture: getPhotoSettings()-Methode"
short-title: getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`getPhotoSettings()`**-Methode der [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die aktuellen Fotoeinstellungen enthält.

## Syntax

```js-nolint
getPhotoSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `fillLightMode`
  - : Die Blitzeinstellung des Aufnahmegeräts, eine von `"auto"`, `"off"` oder `"flash"`.
- `imageHeight`
  - : Die gewünschte Bildhöhe als Ganzzahl. Der Browser wählt den nächstliegenden Wert zu dieser Einstellung, wenn er nur diskrete Höhen unterstützt.
- `imageWidth`
  - : Die gewünschte Bildbreite als Ganzzahl. Der Browser wählt den nächstliegenden Wert zu dieser Einstellung, wenn er nur diskrete Breiten unterstützt.
- `redEyeReduction`
  - : Ein Boolean, der anzeigt, ob die Rote-Augen-Reduzierung verwendet werden soll, falls verfügbar.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet die Ergebnisse von `getPhotoSettings()`, um die Größe eines Eingabebereichs zu ändern. Dieses Beispiel zeigt auch, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt mit einem durch ein Gerät abgerufenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt wird.

```js
const input = document.querySelector('input[type="range"]');

let imageCapture;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);

    return imageCapture.getPhotoCapabilities();
  })
  .then((photoCapabilities) => {
    const settings = imageCapture.track.getSettings();

    input.min = photoCapabilities.imageWidth.min;
    input.max = photoCapabilities.imageWidth.max;
    input.step = photoCapabilities.imageWidth.step;

    return imageCapture.getPhotoSettings();
  })
  .then((photoSettings) => {
    input.value = photoSettings.imageWidth;
  })
  .catch((error) => console.error("Argh!", error.name || error));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
