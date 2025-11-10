---
title: "Dokument: pictureInPictureEnabled-Eigenschaft"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte Eigenschaft **`pictureInPictureEnabled`** der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt an, ob der Bild-in-Bild-Modus verfügbar ist oder nicht.

Der Bild-in-Bild-Modus ist standardmäßig verfügbar, es sei denn, es ist anders festgelegt durch eine [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture).

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie beim Ändern keinen Fehler werfen (selbst im strict mode); der Setter ist eine No-Operation und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn ein Video in den Bild-in-Bild-Modus versetzt werden und in einem schwebenden Fenster angezeigt werden kann, indem [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) aufgerufen wird. Wenn der Bild-in-Bild-Modus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird, bevor versucht wird, den Bild-in-Bild-Modus für ein {{htmlElement("video")}}-Element aufzurufen, der Wert von `pictureInPictureEnabled` geprüft, um den Aufruf zu vermeiden, falls die Funktion nicht verfügbar ist.

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log("Your browser cannot use picture-in-picture right now");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
- {{CSSxRef(":picture-in-picture")}}
