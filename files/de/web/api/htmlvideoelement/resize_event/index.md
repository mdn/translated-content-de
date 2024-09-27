---
title: "HTMLVideoElement: resize-Ereignis"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
l10n:
  sourceCommit: 3b94f0e52c6c0384f68f10436ae5739bf218d053
---

{{APIRef("HTML DOM")}}

Das **`resize`**-Ereignis der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle wird ausgelöst, wenn eine oder beide der Eigenschaften [`videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) gerade aktualisiert wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch blubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
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
