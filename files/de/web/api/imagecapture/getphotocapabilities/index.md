---
title: "ImageCapture: getPhotoCapabilities()-Methode"
short-title: getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`getPhotoCapabilities()`**-Methode des {{domxref("ImageCapture")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.

## Syntax

```js-nolint
getPhotoCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `redEyeReduction`
  - : Gibt einen Wert von `"never"`, `"always"` oder `"controllable"` zurück. Der Wert `"controllable"` bedeutet, dass die Reduzierung des Rote-Augen-Effekts des Geräts vom Benutzer kontrolliert werden kann.
- `imageHeight`
  - : Gibt ein Objekt zurück, das den von der Benutzeragentur unterstützten Bereich der Bildhöhe angibt.
- `imageWidth`
  - : Gibt ein Objekt zurück, das den von der Benutzeragentur unterstützten Bereich der Bildbreite angibt.
- `fillLightMode`
  - : Gibt ein Array mit den verfügbaren Fülllichtoptionen zurück. Optionen umfassen `auto`, `off` oder `flash`.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Eigenschaft `readyState` des `MediaStreamTrack`, der im Konstruktor übergeben wird, nicht `live` ist.
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, entnommen aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet die Ergebnisse von `getPhotoCapabilities()`, um die Größe eines Eingabebereichs anzupassen. Dieses Beispiel zeigt auch, wie das {{domxref("ImageCapture")}}-Objekt erstellt wird, indem ein {{domxref("MediaStreamTrack")}} verwendet wird, das von einem Gerät über einen {{domxref("MediaStream")}} abgerufen wird.

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
