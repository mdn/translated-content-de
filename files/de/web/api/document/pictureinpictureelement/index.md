---
title: "Dokument: Eigenschaft pictureInPictureElement"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 20e15ad6027f10c7bdd48f36776876cd1aa3a63c
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureElement`**-Eigenschaft des {{domxref("Document")}}-Interfaces liefert das {{ domxref("Element") }}, das derzeit in diesem Dokument im Bild-im-Bild-Modus präsentiert wird, oder `null`, wenn der Bild-im-Bild-Modus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler auslösen, wenn sie modifiziert wird (auch nicht im Strict-Modus); der Setter ist ein No-Operation und wird ignoriert.

## Wert

Ein Verweis auf das {{domxref("Element")}}-Objekt, das sich aktuell im Bild-im-Bild-Modus befindet.

Gibt `null` zurück, wenn das Dokument kein zugehöriges Element im Bild-im-Bild-Modus hat. Zum Beispiel, wenn es kein Bild-im-Bild-Element gibt oder das Element aus einem iframe stammt.

## Beispiele

Dieses Beispiel zeigt eine Funktion `exitPictureInPicture()`, die den Wert testet, der von `pictureInPictureElement` zurückgegeben wird. Wenn sich das Dokument im Bild-im-Bild-Modus befindet (`pictureInPictureElement` ist nicht `null`), wird [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) ausgeführt, um den Bild-im-Bild-Modus zu verlassen.

```js
function exitPictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
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
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{CSSxRef(":picture-in-picture")}}
