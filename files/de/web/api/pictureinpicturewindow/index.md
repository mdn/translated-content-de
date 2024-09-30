---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Das **`PictureInPictureWindow`**-Interface repräsentiert ein Objekt, das in der Lage ist, programmgesteuert die **`width`** und **`height`** sowie das **`resize event`** des schwebenden Videofensters zu erhalten.

Ein Objekt mit diesem Interface wird durch den Rückgabewert des Versprechens von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `PictureInPictureWindow`-Interface erbt keine Eigenschaften._

- [`PictureInPictureWindow.width`](/de/docs/Web/API/PictureInPictureWindow/width) {{ReadOnlyInline}}
  - : Bestimmt die Breite des schwebenden Videofensters.
- [`PictureInPictureWindow.height`](/de/docs/Web/API/PictureInPictureWindow/height) {{ReadOnlyInline}}
  - : Bestimmt die Höhe des schwebenden Videofensters.

## Instanz-Methoden

_Das `PictureInPictureWindow`-Interface erbt keine Methoden._

## Ereignisse

_Das `PictureInPictureWindow`-Interface erbt keine Ereignisse._

- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein `PictureInPictureWindow` gesendet, wenn das schwebende Videofenster in der Größe verändert wird.

## Beispiele

Gegeben sind ein `<button>` und ein `<video>`. Wenn der Button geklickt wird, wechselt das Video in den Bild-in-Bild-Modus; wir fügen dann ein Ereignis an, um die Abmessungen des schwebenden Videofensters in die Konsole auszugeben.

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(
    `The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`,
  );
  // will print:
  // The floating window dimensions are: 640x360px
}

button.onclick = () => {
  video.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
