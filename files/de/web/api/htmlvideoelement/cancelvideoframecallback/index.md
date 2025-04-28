---
title: "HTMLVideoElement: cancelVideoFrameCallback()-Methode"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("HTML DOM")}}

Die **`cancelVideoFrameCallback()`**-Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces storniert einen zuvor registrierten Video-Frame-Callback.

## Syntax

```js-nolint
cancelVideoFrameCallback(id)
```

### Parameter

- `id`
  - : Eine Zahl, die die ID des Video-Frame-Callbacks darstellt, den Sie stornieren möchten. Dies wird der Wert sein, der durch den entsprechenden Aufruf von [`HTMLVideoElement.requestVideoFrameCallback`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) zurückgegeben wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Video-Frame-Callback stornieren

Dieses Beispiel zeigt, wie Sie `cancelVideoFrameCallback()` verwenden, um einen zuvor registrierten Video-Frame-Callback zu stornieren.

```js
const updateCanvas = (now, metadata) => {
  // Do something with the frame

  // …

  // Re-register the callback to run on the next frame
  // It's important to update the videoCallbackId on each iteration
  // so you can cancel the callback successfully
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
};

// Initial registration of the callback to run on the first frame
let videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// …

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
- [Durchführung effizienter video-frame-basierter Operationen auf Video mit `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
