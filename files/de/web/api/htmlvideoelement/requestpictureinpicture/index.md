---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Picture-in-Picture API")}}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)**-Methode
**`requestPictureInPicture()`** stellt eine asynchrone Anfrage, um das Video im Bild-in-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-in-Bild-Modus versetzt wird. Falls die Erlaubnis, diesen Modus zu betreten, erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} aufgelöst, und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um darüber zu informieren, dass es sich nun im Bild-in-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)-Objekt aufgelöst wird, das verwendet werden kann, um darauf zu hören, wenn ein Benutzer dieses schwebende Fenster in der Größe ändern wird.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion nicht unterstützt wird (zum Beispiel deaktiviert durch eine Benutzereinstellung oder durch eine Plattformbeschränkung).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `readState` des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keine Videospur hat, oder wenn das `disablePictureInPicture`-Attribut des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "flüchtige Aktivierung")}} hat.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert, dass das Video in den Bild-in-Bild-Modus wechselt, und legt einen Ereignislistener fest, um das Ändern der Größe des schwebenden Fensters zu behandeln.

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener("resize", () =>
      onPipWindowResize(),
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
