---
title: "CropTarget: fromElement() statische Methode"
short-title: fromElement()
slug: Web/API/CropTarget/fromElement_static
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`fromElement()`** des [`CropTarget`](/de/docs/Web/API/CropTarget)-Interfaces gibt eine `CropTarget`-Instanz zurück, die verwendet werden kann, um eine aufgenommene Video-Spur auf den Bereich zuzuschneiden, in dem ein bestimmtes Element gerendert wird.

Da die Region Capture API auf einen Bereich des aktuellen Browser-Tabs zuschneidet, anstatt ein spezifisches Element aufzunehmen, wird jeglicher Inhalt, der über den zugeschnittenen Bereich gezeichnet wird, ebenfalls in der Aufnahme angezeigt.

## Syntax

```js-nolint
CropTarget.fromElement(element)
```

### Parameter

- `element`

  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Zuschneideziel verwenden möchten. Damit ein Element als Ziel verwendet werden kann, muss es:

    - Auf dem Bildschirm sichtbar sein
    - Sichtbar sein, d.h. nicht beispielsweise über `display: none` ausgeblendet sein.

    Zusätzlich wird das Element nicht aufgenommen, wenn der eingeschränkte Track Klone aufweist (z. B. erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder aus einem anderen Tab als dem aktuellen Tab des Nutzers aufgenommen wird (z. B. über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übermittelt).

### Rückgabewert

Ein {{jsxref("Promise")}}, der auf eine Instanz des [`CropTarget`](/de/docs/Web/API/CropTarget)-Objekts aufgelöst wird. Dieses Objekt kann dann an [`BrowserCaptureMediaStreamTrack.CropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/CropTo) übergeben werden, um das im Track aufgenommene Video auf genau den Bereich zuzuschneiden, in dem das angegebene DOM-Element gerendert wird.

`CropTarget`-Objekte sind serialisierbar. Sie können mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an ein anderes Dokument übergeben werden.

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

Lesen Sie [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
