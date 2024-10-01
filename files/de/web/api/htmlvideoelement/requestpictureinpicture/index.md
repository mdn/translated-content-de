---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Picture-in-Picture API")}}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)** Methode
**`requestPictureInPicture()`** stellt einen asynchronen Antrag,
das Video im Bild-im-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-im-Bild-Modus versetzt wird. Wenn die
Berechtigung erteilt wird, in diesen Modus zu wechseln, wird das zurückgegebene {{jsxref("Promise")}} erfüllt, und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um mitzuteilen, dass es sich jetzt im Bild-im-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)
Objekt auflöst, das verwendet werden kann, um zu reagieren, wenn ein Benutzer dieses schwebende Fenster verändert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion nicht unterstützt wird (zum Beispiel, wenn sie durch eine Benutzereinstellung oder durch eine Plattformbeschränkung deaktiviert ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Lesezustand des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keine Videospur hat, oder wenn das Attribut `disablePictureInPicture` des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "transiente Aktivierung")}} hat.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert, dass das Video in den Bild-im-Bild-Modus wechselt, und setzt einen Ereignis-Listener, um das Ändern der Größe des schwebenden Fensters zu handhaben.

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
