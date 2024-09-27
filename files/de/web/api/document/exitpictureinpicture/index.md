---
title: "Document: exitPictureInPicture()-Methode"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{APIRef("Picture-in-Picture API")}}

Die **`exitPictureInPicture()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces fordert an, dass ein Video, das in diesem Dokument enthalten ist und derzeit schwebt, aus dem Bild-im-Bild-Modus entfernt wird, um den vorherigen Zustand des Bildschirms wiederherzustellen. Dies kehrt normalerweise die Effekte eines vorherigen Aufrufs von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) um.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der [Benutzeragent](/de/docs/Glossary/user_agent) den Bild-im-Bild-Modus verlassen hat. Wenn ein Fehler beim Versuch auftritt, den Vollbildmodus zu verlassen, wird der `catch()`-Handler für das Promise aufgerufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument den Bild-im-Bild-Modus verlässt, wann immer die Maustaste innerhalb des Dokuments geklickt wird.

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Document Exited from Picture-in-Picture mode"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

Beachten Sie, dass Sie, wenn Sie nachverfolgen möchten, welches Video auf Ihrer Seite derzeit im Bild-im-Bild-Modus abgespielt wird, die `enterpictureinpicture`- und `exitpictureinpicture`-Ereignisse am entsprechenden [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) überwachen sollten. Alternativ können Sie überprüfen, ob [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) auf das aktuelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
- {{CSSxRef(":picture-in-picture")}}
- [Picture-in-Picture Ereignisse](/de/docs/Web/API/Picture-in-Picture_API#events)
