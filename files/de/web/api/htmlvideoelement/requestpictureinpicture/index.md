---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Picture-in-Picture API")}}

Die **{{domxref("HTMLVideoElement")}}** Methode
**`requestPictureInPicture()`** sendet eine asynchrone Anfrage,
um das Video im Bild-in-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-in-Bild-Modus versetzt wird. Wenn die Erlaubnis
zum Betreten dieses Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} aufgelöst und das
Video erhält ein {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}-Ereignis, um zu erfahren, dass es sich jetzt im Bild-in-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("PictureInPictureWindow")}}
Objekt aufgelöst wird, das verwendet werden kann, um zu hören, wann ein Benutzer dieses schwebende Fenster vergrößert.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Funktion nicht unterstützt wird (zum Beispiel deaktiviert durch eine Benutzereinstellung oder aufgrund einer Plattformbeschränkung).
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `readState` des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keinen Videotrack hat, oder wenn das `disablePictureInPicture` Attribut des Videoelements `true` ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient activation")}} hat.

## Sicherheit

[Vorübergehende Nutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Nutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert, dass das Video in den Bild-in-Bild-Modus wechselt, und setzt einen Ereignislistener, um die Größenänderung des schwebenden Fensters zu bearbeiten.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}} Element
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
