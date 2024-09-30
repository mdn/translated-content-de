---
title: "ImageCapture: getPhotoCapabilities()-Methode"
short-title: getPhotoCapabilities()
slug: Web/API/ImageCapture/getPhotoCapabilities
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`getPhotoCapabilities()`**-Methode des [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Interfaces gibt ein {{jsxref("Promise")}}
zurück, das mit einem Objekt aufgelöst wird, das die Bereiche der verfügbaren Konfigurationsoptionen enthält.

## Syntax

```js-nolint
getPhotoCapabilities()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Eigenschaften enthält:

- `redEyeReduction`
  - : Gibt einen der Werte `"never"`, `"always"` oder `"controllable"` zurück. Der Wert `"controllable"` bedeutet, dass die Reduzierung des Rote-Augen-Effekts durch den Benutzer gesteuert werden kann.
- `imageHeight`
  - : Gibt ein Objekt zurück, das den vom Benutzeragenten unterstützten Bildhöhensbereich angibt.
- `imageWidth`
  - : Gibt ein Objekt zurück, das den vom Benutzeragenten unterstützten Bildbreitenbereich angibt.
- `fillLightMode`
  - : Gibt ein Array der verfügbaren Optionen für die Fülllichtmodi zurück. Zu den Optionen gehören `auto`, `off` oder `flash`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des im Konstruktor übergebenen `MediaStreamTrack` nicht `live` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Das folgende Beispiel, extrahiert aus dem [Chrome Image Capture / Photo Resolution Sample](https://googlechrome.github.io/samples/image-capture/photo-resolution.html), verwendet die Ergebnisse von `getPhotoCapabilities()`, um die Größe eines Eingabebereichs zu ändern. Dieses Beispiel zeigt auch, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt unter Verwendung eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt wird, das von einem Gerät-`MediaStream`](/de/docs/Web/API/MediaStream) abgerufen wurde.

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
