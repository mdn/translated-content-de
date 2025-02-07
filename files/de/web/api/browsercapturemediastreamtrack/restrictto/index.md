---
title: "BrowserCaptureMediaStreamTrack: restrictTo()-Methode"
short-title: restrictTo()
slug: Web/API/BrowserCaptureMediaStreamTrack/restrictTo
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`restrictTo()`**-Methode der [`BrowserCaptureMediaStreamTrack`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack)-Schnittstelle beschränkt einen Selbstaufnahme-Stream auf ein spezifisches DOM-Element (und dessen Nachkommen).

## Syntax

```js-nolint
restrictTo(restrictionTarget)
```

### Parameter

- `restrictionTarget`
  - : Eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz, die das Element repräsentiert, auf das der Stream beschränkt werden soll, oder `null`/`undefined`. In diesem Fall wird jede zuvor gesetzte Einschränkung von der Spur entfernt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

Das Promise schlägt fehl, wenn:

- Die Spur [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) nicht `"video"` ist oder deren [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) nicht `"live"` ist.
- Das Ziel-Element der Einschränkung nicht mehr existiert.
- Die eingeschränkte Spur keine Spur ist, die vom Bildschirm des Nutzers aufgenommen wurde.
- `restrictionTarget` keine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz, `null` oder `undefined` ist.
- `restrictionTarget` in einem anderen Tab erstellt wurde als dem, der gerade aufgezeichnet wird.

> [!NOTE]
> In Chromium schlägt `restrictTo()` fehl, wenn eine Spur Klone hat (siehe [Chrome Issue 41482026](https://issues.chromium.org/issues/41482026)).

## Beispiele

### Einfaches Beispiel für eine Einschränkung

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

Sehen Sie sich [Verwendung der APIs für Element- und Bereichserfassung](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext an.

### Beenden der Einschränkung

Sie können die Einschränkung beenden, indem Sie `restrictTo()` auf derselben Spur aufrufen und dabei `null` als Argument übergeben:

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
- [Verwendung der APIs für Element- und Bereichserfassung](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
