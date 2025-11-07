---
title: "RestrictionTarget: statische Methode fromElement()"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`** statische Methode der [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Schnittstelle gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurück, die verwendet werden kann, um eine aufgenommene Videospur auf ein angegebenes DOM-Element (plus seine Nachkommen) zu beschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Eine Referenz zu einem [`Element`](/de/docs/Web/API/Element), das Sie als Einschränkungsziel verwenden möchten. Damit ein Element als Einschränkungsziel verwendet werden kann, muss es:

    - Einen [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) bilden.
    - Im 3D-Raum abgeflacht sein (zum Beispiel darf es keinen 3D-[Transformationen](/de/docs/Web/CSS/Guides/Transforms) unterliegen).
    - Gerendert sein (zum Beispiel nicht außerhalb des Bildschirms oder über `display: none` versteckt sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel nicht über mehrere Zeilen hinweg gebrochen sein).

    Wird keines der oben genannten Kriterien erfüllt, gilt es als **nicht für eine Einschränkung geeignet**.

    Zusätzlich wird das Element nicht erfasst, wenn die eingeschränkte Spur Klone hat (d.h. erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder aus einem anderen Tab als dem aktuellen Benutzer-Tab erfasst wurde (z. B. über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übermittelt).

> [!NOTE]
> Wenn das Element erfasst wird, wird jeder darauf gesetzte Alpha-Kanal-Wert nicht eingeschlossen. Wenn das Einschränkungsziel-Element halbtransparent ist, wird es in der Aufnahme vollständig undurchsichtig und sieht daher anders aus.

### Rückgabewert

Ein {{jsxref("Promise")}}, der zu einer [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Objektinstanz aufgelöst wird, die dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden kann, um das im Track aufgenommene Video auf genau das bestimmte DOM-Element, mit dem das `RestrictionTarget` erstellt wurde, zu beschränken.

`RestrictionTarget`-Objekte sind serialisierbar. Sie können über Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an ein anderes Dokument übergeben werden.

Das Versprechen wird abgelehnt, wenn das Einschränkungsziel-Element nicht für eine Einschränkung geeignet ist.

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

Sehen Sie sich [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
