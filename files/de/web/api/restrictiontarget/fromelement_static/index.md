---
title: "RestrictionTarget: Methode fromElement()"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`fromElement()`** statische Methode der [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Schnittstelle gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget) Instanz zurück, die verwendet werden kann, um eine aufgezeichnete Videospur auf ein bestimmtes DOM-Element (plus dessen Nachkommen) zu beschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Ein Verweis auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Beschränkungsziel verwenden möchten. Damit ein Element als Beschränkungsziel verwendet werden kann, muss es:

    - Einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) bilden.
    - Im 3D-Raum abgeflacht sein (zum Beispiel nicht von 3D-[Transformationen](/de/docs/Web/CSS/CSS_transforms) betroffen).
    - Gerendert sein (zum Beispiel nicht außerhalb des Bildschirms oder über `display: none` versteckt sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel nicht über mehrere Zeilen hinweg gebrochen sein).

    Wenn es die oben genannten Kriterien nicht erfüllt, wird es als **nicht für die Beschränkung geeignet** angesehen.

    Zudem wird das Element nicht erfasst, wenn die eingeschränkte Spur Klone hat (das heißt, erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder von einem anderen Tab als dem aktuellen Tab des Benutzers aufgenommen wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben).

> [!NOTE]
> Wenn das Element erfasst wird, ist ein darauf gesetzter Alpha-Kanal-Wert nicht enthalten. Ist das Beschränkungsziel-Element halbtransparent, wird es in der Aufnahme vollständig undurchsichtig und sieht daher anders aus.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Objekt auflöst, das dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden kann, um das in der Spur aufgenommene Video nur auf das bestimmte DOM-Element zu beschränken, mit dem das `RestrictionTarget` erstellt wurde.

`RestrictionTarget`-Objekte sind serialisierbar. Sie können an ein anderes Dokument mit Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben werden.

Das Versprechen wird abgelehnt, wenn das Beschränkungsziel-Element nicht für die Beschränkung geeignet ist.

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

Siehe [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für kontextbezogenen Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture- und Region Capture-APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
