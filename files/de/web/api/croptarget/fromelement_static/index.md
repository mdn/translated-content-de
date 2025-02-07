---
title: "CropTarget: fromElement() statische Methode"
short-title: fromElement()
slug: Web/API/CropTarget/fromElement_static
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`**-statische Methode der [`CropTarget`](/de/docs/Web/API/CropTarget)-Schnittstelle gibt eine `CropTarget`-Instanz zurück, die verwendet werden kann, um eine aufgenommene Video-Spur auf den Bereich zuzuschneiden, in dem ein angegebenes Element dargestellt wird.

Da die Region Capture API auf einen Bereich des aktuellen Browser-Tabs zuschneidet, anstatt ein spezifisches Element aufzunehmen, wird jeglicher Inhalt, der über dem zugeschnittenen Bereich angezeigt wird, in der Aufnahme sichtbar sein.

## Syntax

```js-nolint
CropTarget.fromElement(element)
```

### Parameter

- `element`

  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Ziel für das Zuschneiden verwenden möchten. Damit ein Element als Ziel für das Zuschneiden verwendet werden kann, muss es:

    - Auf dem Bildschirm sichtbar sein
    - Sichtbar sein, d. h. nicht zum Beispiel durch `display: none` versteckt sein.

    Zusätzlich wird das Element nicht aufgenommen, wenn die eingeschränkte Spur Klone hat (zum Beispiel erstellt von [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder von einem anderen Tab als dem aktuellen Benutzertab aufgenommen wird (beispielsweise über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben).

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`CropTarget`](/de/docs/Web/API/CropTarget)-Objekt instanziiert wird, welches dann an [`BrowserCaptureMediaStreamTrack.CropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/CropTo) übergeben werden kann, um das in der Spur aufgenommene Video auf den Bereich zuzuschneiden, in dem das angegebene DOM-Element gerendert wird.

`CropTarget`-Objekte sind serialisierbar. Sie können an ein anderes Dokument über Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben werden.

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

Sehen Sie sich [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
