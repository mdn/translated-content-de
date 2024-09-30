---
title: "Window: gamepadconnected Ereignis"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das `gamepadconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder zum ersten Mal eine Taste/Achse des Gamepads verwendet wird.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) des Dokuments nicht erlaubt ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Beispiele

Um informiert zu werden, wenn ein Gamepad angeschlossen wird, können Sie einen Handler zum Fenster hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie folgt:

```js
window.addEventListener("gamepadconnected", (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
});
```

Alternativ können Sie die `window.ongamepadconnected` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `gamepadconnected`-Ereignis zu etablieren:

```js
window.ongamepadconnected = (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [gamepaddisconnected](/de/docs/Web/API/Window/gamepaddisconnected_event)
- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
