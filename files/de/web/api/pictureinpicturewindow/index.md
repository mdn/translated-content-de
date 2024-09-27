---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Die **`PictureInPictureWindow`**-Schnittstelle stellt ein Objekt dar, das in der Lage ist, programmatisch die **`Breite`** und **`Höhe`** sowie das **`Resize Event`** des schwebenden Videofensters zu erhalten.

Ein Objekt mit dieser Schnittstelle wird unter Verwendung des [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)-Promise-Rückgabewerts erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `PictureInPictureWindow`-Schnittstelle erbt keine Eigenschaften._

- [`PictureInPictureWindow.width`](/de/docs/Web/API/PictureInPictureWindow/width) {{ReadOnlyInline}}
  - : Bestimmt die Breite des schwebenden Videofensters.
- [`PictureInPictureWindow.height`](/de/docs/Web/API/PictureInPictureWindow/height) {{ReadOnlyInline}}
  - : Bestimmt die Höhe des schwebenden Videofensters.

## Instanz-Methoden

_Die `PictureInPictureWindow`-Schnittstelle erbt keine Methoden._

## Ereignisse

_Die `PictureInPictureWindow`-Schnittstelle erbt keine Ereignisse._

- [`resize`](/de/docs/Web/API/PictureInPictureWindow/resize_event)
  - : Wird an ein `PictureInPictureWindow` gesendet, wenn das schwebende Videofenster in der Größe verändert wird.

## Beispiele

Gegeben sind ein `<button>` und ein `<video>`, beim Klicken des Buttons wird das Video im Picture-in-Picture-Modus angezeigt; wir fügen dann ein Ereignis hinzu, um die Dimensionen des schwebenden Videofensters in der Konsole auszugeben.

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
