---
title: "Dokument: exitPictureInPicture()-Methode"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{APIRef("Picture-in-Picture API")}}

Die **`exitPictureInPicture()`**-Methode des {{domxref("Document")}}-Interfaces fordert an, dass ein Video in diesem Dokument, welches derzeit schwebt, aus dem Bild-im-Bild-Modus genommen wird und der vorherige Zustand des Bildschirms wiederhergestellt wird. Dies kehrt normalerweise die Effekte eines vorherigen Aufrufs von {{domxref("HTMLVideoElement.requestPictureInPicture()")}} um.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der {{Glossary("user agent")}} das Verlassen des Bild-im-Bild-Modus abgeschlossen hat. Wenn ein Fehler beim Versuch, den Vollbildmodus zu verlassen, auftritt, wird der `catch()`-Handler des Promise aufgerufen.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument den Bild-im-Bild-Modus verlässt, wann immer die Maustaste darin geklickt wird.

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Dokument hat den Bild-im-Bild-Modus verlassen"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

Beachten Sie, dass Sie, wenn Sie verfolgen möchten, welches Video auf Ihrer Seite derzeit im Bild-im-Bild-Modus abgespielt wird, die `enterpictureinpicture`- und `exitpictureinpicture`-Ereignisse auf dem/den betreffenden {{DOMxRef("HTMLVideoElement")}}-Element(en) überwachen sollten. Alternativ können Sie überprüfen, ob {{DOMxRef("Document.pictureInPictureElement")}} sich auf das aktuelle {{DOMxRef("HTMLVideoElement")}}-Element bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- [Bild-im-Bild-Ereignisse](/de/docs/Web/API/Picture-in-Picture_API#events)
