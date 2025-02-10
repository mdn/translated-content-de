---
title: RestrictionTarget
slug: Web/API/RestrictionTarget
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Das **`RestrictionTarget`**-Interface der [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) stellt eine statische Methode [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) bereit, die eine `RestrictionTarget`-Instanz zurückgibt, welche verwendet werden kann, um eine aufgezeichnete Videospur auf ein bestimmtes DOM-Element zu beschränken.

{{InheritanceDiagram}}

## Statische Methoden

- [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) {{Experimental_Inline}}
  - : Gibt eine `RestrictionTarget`-Instanz zurück, die verwendet werden kann, um eine aufgezeichnete Videospur auf ein spezifisches DOM-Element (einschließlich seiner Nachfahren) zu beschränken.

## Beispiele

```js
// Options for getDisplayMedia()
const displayMediaOptions = {
  preferCurrentTab: true,
};

// Create restriction target from DOM element
const demoElem = document.querySelector("#demo");
const restrictionTarget = await RestrictionTarget.fromElement(demoElem);

// Capture video stream from user's webcam and isolate video track
const stream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
const [track] = stream.getVideoTracks();

// Restrict video track
await track.restrictTo(restrictionTarget);

// Broadcast restricted stream in <video> element
videoElem.srcObject = stream;
```

Siehe [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
