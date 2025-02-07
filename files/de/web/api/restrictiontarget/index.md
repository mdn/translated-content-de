---
title: RestrictionTarget
slug: Web/API/RestrictionTarget
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Das **`RestrictionTarget`**-Interface der [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static), die eine `RestrictionTarget`-Instanz zurückgibt. Diese Instanz kann verwendet werden, um eine aufgenommene Videospur auf ein bestimmtes DOM-Element zu beschränken.

{{InheritanceDiagram}}

## Statische Methoden

- [`fromElement()`](/de/docs/Web/API/RestrictionTarget/fromElement_static) {{Experimental_Inline}}
  - : Gibt eine `RestrictionTarget`-Instanz zurück, die verwendet werden kann, um eine aufgenommene Videospur auf ein bestimmtes DOM-Element (sowie dessen Nachfahren) zu beschränken.

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

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für ein Beispiel im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
