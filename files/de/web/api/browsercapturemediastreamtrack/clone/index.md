---
title: "BrowserCaptureMediaStreamTrack: clone()-Methode"
short-title: clone()
slug: Web/API/BrowserCaptureMediaStreamTrack/clone
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`clone()`**-Methode der [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Schnittstelle gibt einen Klon des ursprünglichen `BrowserCaptureMediaStreamTrack` zurück.

Diese Methode ist funktional identisch mit [`MediaStreamTrack.clone()`](/de/docs/Web/API/MediaStreamTrack/clone), außer dass sie Fälle behandelt, in denen das Track zugeschnitten oder eingeschränkt wurde. Der zurückgegebene Klon ist identisch zum ursprünglichen `BrowserCaptureMediaStreamTrack`, jedoch ohne jegliches Zuschneiden oder Einschränkungen.

> [!NOTE]
> In Chromium werden die Methoden [`cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) und [`restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) abgelehnt, wenn ein Track Klone hat (siehe [Chrome-Issue 41482026](https://issues.chromium.org/issues/41482026)).

## Syntax

```js-nolint
clone()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz von [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack).

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
