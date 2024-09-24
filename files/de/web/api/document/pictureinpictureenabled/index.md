---
title: "Document: pictureInPictureEnabled-Eigenschaft"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureEnabled`**-Eigenschaft des {{domxref("Document")}}-Interfaces zeigt an, ob der Bild-in-Bild-Modus verfügbar ist oder nicht.

Der Bild-in-Bild-Modus ist standardmäßig verfügbar, es sei denn, es wurde anderweitig durch eine [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) festgelegt.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keine Ausnahme auslösen, wenn sie modifiziert wird (selbst im Strict-Modus); der Setter ist eine Nicht-Operation und wird ignoriert.

## Wert

Ein boolescher Wert, der `true` ist, wenn ein Video in den Bild-in-Bild-Modus wechseln und in einem schwebenden Fenster angezeigt werden kann, indem {{domxref("HTMLVideoElement.requestPictureInPicture()")}} aufgerufen wird. Wenn der Bild-in-Bild-Modus nicht verfügbar ist, ist dieser Wert `false`.

## Beispiele

In diesem Beispiel wird vor dem Versuch, den Bild-in-Bild-Modus für ein {{htmlElement("video")}}-Element zu aktivieren, der Wert von `pictureInPictureEnabled` überprüft, um den Aufruf zu vermeiden, wenn die Funktion nicht verfügbar ist.

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log("Ihr Browser kann momentan kein Bild-in-Bild verwenden");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
