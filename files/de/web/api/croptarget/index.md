---
title: CropTarget
slug: Web/API/CropTarget
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Die **`CropTarget`**-Schnittstelle der [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) bietet eine statische Methode, [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static), die eine `CropTarget`-Instanz zurückgibt. Diese kann verwendet werden, um eine erfasste Video-Spur auf den Bereich zuzuschneiden, in dem ein angegebenes Element gerendert wird.

{{InheritanceDiagram}}

## Statische Methoden

- [`fromElement()`](/de/docs/Web/API/CropTarget/fromElement_static) {{Experimental_Inline}}
  - : Gibt eine `CropTarget`-Instanz zurück, die verwendet werden kann, um eine erfasste Video-Spur auf den Bereich zuzuschneiden, in dem ein angegebenes Element gerendert wird.

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

// Broadcast cropped stream in <video> element
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
