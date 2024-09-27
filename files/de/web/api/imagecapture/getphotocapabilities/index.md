---
title: "ImageCapture: getPhotoCapabilities()-Methode"
short-title: getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`getPhotoCapabilities()`**-Methode der [`ImageCapture`](/de/docs/Web/API/ImageCapture) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.

## Syntax

```js-nolint
getPhotoCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `redEyeReduction`
  - : Gibt einen der Werte `"never"`, `"always"` oder `"controllable"` zurück. Der Wert `"controllable"` bedeutet, dass die Reduzierung des Rote-Augen-Effekts des Geräts durch den Benutzer steuerbar ist.
- `imageHeight`
  - : Gibt ein Objekt zurück, das den vom Benutzeragenten unterstützten Bereich der Bildhöhe angibt.
- `imageWidth`
  - : Gibt ein Objekt zurück, das den vom Benutzeragenten unterstützten Bereich der Bildbreite angibt.
- `fillLightMode`
  - : Gibt ein Array der verfügbaren Optionen für das Fülllicht zurück. Zu den Optionen gehören `auto`, `off` oder `flash`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, das aus [Chrome's Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html) entnommen ist, verwendet die Ergebnisse von `getPhotoCapabilities()`, um die Größe eines Eingabebereichs zu ändern. Dieses Beispiel zeigt auch, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt mit einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt wird, das von einem Gerät über einen [`MediaStream`](/de/docs/Web/API/MediaStream) abgerufen wird.

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
