---
title: "ImageCapture: Methode getPhotoSettings()"
short-title: getPhotoSettings()
slug: Web/API/ImageCapture/getPhotoSettings
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Image Capture API")}}

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
  - : Die Blitzeinstellung des Erfassungsgeräts, eine der Optionen `"auto"`, `"off"` oder `"flash"`.
- `imageHeight`
  - : Die gewünschte Bildhöhe als Ganzzahl. Der Browser wählt den nächstgelegenen Höhenwert zu dieser Einstellung, wenn er nur diskrete Höhen unterstützt.
- `imageWidth`
  - : Die gewünschte Bildbreite als Ganzzahl. Der Browser wählt den nächstgelegenen Breitenwert zu dieser Einstellung, wenn er nur diskrete Breiten unterstützt.
- `redEyeReduction`
  - : Ein boolescher Wert, der anzeigt, ob die Rote-Augen-Reduktion verwendet werden soll, wenn sie verfügbar ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet die Ergebnisse von `getPhotoSettings()`, um die Größe eines Eingabebereichs zu ändern. Dieses Beispiel zeigt auch, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt erstellt wird, indem ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) von einem Gerät's [`MediaStream`](/de/docs/Web/API/MediaStream) abgerufen wird.

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
