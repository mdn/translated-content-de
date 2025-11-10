---
title: "BrowserCaptureMediaStreamTrack: restrictTo()-Methode"
short-title: restrictTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/restrictTo
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`restrictTo()`**-Methode der [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Schnittstelle beschränkt einen Selbstaufnahme-Stream auf ein bestimmtes DOM-Element (und dessen Nachkommen).

## Syntax

```js-nolint
restrictTo(restrictionTarget)
```

### Parameter

- `restrictionTarget`
  - : Eine Instanz von [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget), die das Element darstellt, auf das der Stream beschränkt werden soll, oder `null`/`undefined`, in diesem Fall wird jede zuvor gesetzte Einschränkung vom Track entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich zu {{jsxref("undefined")}} auflöst.

Das Promise wird abgelehnt, wenn:

- Der Track [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist oder dessen [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `"live"` ist.
- Das Einschränkungsziel-Element nicht mehr existiert.
- Der Track, der eingeschränkt wird, kein von dem Bildschirm des Benutzers aufgenommener Track ist.
- `restrictionTarget` keine Instanz von [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget), `null` oder `undefined` ist.
- `restrictionTarget` in einem anderen als dem aufgenommenen Tab erstellt wurde.

> [!NOTE]
> In Chromium, wenn ein Track Klone hat, wird `restrictTo()` abgelehnt (siehe [Chrome issue 41482026](https://crbug.com/41482026)).

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

Siehe [Verwendung der Elementaufnahme- und Bereichsaufnahme-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

### Beenden der Einschränkung

Sie können die Einschränkung beenden, indem Sie einen Aufruf von `restrictTo()` auf demselben Track machen und dabei `null` als Argument übergeben:

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
- [Verwendung der Elementaufnahme- und Bereichsaufnahme-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
