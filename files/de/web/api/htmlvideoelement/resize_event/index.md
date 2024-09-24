---
title: "HTMLVideoElement: resize Ereignis"
short-title: resize
slug: Web/API/HTMLVideoElement/resize_event
l10n:
  sourceCommit: 3b94f0e52c6c0384f68f10436ae5739bf218d053
---

{{APIRef("HTML DOM")}}

Das **`resize`**-Ereignis der {{domxref("HTMLVideoElement")}}-Schnittstelle wird ausgelöst, wenn eine oder beide Eigenschaften, {{domxref("HTMLVideoElement.videoWidth", "videoWidth")}} und {{domxref("HTMLVideoElement.videoHeight", "videoHeight")}}, gerade aktualisiert wurden.

Dieses Ereignis kann nicht abgebrochen werden, kann jedoch hochbubbeln.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLVideoElement.videoHeight")}}
- {{domxref("HTMLVideoElement.videoWidth")}}
