---
title: "HTMLVideoElement: cancelVideoFrameCallback() Methode"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

Die **`cancelVideoFrameCallback()`**-Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle storniert einen zuvor registrierten Video-Frame-Callback.

## Syntax

```js-nolint
cancelVideoFrameCallback(id)
```

### Parameter

- `id`
  - : Eine Zahl, die die ID des Video-Frame-Callbacks repräsentiert, den Sie stornieren möchten. Dies wird der Wert sein, der durch den entsprechenden Aufruf von [`HTMLVideoElement.requestVideoFrameCallback`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) zurückgegeben wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Video-Frame-Callback stornieren

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
- [Führen Sie effiziente Operationen pro Video-Frame mit `requestVideoFrameCallback()` aus](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
