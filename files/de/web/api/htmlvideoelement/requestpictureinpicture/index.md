---
title: "HTMLVideoElement: requestPictureInPicture()-Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("Picture-in-Picture API")}}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)**-Methode
**`requestPictureInPicture()`** stellt eine asynchrone Anfrage, um das Video im Bild-in-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-in-Bild-Modus geschaltet wird. Wenn die Erlaubnis für diesen Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} erfüllt und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um es darüber zu informieren, dass es jetzt im Bild-in-Bild-Modus ist.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)-Objekt aufgelöst wird, welches verwendet werden kann, um zu hören, wenn ein Benutzer dieses schwebende Fenster in der Größe verändert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Funktion nicht unterstützt wird (zum Beispiel durch eine Benutzereinstellung oder durch eine Plattformbeschränkung deaktiviert).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das Lesezustand des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keine Videospur hat, oder wenn das `disablePictureInPicture`-Attribut des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "transiente Aktivierung")}} hat.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Dieses Beispiel fordert, dass das Video den Bild-in-Bild-Modus betritt, und setzt einen Ereignis-Listener, um das Ändern der Größe des schwebenden Fensters zu behandeln.

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
