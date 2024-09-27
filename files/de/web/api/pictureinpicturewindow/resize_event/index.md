---
title: "PictureInPictureWindow: resize-Ereignis"
short-title: resize
slug: Web/API/PictureInPictureWindow/resize_event
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Picture-in-Picture API")}}

Das **`resize`**-Ereignis wird ausgelöst, wenn das schwebende Video-Fenster in der Größe verändert wurde.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Ereignisse aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften stehen auch Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), zur Verfügung._

- [`PictureInPictureEvent.pictureInPictureWindow`](/de/docs/Web/API/PictureInPictureEvent/pictureInPictureWindow)
  - : Gibt das [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) zurück, das in der Größe verändert wurde.

## Beispiele

### Fenstergrößenprotokollierer

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
  pictureInPictureWindow.onresize = resize;
  // or
  pictureInPictureWindow.addEventListener("resize", resize);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
