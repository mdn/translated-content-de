---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Picture-in-Picture API")}}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)**-Methode
**`requestPictureInPicture()`** stellt eine asynchrone Anfrage, um das Video im Bild-in-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-in-Bild-Modus gesetzt wird. Wenn die Berechtigung
für diesen Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} aufgelöst und das
Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um anzuzeigen, dass es sich jetzt im Bild-in-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)-Objekt aufgelöst wird, das verwendet werden kann, um zu hören, wann ein Benutzer dieses schwebende Fenster vergrößert oder verkleinert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Funktion nicht unterstützt wird (zum Beispiel, wenn sie durch eine Benutzereinstellung oder durch eine Plattformbeschränkung deaktiviert ist).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `readState` des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keine Videospur hat, oder wenn das `disablePictureInPicture`-Attribut des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "transiente Aktivierung")}} hat.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert an, dass das Video in den Bild-in-Bild-Modus wechselt, und setzt einen Ereignislistener, um die Größenänderung des schwebenden Fensters zu handhaben.

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

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)
- {{CSSxRef(":picture-in-picture")}}
