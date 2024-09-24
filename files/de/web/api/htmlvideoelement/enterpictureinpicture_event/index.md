---
title: "HTMLVideoElement: enterpictureinpicture Ereignis"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Das `enterpictureinpicture` Ereignis wird ausgelöst, wenn das {{DOMxRef("HTMLVideoElement")}} erfolgreich in den Bild-in-Bild-Modus wechselt.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("enterpictureinpicture", (event) => {});

onenterpictureinpicture = (event) => {};
```

## Ereignistyp

Ein {{domxref("PictureInPictureEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten {{domxref("Event")}}.

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `enterpictureinpicture` Ereignis des HTMLVideoElements hinzu und senden eine Nachricht, wenn dieser Ereignishandler auf das Auslösen des Ereignisses reagiert hat.

Verwendung von `addEventListener()`:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode aktiviert!");
}

video.addEventListener("enterpictureinpicture", onEnterPip, false);

button.onclick = () => {
  video.requestPictureInPicture();
};
```

Verwendung der `onenterpictureinpicture` Ereignishandlereigenschaft:

```js
const video = document.querySelector("#video");
const button = document.querySelector("#button");

function onEnterPip() {
  console.log("Picture-in-Picture mode aktiviert!");
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

- {{domxref("HTMLVideoElement")}}
- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
