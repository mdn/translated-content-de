---
title: "HTMLVideoElement: requestPictureInPicture()-Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Picture-in-Picture API")}}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)**-Methode
**`requestPictureInPicture()`** stellt eine asynchrone Anfrage zum Anzeigen des Videos im Bild-in-Bild-Modus.

Es ist nicht garantiert, dass das Video im Bild-in-Bild-Modus angezeigt wird. Wenn die Berechtigung für diesen Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} aufgelöst und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um mitzuteilen, dass es sich nun im Bild-in-Bild befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)-Objekt aufgelöst wird, das verwendet werden kann, um zu überwachen, wann ein Benutzer dieses schwebende Fenster vergrößert oder verkleinert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Feature nicht unterstützt wird (zum Beispiel deaktiviert durch eine Benutzereinstellung oder durch eine Plattformbeschränkung).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Feature durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `readState` des Videoelements `HAVE_NOTHING` ist, oder wenn das Videoelement keine Videospur hat, oder wenn das `disablePictureInPicture`-Attribut des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "transient activation")}} hat.

## Sicherheit

[Transient user activation](/de/docs/Web/Security/Defenses/User_activation) wird benötigt. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

Dieses Beispiel fordert an, dass das Video in den Bild-in-Bild-Modus wechselt, und setzt einen Ereignislistener auf, um das Vergrößern und Verkleinern des schwebenden Fensters zu handhaben.

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
