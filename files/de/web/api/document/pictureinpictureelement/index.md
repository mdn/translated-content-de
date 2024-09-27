---
title: "Document: pictureInPictureElement-Eigenschaft"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 20e15ad6027f10c7bdd48f36776876cd1aa3a63c
---

{{APIRef("Picture-in-Picture API")}}

Die schreibgeschützte **`pictureInPictureElement`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit in diesem Dokument im Bild-in-Bild-Modus angezeigt wird, oder `null`, wenn der Bild-in-Bild-Modus derzeit nicht verwendet wird.

Obwohl diese Eigenschaft schreibgeschützt ist, wird beim Ändern kein Fehler ausgelöst (selbst im strikten Modus); der Setter ist eine No-Operation und wird ignoriert.

## Wert

Eine Referenz auf das [`Element`](/de/docs/Web/API/Element)-Objekt, das sich derzeit im Bild-in-Bild-Modus befindet.

Gibt `null` zurück, wenn das Dokument kein zugehöriges Element im Bild-in-Bild-Modus hat. Zum Beispiel gibt es kein Bild-in-Bild-Element oder das Element stammt aus einem iframe.

## Beispiele

Dieses Beispiel präsentiert eine Funktion, `exitPictureInPicture()`, die den von `pictureInPictureElement` zurückgegebenen Wert testet. Wenn sich das Dokument im Bild-in-Bild-Modus befindet (`pictureInPictureElement` ist nicht `null`), wird [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture) ausgeführt, um den Bild-in-Bild-Modus zu beenden.

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
