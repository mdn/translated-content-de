---
title: "Document: exitPictureInPicture() Methode"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{APIRef("Picture-in-Picture API")}}

Die **`exitPictureInPicture()`** Methode des [`Document`](/de/docs/Web/API/Document) Interfaces
fordert, dass ein Video in diesem Dokument, das derzeit schwebt, aus dem Bild-in-Bild-Modus genommen wird, wodurch der vorherige Zustand des Bildschirms wiederhergestellt wird. Dies kehrt normalerweise die
Auswirkungen eines vorherigen Aufrufs von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) um.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der {{Glossary("user_agent", "User-Agent")}} den Bild-in-Bild-Modus verlassen hat. Wenn ein Fehler beim Versuch auftritt, den Vollbildmodus zu beenden, wird der `catch()`-Handler des Promises aufgerufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument den Bild-in-Bild-Modus verlässt, wann immer die Maustaste innerhalb davon geklickt wird.

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

Beachten Sie, dass Sie, wenn Sie verfolgen möchten, welches Video auf Ihrer Seite derzeit im Bild-in-Bild-Modus abgespielt wird, die `enterpictureinpicture`- und `exitpictureinpicture`-Ereignisse auf dem/den betreffenden [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Element(en) anhören sollten. Alternativ können Sie überprüfen, ob [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) auf das aktuelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Element verweist.

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
- [Bild-in-Bild-Ereignisse](/de/docs/Web/API/Picture-in-Picture_API#events)
