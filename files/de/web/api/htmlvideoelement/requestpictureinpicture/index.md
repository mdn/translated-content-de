---
title: "HTMLVideoElement: requestPictureInPicture() Methode"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

Die **`requestPictureInPicture()`**-Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle sendet eine asynchrone Anfrage, um das Video im Bild-in-Bild-Modus anzuzeigen.

Es ist nicht garantiert, dass das Video in den Bild-in-Bild-Modus wechselt. Wenn die Erlaubnis für diesen Modus erteilt wird, wird das zurückgegebene {{jsxref("Promise")}} aufgelöst und das Video erhält ein [`enterpictureinpicture`](/de/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)-Ereignis, um mitzuteilen, dass es sich nun im Bild-in-Bild-Modus befindet.

## Syntax

```js-nolint
requestPictureInPicture()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`PictureInPictureWindow`](/de/docs/Web/API/PictureInPictureWindow)-Objekt aufgelöst wird, das verwendet werden kann, um zu erkennen, wann ein Benutzer dieses schwebende Fenster größenmäßig verändert.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion nicht unterstützt wird (z. B. deaktiviert durch eine Benutzereinstellung oder durch eine Plattformbeschränkung).
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `readState` des Videoelements `HAVE_NOTHING` ist, das Videoelement keine Videospur hat oder das `disablePictureInPicture`-Attribut des Videoelements `true` ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `document.pictureInPictureElement` `null` ist und das Dokument keine {{Glossary("transient_activation", "transiente Aktivierung")}} hat.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

In diesem Beispiel wird angefragt, dass das Video in den Bild-in-Bild-Modus wechselt, und ein Ereignis-Listener wird gesetzt, um die Größenänderung des schwebenden Fensters zu handhaben.

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
