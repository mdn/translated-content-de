---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

Das **`PictureInPictureWindow`**-Interface repräsentiert ein Objekt, das in der Lage ist, programmatisch die **Breite** und **Höhe** sowie das **Resize-Ereignis** des schwebenden Videofensters abzurufen.

Ein Objekt mit diesem Interface wird über den Rückgabewert des Promise von {{domxref("HTMLVideoElement.requestPictureInPicture()")}} erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `PictureInPictureWindow`-Interface erbt keine Eigenschaften._

- {{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}
  - : Bestimmt die Breite des schwebenden Videofensters.
- {{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}
  - : Bestimmt die Höhe des schwebenden Videofensters.

## Instanz-Methoden

_Das `PictureInPictureWindow`-Interface erbt keine Methoden._

## Ereignisse

_Das `PictureInPictureWindow`-Interface erbt keine Ereignisse._

- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : Wird an ein `PictureInPictureWindow` gesendet, wenn das schwebende Videofenster in der Größe verändert wird.

## Beispiele

Angenommen, es gibt ein `<button>` und ein `<video>`, wird durch Klicken auf den Button das Video in den Bild-in-Bild-Modus versetzt; wir hängen dann ein Ereignis an, um die Dimensionen des schwebenden Videofensters in die Konsole zu drucken.

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(
    `The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`,
  );
  // wird drucken:
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
