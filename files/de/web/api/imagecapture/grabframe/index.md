---
title: "ImageCapture: grabFrame()-Methode"
short-title: grabFrame()
slug: Web/API/ImageCapture/grabFrame
l10n:
  sourceCommit: 91090d531495c5387b584fa07708dd2a8278eba1
---

{{APIRef("Image Capture API")}}{{SeeCompatTable}}

Die **`grabFrame()`**-Methode des {{domxref("ImageCapture")}}-Interfaces erstellt einen Schnappschuss des Live-Videos in einem {{domxref("MediaStreamTrack")}} und gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("ImageBitmap")}} aufgelöst wird, welches den Schnappschuss enthält.

## Syntax

```js-nolint
grabFrame()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("ImageBitmap")}}-Objekt aufgelöst wird.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `readyState`-Eigenschaft des `MediaStreamTrack`, das im Konstruktor übergeben wurde, nicht `live` ist.
- `UnknownError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Vorgang aus irgendeinem Grund nicht abgeschlossen werden kann.

## Beispiele

Dieses Beispiel ist aus diesem [Simple Image Capture Demo](https://simpl.info/imagecapture/) entnommen. Es zeigt, wie das von `grabFrame()` zurückgegebene {{jsxref("Promise")}} verwendet wird, um den zurückgegebenen Frame in ein {{htmlelement("canvas")}}-Element zu kopieren. Der Einfachheit halber wird nicht gezeigt, wie das {{domxref("ImageCapture")}}-Objekt instanziiert wird.

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
