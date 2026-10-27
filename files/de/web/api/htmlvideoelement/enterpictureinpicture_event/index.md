---
title: "HTMLVideoElement: enterpictureinpicture-Ereignis"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("Picture-in-Picture API")}}

Das `enterpictureinpicture`-Ereignis wird ausgelöst, wenn das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) erfolgreich in den Picture-in-Picture-Modus wechselt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("enterpictureinpicture", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onenterpictureinpicture = (event) => { }
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Beispiele

In diesen Beispielen wird ein Event-Listener für das `enterpictureinpicture`-Ereignis des HTMLVideoElement hinzugefügt. Anschließend wird eine Meldung ausgegeben, wenn der Event-Handler auf das Auslösen des Ereignisses reagiert hat.

Mit `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.addEventListener("enterpictureinpicture", onEnterPip);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

Mit der Event-Handler-Eigenschaft `onenterpictureinpicture` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onenterpictureinpicture` hinzugefügte Event-Listener ersetzt werden):

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
- [Picture-in-Picture-API](/de/docs/Web/API/Picture-in-Picture_API)
