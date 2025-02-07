---
title: "BrowserCaptureMediaStreamTrack: cropTo()-Methode"
short-title: cropTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/cropTo
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`cropTo()`**-Methode der [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Schnittstelle beschneidet einen Selbstaufnahme-Stream auf den Bereich, in dem ein angegebenes DOM-Element gerendert wird.

## Syntax

```js-nolint
cropTo(cropTarget)
```

### Parameter

- `cropTarget`
  - : Eine Instanz von [`CropTarget`](/de/docs/Web/API/CropTarget), die den Bereich des renderten Elements repräsentiert, auf den der Stream beschnitten werden soll, oder `null`/`undefined`. In diesem Fall wird ein zuvor festgelegtes Beschneiden vom Track entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

Das Promise wird abgelehnt, wenn:

- Der Track [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist oder dessen [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `"live"` ist.
- Das Element des Beschneidungsziels nicht mehr existiert.
- Der zu beschneidende Track nicht von dem Bildschirm des Benutzers erfasst wurde.
- `cropTarget` keine Instanz von [`CropTarget`](/de/docs/Web/API/CropTarget) ist, oder `null`/`undefined` ist.
- `cropTarget` in einem anderen Tab erstellt wurde, als der, der erfasst wird.

> [!NOTE]
> In Chromium wird, falls ein Track Klone hat, `cropTo()` abgelehnt (siehe [Chrome-Issue 41482026](https://issues.chromium.org/issues/41482026)).

## Beispiele

### Einfaches Beispiel für das Beschneiden

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

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

### Beenden des Beschneidens

Sie können das Beschneiden beenden, indem Sie einen Aufruf von `cropTo()` auf einen zuvor beschnittenen Track machen und ihm das Argument `null` übergeben:

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
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
