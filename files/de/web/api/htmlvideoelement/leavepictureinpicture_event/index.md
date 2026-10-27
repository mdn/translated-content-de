---
title: "HTMLVideoElement: leavepictureinpicture-Ereignis"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("Picture-in-Picture API")}}

Das `leavepictureinpicture`-Ereignis wird ausgelöst, wenn das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) den Bild-in-Bild-Modus erfolgreich verlässt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("leavepictureinpicture", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onleavepictureinpicture = (event) => { }
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Beispiele

In diesen Beispielen wird ein Event-Listener für das `leavepictureinpicture`-Ereignis des HTMLVideoElement hinzugefügt. Anschließend wird eine Nachricht ausgegeben, wenn der Event-Handler auf das ausgelöste Ereignis reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onExitPip() {
  console.log("Picture-in-Picture mode deactivated!");
}

video.addEventListener("leavepictureinpicture", onExitPip);

button.onclick = () => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
};
```

Mit der Event-Handler-Eigenschaft `onleavepictureinpicture` (beachten Sie jedoch, dass dadurch gegebenenfalls andere Event-Listener ersetzt werden, die über `onleavepictureinpicture` hinzugefügt wurden):

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
