---
title: "Document: pictureInPictureEnabled-Eigenschaft"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureEnabled`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt an, ob der Bild-in-Bild-Modus verfügbar ist oder nicht.

Der Bild-in-Bild-Modus ist standardmäßig verfügbar, es sei denn, es ist anders durch eine [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) spezifiziert.

Obwohl diese Eigenschaft schreibgeschützt ist, wird kein Fehler ausgelöst, wenn sie modifiziert wird (auch im Strict-Modus); der Setter hat keine Funktion und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn ein Video in den Bild-in-Bild-Modus wechseln und in einem schwebenden Fenster angezeigt werden kann, indem [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) aufgerufen wird. Wenn der Bild-in-Bild-Modus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird vor dem Versuch, den Bild-in-Bild-Modus für ein {{htmlElement("video")}}-Element zu aktivieren, der Wert von `pictureInPictureEnabled` überprüft, um den Aufruf zu vermeiden, wenn die Funktion nicht verfügbar ist.

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
