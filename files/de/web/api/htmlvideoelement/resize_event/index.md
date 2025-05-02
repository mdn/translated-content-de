---
title: "HTMLVideoElement: resize Ereignis"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("HTML DOM")}}

Das **`resize`**-Ereignis der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle wird ausgelöst, wenn eine oder beide Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) gerade aktualisiert wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch eine Blasenbildung aufweisen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

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
