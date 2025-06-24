---
title: "RestrictionTarget: fromElement() statische Methode"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`** statische Methode des [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Interfaces gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Instanz zurück, die verwendet werden kann, um eine aufgenommene Videospur auf ein bestimmtes DOM-Element (plus dessen Nachkommen) zu beschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Eine Referenz auf ein [`Element`](/de/docs/Web/API/Element), das als Beschränkungsziel verwendet werden soll. Damit ein Element als Beschränkungsziel verwendet werden kann, muss es:

    - Einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden.
    - Im 3D-Raum abgeflacht sein (zum Beispiel, es unterliegt keinen 3D [Transformierungen](/de/docs/Web/CSS/CSS_transforms)).
    - Gerendert sein (zum Beispiel, nicht außerhalb des Bildschirms oder über `display: none` ausgeblendet sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel, nicht über mehrere Zeilen verteilt sein).

    Wenn es die obigen Kriterien nicht erfüllt, wird es als **nicht für die Beschränkung geeignet** angesehen.

    Darüber hinaus wird das Element nicht erfasst, wenn die beschränkte Spur Klone hat (das heißt, erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder aus einem anderen Tab als dem aktuellen Nutzertab aufgenommen wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übermittelt).

> [!NOTE]
> Wenn das Element erfasst wird, ist ein darauf gesetzter Alpha-Kanal-Wert nicht enthalten. Wenn das Beschränkungsziel-Element halbtransparent ist, wird es in der Aufnahme vollständig opak und sieht daher anders aus.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Objektinstanz auflöst, das dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden kann, um das in der Spur erfasste Video nur auf das bestimmte DOM-Element zu beschränken, mit dem das `RestrictionTarget` erstellt wurde.

`RestrictionTarget` Objekte sind serialisierbar. Sie können mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an ein anderes Dokument übergeben werden.

Das Promise wird abgelehnt, wenn das Beschränkungsziel-Element nicht für die Beschränkung geeignet ist.

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

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
