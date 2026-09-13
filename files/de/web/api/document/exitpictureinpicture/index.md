---
title: "Dokument: exitPictureInPicture() Methode"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

Die **`exitPictureInPicture()`** Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle fordert an, dass ein Video in diesem Dokument, das derzeit schwebt, aus dem Bild-in-Bild-Modus herausgenommen wird.

Dies versucht die Auswirkungen eines vorherigen Aufrufs von [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture) rückgängig zu machen und das Video wieder in den Website-Fluss zu integrieren.

## Syntax

```js-nolint
exitPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der {{Glossary("user_agent", "User-Agent")}} den Bild-in-Bild-Modus verlassen hat. Wenn beim Versuch, den Bild-in-Bild-Modus zu verlassen, ein Fehler auftritt, wird der `catch()`-Handler für das Promise aufgerufen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `document.pictureInPictureElement` `null` ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel bewirkt, dass das aktuelle Dokument den Bild-in-Bild-Modus verlässt, sobald die Maustaste darin geklickt wird.

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

Beachten Sie, dass Sie, wenn Sie verfolgen möchten, welches Video auf Ihrer Seite derzeit im Bild-in-Bild-Modus abgespielt wird, die Ereignisse `enterpictureinpicture` und `leavepictureinpicture` auf dem (den) [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Element(en) überwachen sollten. Alternativ können Sie prüfen, ob [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) auf das aktuelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Element verweist.

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
