---
title: "ImageCapture: grabFrame() Methode"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Image Capture API")}}

Die **`grabFrame()`** Methode des [`ImageCapture`](/de/docs/Web/API/ImageCapture) Interface nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird, das den Schnappschuss enthält.

## Syntax

```js-nolint
grabFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `readyState` Eigenschaft des `MediaStreamTrack`, der im Konstruktor übergeben wird, nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel stammt aus diesem [Einfachen Bildaufnahme-Demo](https://simpl.info/imagecapture/). Es zeigt, wie man das von `grabFrame()` zurückgegebene {{jsxref("Promise")}} verwenden kann, um den zurückgegebenen Frame auf ein {{htmlelement("canvas")}}-Element zu kopieren. Der Einfachheit halber wird nicht gezeigt, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture) Objekt instanziiert wird.

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
