---
title: "HTMLVideoElement: leavepictureinpicture Ereignis"
short-title: leavepictureinpicture
slug: Web/API/HTMLVideoElement/leavepictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Das `leavepictureinpicture`-Ereignis wird ausgelöst, wenn das {{DOMxRef("HTMLVideoElement")}} den Picture-in-Picture-Modus erfolgreich verlässt.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("leavepictureinpicture", (event) => {});

onleavepictureinpicture = (event) => {};
```

## Ereignistyp

Ein {{domxref("PictureInPictureEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignis-Listener für das `leavepictureinpicture`-Ereignis des HTMLVideoElement hinzu und senden dann eine Nachricht, wenn dieser Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

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

Verwendung der `onleavepictureinpicture` Ereignis-Handler-Eigenschaft:

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

- {{domxref("HTMLVideoElement")}}
- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
