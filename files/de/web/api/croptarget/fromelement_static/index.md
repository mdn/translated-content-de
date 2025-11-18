---
title: "CropTarget: fromElement() Methode"
short-title: fromElement()
slug: Web/API/CropTarget/fromElement_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`** statische Methode des [`CropTarget`](/de/docs/Web/API/CropTarget)-Interfaces gibt eine `CropTarget`-Instanz zurück, die verwendet werden kann, um einen aufgenommenen Videokanal auf den Bereich zu beschneiden, in dem ein bestimmtes Element gerendert wird.

Da die Region Capture API auf einen Bereich des aktuellen Browser-Tabs zuschneidet, anstatt ein bestimmtes Element aufzunehmen, wird jeglicher Inhalt, der über dem zugeschnittenen Bereich gezeichnet wird, in der Aufnahme angezeigt.

## Syntax

```js-nolint
CropTarget.fromElement(element)
```

### Parameter

- `element`
  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Zuschneideziel verwenden möchten. Damit ein Element als Zuschneideziel verwendet werden kann, muss es:
    - Auf dem Bildschirm sein
    - Sichtbar sein, das heißt, nicht beispielsweise durch `display: none` ausgeblendet.

    Zusätzlich wird das Element nicht erfasst, wenn der eingeschränkte Kanal Klone hat (das heißt, erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder von einem anderen Tab als dem aktuellen Tab des Benutzers aufgenommen wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben).

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer [`CropTarget`](/de/docs/Web/API/CropTarget)-Objektinstanz aufgelöst wird, die dann an [`BrowserCaptureMediaStreamTrack.CropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) übergeben werden kann, um das im Kanal aufgenommene Video nur auf den Bereich, in dem das angegebene DOM-Element gerendert wird, zu beschneiden.

`CropTarget`-Objekte sind serialisierbar. Sie können an ein anderes Dokument mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben werden.

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

Sehen Sie [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für kontextbezogene Beispielcodes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
