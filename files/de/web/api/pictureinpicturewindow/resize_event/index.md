---
title: "PictureInPictureWindow: resize-Ereignis"
short-title: resize
slug: Web/API/PictureInPictureWindow/resize_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Picture-in-Picture API")}}

Das **`resize`**-Ereignis wird ausgelöst, wenn die Größe des schwebenden Videofensters geändert wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resize", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onresize = (event) => { }
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Beispiele

### Fenstergröße protokollieren

```html
<p>Resize the floating video window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
<video id="video" src="" muted autoplay></video>
```

```js
const video = document.querySelector("#video");
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resize(evt) {
  heightOutput.textContent = evt.target.height;
  widthOutput.textContent = evt.target.width;
}

video.requestPictureInPicture().then((pictureInPictureWindow) => {
  // Use onresize (but note that this replaces other event listeners
  // added using onresize, if any)
  pictureInPictureWindow.onresize = resize;
  // or
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
