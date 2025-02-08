---
title: "RestrictionTarget: Die statische Methode fromElement()"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`fromElement()`** der [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Schnittstelle gibt eine Instanz von [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) zurück, die verwendet werden kann, um eine erfasste Videospur auf ein bestimmtes DOM-Element (und dessen Nachkommen) einzuschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Eingrenzungsziel verwenden möchten. Damit ein Element als Eingrenzungsziel verwendet werden kann, muss es:

    - Einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) bilden.
    - Im 3D-Raum abgeflacht sein (zum Beispiel darf es keinen 3D-[Transforms](/de/docs/Web/CSS/CSS_transforms) unterliegen).
    - Gerendert sein (zum Beispiel darf es sich nicht außerhalb des sichtbaren Bereichs befinden oder durch `display: none` ausgeblendet sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel darf es nicht über mehrere Zeilen aufgeteilt sein).

    Wenn es die oben genannten Kriterien nicht erfüllt, gilt es als **nicht geeignet für die Einschränkung**.

    Zusätzlich wird das Element nicht erfasst, wenn die eingeschränkte Spur Klone hat (zum Beispiel durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone) erstellt) oder aus einem anderen Tab als dem aktuellen Benutzer-Tab erfasst wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben).

> [!NOTE]
> Wenn das Element erfasst wird, ist ein auf ihm eingestellter Alpha-Kanal-Wert nicht enthalten. Wenn das Eingrenzungsziel-Element halbtransparent ist, wird es in der Erfassung vollständig undurchsichtig sein und daher anders aussehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Objektinstanz aufgelöst wird, die dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden kann, um das in der Spur erfasste Video nur auf das bestimmte DOM-Element einzuschränken, mit dem das `RestrictionTarget` erstellt wurde.

`RestrictionTarget`-Objekte sind serialisierbar. Sie können mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an ein anderes Dokument übergeben werden.

Das Promise wird abgelehnt, wenn das Eingrenzungsziel-Element nicht für die Einschränkung geeignet ist.

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

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für kontextbezogene Code-Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
