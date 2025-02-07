---
title: "RestrictionTarget: fromElement() statische Methode"
short-title: fromElement()
slug: Web/API/RestrictionTarget/fromElement_static
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische Methode **`fromElement()`** der [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Schnittstelle gibt eine [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Instanz zurück, die verwendet werden kann, um eine aufgenommene Video-Spur auf ein bestimmtes DOM-Element (und seine Nachkommen) zu beschränken.

## Syntax

```js-nolint
RestrictionTarget.fromElement(element)
```

### Parameter

- `element`

  - : Eine Referenz auf ein [`Element`](/de/docs/Web/API/Element), das Sie als Einschränkungsziel verwenden möchten. Damit ein Element als Einschränkungsziel verwendet werden kann, muss es:

    - Einen [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) bilden.
    - In 3D-Raum abgeflacht sein (zum Beispiel darf es keinen 3D-[Transformierungen](/de/docs/Web/CSS/CSS_transforms) unterliegen).
    - Gerendert sein (zum Beispiel darf es nicht außerhalb des Bildschirms oder über `display: none` verborgen sein).
    - Nur ein Box-Fragment enthalten (zum Beispiel darf es nicht über mehrere Zeilen gebrochen sein).

    Wenn diese Kriterien nicht erfüllt sind, wird das Element als **nicht für die Einschränkung geeignet** betrachtet.

    Zusätzlich wird das Element nicht erfasst, wenn die eingeschränkte Spur Klone hat (das heißt, erstellt durch [`BrowserCaptureMediaStreamTrack.clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone)) oder aus einem anderen Tab als dem aktuellen Tab des Benutzers aufgenommen wird (zum Beispiel über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben).

> [!NOTE]
> Wenn das Element erfasst wird, wird kein Alpha-Kanal-Wert berücksichtigt. Wenn das Einschränkungsziel halbtransparent ist, erscheint es in der Aufnahme vollständig undurchsichtig und sieht daher anders aus.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einer [`RestrictionTarget`](/de/docs/Web/API/RestrictionTarget)-Objektinstanz auflöst, die dann an [`BrowserCaptureMediaStreamTrack.restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) übergeben werden kann, um das Video in der Spur nur auf das spezifische DOM-Element zu beschränken, mit dem das `RestrictionTarget` erstellt wurde.

`RestrictionTarget`-Objekte sind serialisierbar. Sie können an ein anderes Dokument über Mechanismen wie [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) übergeben werden.

Das Promise wird abgelehnt, wenn das Einschränkungsziel-Element nicht für die Einschränkung geeignet ist.

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

Siehe [Verwendung der APIs für Element Capture und Region Capture](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Codebeispiele im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der APIs für Element Capture und Region Capture](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
