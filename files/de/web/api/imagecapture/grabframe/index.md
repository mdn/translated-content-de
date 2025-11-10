---
title: "ImageCapture: grabFrame() Methode"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Image Capture API")}}

Die **`grabFrame()`**-Methode des [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Interfaces nimmt einen Schnappschuss des Live-Videos in einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf und gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird, das den Schnappschuss enthält.

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
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wird, nicht `live` ist.
- `UnknownError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Operation aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel ist aus diesem [einfachen Image Capture-Demo](https://simpl.info/imagecapture/) entnommen. Es zeigt, wie das von `grabFrame()` zurückgegebene {{jsxref("Promise")}} verwendet wird, um den zurückgegebenen Frame zu einem {{htmlelement("canvas")}}-Element zu kopieren. Aus Einfachheitsgründen zeigt es nicht, wie das [`ImageCapture`](/de/docs/Web/API/ImageCapture)-Objekt instanziiert wird.

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
