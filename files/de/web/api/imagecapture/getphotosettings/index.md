---
title: "ImageCapture: getPhotoSettings() Methode"
short-title: getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`getPhotoSettings()`** Methode der
{{domxref("ImageCapture")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die aktuellen Fotoeinstellungen enthält.

## Syntax

```js-nolint
getPhotoSettings()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `fillLightMode`
  - : Die Blitz-Einstellung des Aufnahmegeräts, eine der Optionen `"auto"`, `"off"` oder `"flash"`.
- `imageHeight`
  - : Die gewünschte Bildhöhe als Ganzzahl. Der Browser wählt den nächstliegenden Wert, wenn er nur diskrete Höhen unterstützt.
- `imageWidth`
  - : Die gewünschte Bildbreite als Ganzzahl. Der Browser wählt den nächstliegenden Wert, wenn er nur diskrete Breiten unterstützt.
- `redEyeReduction`
  - : Ein boolean-Wert, der angibt, ob die Rote-Augen-Reduktion, falls verfügbar, verwendet werden soll.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wirft eine Ausnahme, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `OperationError` {{domxref("DOMException")}}
  - : Wirft eine Ausnahme, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet die Ergebnisse von
`getPhotoSettings()`, um die Größe eines Eingabebereichs zu ändern. Dieses Beispiel zeigt auch, wie das {{domxref("ImageCapture")}}-Objekt mit einem
{{domxref("MediaStreamTrack")}}, das von einem Gerät {{domxref("MediaStream")}} abgerufen wird, erstellt wird.

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
