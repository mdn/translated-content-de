---
title: "BrowserCaptureMediaStreamTrack: clone() Methode"
short-title: clone()
slug: Web/API/BrowserCaptureMediaStreamTrack/clone
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`clone()`**-Methode des [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Interfaces gibt einen Klon des ursprünglichen `BrowserCaptureMediaStreamTrack` zurück.

Diese Methode ist funktional identisch zu [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone), außer dass sie Fälle behandelt, in denen Zuschnitt oder Einschränkung auf den Track angewendet wurden. Der zurückgegebene Klon ist identisch mit dem ursprünglichen `BrowserCaptureMediaStreamTrack`, jedoch ohne Zuschnitt oder Einschränkung.

> [!NOTE]
> In Chromium, wenn ein Track Klone hat, werden seine Methoden [`cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) und [`restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) verweigert (siehe [Chrome Problem 41482026](https://crbug.com/41482026)).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Eine [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Instanz.

## Beispiele

```js
// Options for getDisplayMedia()
const displayMediaOptions = {
  preferCurrentTab: true,
};

// Create crop target from DOM element
const demoElem = document.querySelector("#demo");
const cropTarget = await CropTarget.fromElement(demoElem);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Crop video track
await track.cropTo(cropTarget);

// Create uncropped clone of the track
const clonedTrack = track.clone();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
