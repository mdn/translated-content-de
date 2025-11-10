---
title: "HTMLVideoElement: cancelVideoFrameCallback() Methode"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("HTML DOM")}}

Die **`cancelVideoFrameCallback()`**-Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Interfaces storniert einen zuvor registrierten Video Frame Callback.

## Syntax

```js-nolint
cancelVideoFrameCallback(id)
```

### Parameter

- `id`
  - : Eine Zahl, die die ID des Video Frame Callbacks darstellt, den Sie stornieren möchten. Dies wird der Wert sein, der von dem entsprechenden [`HTMLVideoElement.requestVideoFrameCallback`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) Aufruf zurückgegeben wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Video Frame Callback stornieren

Dieses Beispiel zeigt, wie `cancelVideoFrameCallback()` verwendet wird, um einen zuvor registrierten Video Frame Callback zu stornieren.

```js
let videoCallbackId = null;

function updateCanvas(now, metadata) {
  // Do something with the frame

  // …

  // Re-register the callback to run on the next frame
  // It's important to update the videoCallbackId on each iteration
  // so you can cancel the callback successfully
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
}

// Initial registration of the callback to run on the first frame
videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// …

// Cancel video frame callback using the latest videoCallbackId
if (videoCallbackId !== null) {
  video.cancelVideoFrameCallback(videoCallbackId);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}} Element
- [`HTMLVideoElement.requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback)
- [Effiziente pro-Video-Frame-Operationen mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
