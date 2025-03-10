---
title: "BrowserCaptureMediaStreamTrack: cropTo()-Methode"
short-title: cropTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/cropTo
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`cropTo()`**-Methode des [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Interfaces schneidet einen Selbstaufnahme-Stream auf den Bereich zu, in dem ein bestimmtes DOM-Element gerendert wird.

## Syntax

```js-nolint
cropTo(cropTarget)
```

### Parameter

- `cropTarget`
  - : Eine [`CropTarget`](/de/docs/Web/API/CropTarget)-Instanz, die den Elementrenderingbereich darstellt, auf den der Stream zugeschnitten werden soll, oder `null`/`undefined`, in welchem Fall ein zuvor eingestellter Zuschnitt vom Track entfernt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

Der Promise wird abgelehnt, wenn:

- Der Track [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist oder sein [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `"live"` ist.
- Das Ziel-Element für den Zuschnitt nicht mehr existiert.
- Der zugeschnittene Track nicht von dem Bildschirm des Nutzers erfasst wurde.
- `cropTarget` keine Instanz von [`CropTarget`](/de/docs/Web/API/CropTarget), `null` oder `undefined` ist.
- `cropTarget` in einem anderen Tab als dem erfassten erstellt wurde.

> [!NOTE]
> In Chromium wird `cropTo()` abgelehnt, wenn ein Track Klone hat (siehe [Chrome-Issue 41482026](https://crbug.com/41482026)).

## Beispiele

### Einfaches Beispiel für das Zuschneiden

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

Siehe [Verwendung der Element- und Region-Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für kontextbezogenen Beispielcode.

### Das Zuschneiden stoppen

Sie können das Zuschneiden stoppen, indem Sie einen Aufruf von `cropTo()` auf einem zuvor zugeschnittenen Track tätigen und ihm das Argument `null` übergeben:

```js
// Stop cropping
await track.cropTo(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element- und Region-Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
