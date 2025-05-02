---
title: "HTMLVideoElement: enterpictureinpicture-Ereignis"
short-title: enterpictureinpicture
slug: Web/API/HTMLVideoElement/enterpictureinpicture_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Picture-in-Picture API")}}

Das `enterpictureinpicture`-Ereignis wird ausgelöst, wenn das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) erfolgreich in den Bild-in-Bild-Modus wechselt.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlereigenschaft fest.

```js-nolint
addEventListener("enterpictureinpicture", (event) => { })

onenterpictureinpicture = (event) => { }
```

## Ereignistyp

Ein [`PictureInPictureEvent`](/de/docs/Web/API/PictureInPictureEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PictureInPictureEvent")}}

## Ereigniseigenschaften

Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`Event`](/de/docs/Web/API/Event).

## Beispiele

Diese Beispiele fügen einen Ereignislistener für das `enterpictureinpicture`-Ereignis von HTMLVideoElement hinzu und senden dann eine Nachricht, wenn der Ereignis-Handler auf das Auslösen des Ereignisses reagiert hat.

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

Verwendung der `onenterpictureinpicture` Ereignisbehandlereigenschaft:

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
