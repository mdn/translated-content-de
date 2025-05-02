---
title: "HTMLVideoElement: leavepictureinpicture Ereignis"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Picture-in-Picture API")}}

Das `leavepictureinpicture` Ereignis wird ausgelöst, wenn das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) den Bild-in-Bild-Modus erfolgreich verlässt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("leavepictureinpicture", (event) => { })

onleavepictureinpicture = (event) => { }
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternobjekt [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `leavepictureinpicture` Ereignis des HTMLVideoElement hinzu und posten eine Nachricht, wenn dieser Ereignishandler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip, false);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

Verwendung der `onleavepictureinpicture` Ereignishandler-Eigenschaft:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.onleavepictureinpicture = onExitPip;

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
