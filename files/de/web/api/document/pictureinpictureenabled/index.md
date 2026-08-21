---
title: "Dokumentation: pictureInPictureEnabled-Eigenschaft"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureEnabled`**-Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt an, ob der Bild-in-Bild-Modus verfügbar ist.

Der Bild-in-Bild-Modus ist standardmäßig verfügbar, es sei denn, er wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture) der Seite verweigert.

## Wert

Ein boolescher Wert, der `true` ist, wenn ein Video in den Bild-in-Bild-Modus wechseln und in einem schwebenden Fenster angezeigt werden kann, indem [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) aufgerufen wird. Wenn der Bild-in-Bild-Modus nicht verfügbar ist, ist dieser Wert `false`.

Obwohl diese Eigenschaft schreibgeschützt ist, wird kein Fehler ausgelöst, wenn sie modifiziert wird (auch nicht im Strict Mode); der Setter hat keine Wirkung und wird ignoriert.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird, bevor der Versuch unternommen wird, den Bild-in-Bild-Modus für ein {{htmlElement("video")}}-Element zu aktivieren, der Wert von `pictureInPictureEnabled` überprüft, um den Aufruf zu vermeiden, wenn die Funktion nicht verfügbar ist.

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
