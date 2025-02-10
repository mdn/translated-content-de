---
title: "RestrictionTarget: fromElement() statische Methode"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`** statische Methode der [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Schnittstelle gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurück, die verwendet werden kann, um eine erfasste Video-Track-Ausgabe auf ein bestimmtes DOM-Element (und dessen Nachkommen) einzuschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Einschränkungsziel verwenden möchten. Damit ein Element für eine Einschränkung verwendet werden kann, muss es:

    - Einen [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) bilden.
    - Im 3D-Raum flach sein (z. B. nicht von einem 3D-[Transform](/de/docs/Web/CSS/CSS_transforms) betroffen sein).
    - Gerendert werden (zum Beispiel nicht außerhalb des Sichtfelds liegen oder über `display: none` verborgen sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel nicht über mehrere Zeilen verteilt sein).

    Wenn es diese Kriterien nicht erfüllt, wird es als **nicht für Einschränkungen geeignet** betrachtet.

    Außerdem wird das Element nicht erfasst, wenn der eingeschränkte Track Klone besitzt (also durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone) erstellt wurde) oder aus einem anderen Tab als dem aktuellen Tab des Benutzers erfasst wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

> [!NOTE]
> Wenn das Element erfasst wird, wird kein Alpha-Kanal-Wert einbezogen. Wenn das Einschränkungsziel-Element halbtransparent ist, erscheint es in der Aufnahme vollständig undurchsichtig und sieht daher anders aus.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einer [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Objektinstanz aufgelöst wird. Dieses Objekt kann dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden, um das im Track erfasste Video auf genau das DOM-Element einzuschränken, für das das `RestrictionTarget` erstellt wurde.

`RestrictionTarget`-Objekte sind serialisierbar. Sie können mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an ein anderes Dokument übergeben werden.

Das Promise wird abgelehnt, wenn das Einschränkungsziel-Element nicht für Einschränkungen geeignet ist.

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

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für ein Beispiel im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
