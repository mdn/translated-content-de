---
title: "Dokument: Eigenschaft pictureInPictureElement"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte Eigenschaft **`pictureInPictureElement`** der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit im Picture-in-Picture-Modus in diesem Dokument präsentiert wird, oder `null`, wenn der Picture-in-Picture-Modus derzeit nicht verwendet wird.

## Wert

Eine Referenz auf das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich derzeit im Picture-in-Picture-Modus befindet.

Gibt `null` zurück, wenn das Dokument kein zugehöriges Element im Picture-in-Picture-Modus hat. Zum Beispiel gibt es kein Picture-in-Picture-Element oder das Element stammt aus einem iframe.

Obwohl diese Eigenschaft schreibgeschützt ist, wird sie keinen Fehler erzeugen, wenn sie modifiziert wird (auch nicht im strikten Modus); der Setter ist eine No-Operation und wird ignoriert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt eine Funktion, `exitPictureInPicture()`, die den durch `pictureInPictureElement` zurückgegebenen Wert testet. Wenn das Dokument sich im Picture-in-Picture-Modus befindet (`pictureInPictureElement` ist nicht `null`), wird [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) ausgeführt, um den Picture-in-Picture-Modus zu beenden.

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

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- {{CSSxRef(":picture-in-picture")}}
