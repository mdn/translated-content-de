---
title: "PictureInPictureWindow: resize-Ereignis"
short-title: resize
slug: Web/API/PictureInPictureWindow/resize_event
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Picture-in-Picture API")}}

Das **`resize`**-Ereignis wird ausgelöst, wenn das schwebende Video-Fenster in der Größe verändert wurde.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein {{domxref("PictureInPictureEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : Gibt das {{domxref("PictureInPictureWindow")}} zurück, das in der Größe verändert wurde.

## Beispiele

### Fenstergrößen-Protokollierer

```html
<p>Ändern Sie die Größe des schwebenden Video-Fensters, um das <code>resize</code>-Ereignis auszulösen.</p>
<p>Fensterhöhe: <span id="height"></span></p>
<p>Fensterbreite: <span id="width"></span></p>
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
  pictureInPictureWindow.onresize = resize;
  // oder
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
