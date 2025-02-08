---
title: "BrowserCaptureMediaStreamTrack: restrictTo()-Methode"
short-title: restrictTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/restrictTo
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`restrictTo()`**-Methode der [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Schnittstelle beschränkt einen Selbstaufnahme-Stream auf ein bestimmtes DOM-Element (und dessen Nachkommen).

## Syntax

```js-nolint
restrictTo(restrictionTarget)
```

### Parameter

- `restrictionTarget`
  - : Eine Instanz von [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget), die das Element repräsentiert, auf das der Stream beschränkt werden soll, oder `null`/`undefined`, in welchem Fall jegliche zuvor gesetzte Einschränkung von der Spur entfernt wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

Das Promise wird abgelehnt, wenn:

- Der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) der Spur nicht `"video"` ist, oder ihr [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `"live"` ist.
- Das Ziel-Element der Einschränkung nicht mehr existiert.
- Die eingeschränkte Spur keine Spur ist, die vom Bildschirm des Benutzers aufgenommen wurde.
- `restrictionTarget` keine Instanz von [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget), `null` oder `undefined` ist.
- `restrictionTarget` in einem anderen Tab erstellt wurde als dem, der aufgenommen wird.

> [!NOTE]
> In Chromium wird ein Aufruf von `restrictTo()` abgelehnt, wenn eine Spur Klone hat (siehe [Chrome issue 41482026](https://issues.chromium.org/issues/41482026)).

## Beispiele

### Grundlegendes Einschränkungsbeispiel

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

Sehen Sie [Verwendung der Element-Capture- und Region-Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

### Beenden der Einschränkung

Sie können die Einschränkung aufheben, indem Sie `restrictTo()` auf demselben Track aufrufen und `null` als Argument übergeben:

```js
// Stop restricting
await track.restrictTo(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element-Capture- und Region-Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
