---
title: "HTMLVideoElement: enterpictureinpicture Ereignis"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Das `enterpictureinpicture` Ereignis wird ausgelöst, wenn das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) erfolgreich in den Bild-in-Bild-Modus wechselt.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("enterpictureinpicture", (event) => {});

onenterpictureinpicture = (event) => {};
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `enterpictureinpicture` Ereignis des HTMLVideoElement hinzu und senden eine Nachricht, wenn dieser Ereignis-Handler auf die Auslösung des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener("enterpictureinpicture", onEnterPip, false);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

Verwendung der `onenterpictureinpicture` Ereignis-Handler-Eigenschaft:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = () => {
  video.requestPictureInPicture();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
