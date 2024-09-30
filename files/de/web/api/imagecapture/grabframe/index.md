---
title: "ImageCapture: grabFrame()-Methode"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`grabFrame()`**-Methode der [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Schnittstelle nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird, das den Schnappschuss enthält.

## Syntax

```js-nolint
grabFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, der im Konstruktor übergeben wird, nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel ist aus dieser [Einfachen Bildaufnahme-Demo](https://simpl.info/imagecapture/) entnommen. Es zeigt, wie das von `grabFrame()` zurückgegebene {{jsxref("Promise")}} verwendet wird, um den zurückgegebenen Frame auf ein {{htmlelement("canvas")}}-Element zu kopieren. Aus Gründen der Einfachheit wird nicht gezeigt, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt instanziiert wird.

```js
let grabFrameButton = document.querySelector("button#grabFrame");
let canvas = document.querySelector("canvas");

grabFrameButton.onclick = grabFrame;

function grabFrame() {
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      console.log("Grabbed frame:", imageBitmap);
      canvas.width = imageBitmap.width;
      canvas.height = imageBitmap.height;
      canvas.getContext("2d").drawImage(imageBitmap, 0, 0);
      canvas.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("grabFrame() error: ", error);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
