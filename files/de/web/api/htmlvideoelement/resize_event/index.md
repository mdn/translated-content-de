---
title: "HTMLVideoElement: resize-Ereignis"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}

Das **`resize`**-Ereignis der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wird ausgelöst, wenn eine oder beide der Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) aktualisiert wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann aber durch die DOM-Hierarchie aufsteigen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resize", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```html
<video id="media" src="https://example.com/video.mp4"></video>
```

```js
const el = document.getElementById("media");
el.addEventListener("resize", () => {
  console.log("The size of the video element has changed!");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight)
- [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth)
