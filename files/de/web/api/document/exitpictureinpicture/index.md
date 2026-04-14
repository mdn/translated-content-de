---
title: "Dokument: exitPictureInPicture() Methode"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 58d68cd4c2a6e77a90fb990924a04e5bc93cc3bd
---

{{APIRef("Picture-in-Picture API")}}

Die **`exitPictureInPicture()`** Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces
fordert an, dass ein Video, das sich derzeit in diesem Dokument befindet und im Floating-Modus ist, aus dem Picture-in-Picture-Modus herausgenommen wird und der vorherige Bildschirmzustand wiederhergestellt wird. Dies kehrt normalerweise die Effekte eines vorherigen Aufrufs von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) um.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der {{Glossary("user_agent", "user agent")}} den Picture-in-Picture-Modus verlassen hat. Wenn beim Versuch, den Vollbildmodus zu verlassen, ein Fehler auftritt, wird der `catch()`-Handler für das Promise aufgerufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist.

## Beispiele

Dieses Beispiel sorgt dafür, dass das aktuelle Dokument den Picture-in-Picture-Modus verlässt, sobald die Maustaste innerhalb des Dokuments gedrückt wird.

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

Beachten Sie, dass, wenn Sie verfolgen möchten, welches Video auf Ihrer Seite derzeit im Picture-in-Picture-Modus abgespielt wird, Sie auf die `enterpictureinpicture`- und `leavepictureinpicture`-Ereignisse auf dem/den betreffenden [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) hören sollten. Alternativ können Sie überprüfen, ob [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) auf das aktuelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verweist.

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
