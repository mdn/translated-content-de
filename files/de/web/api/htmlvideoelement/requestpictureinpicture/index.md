---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Picture-in-Picture API")}}

Die Methode **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)**
**`requestPictureInPicture()`** stellt eine asynchrone Anfrage, um das Video im Bild-im-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-im-Bild-Modus versetzt wird. Wenn die Erlaubnis
für diesen Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}}
aufgelöst, und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um zu signalisieren, dass es sich nun im Bild-im-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}} das zu einem [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow) Objekt aufgelöst wird, das verwendet werden kann, um zu erkennen, wann ein Benutzer dieses schwebende Fenster vergrößert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion nicht unterstützt wird (beispielsweise deaktiviert durch eine Benutzereinstellung oder durch eine Plattformbeschränkung).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `readState` des Video-Elements `HAVE_NOTHING` ist, oder wenn das Video-Element keine Video-Spur hat, oder wenn das `disablePictureInPicture` Attribut des Video-Elements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine [transiente Aktivierung](/de/docs/Glossary/transient_activation) hat.

## Sicherheit

Für die Nutzung ist eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert, dass das Video in den Bild-im-Bild-Modus wechselt, und setzt einen Ereignislistener, um die Größenänderung des schwebenden Fensters zu behandeln.

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener(
      "resize",
      () => onPipWindowResize(),
      false,
    );
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}} Element
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
- {{CSSxRef(":picture-in-picture")}}
