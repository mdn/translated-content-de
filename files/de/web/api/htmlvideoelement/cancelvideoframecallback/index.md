---
title: "HTMLVideoElement: Methode cancelVideoFrameCallback()"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

Die **`cancelVideoFrameCallback()`**-Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces storniert einen zuvor registrierten Video-Frame-Callback.

## Syntax

```js-nolint
cancelVideoFrameCallback(id)
```

### Parameter

- `id`
  - : Eine Zahl, die die ID des Video-Frame-Callbacks darstellt, das Sie stornieren möchten. Dies ist der Wert, der von dem entsprechenden [`HTMLVideoElement.requestVideoFrameCallback`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)-Aufruf zurückgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Stornieren eines Video-Frame-Callbacks

Dieses Beispiel zeigt, wie Sie `cancelVideoFrameCallback()` verwenden, um einen zuvor registrierten Video-Frame-Callback zu stornieren.

```js
const updateCanvas = (now, metadata) => {
  // Do something with the frame

  // ...

  // Re-register the callback to run on the next frame
  // It's important to update the videoCallbackId on each iteration
  // so you can cancel the callback successfully
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
};

// Initial registration of the callback to run on the first frame
let videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// ...

// Cancel video frame callback using the latest videoCallbackId
video.cancelVideoFrameCallback(videoCallbackId);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
- [Effiziente Operationen pro Video-Frame auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
