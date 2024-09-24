---
title: "Fenster: gamepadconnected Ereignis"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das `gamepadconnected` Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads benutzt wird.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) des Dokuments nicht erlaubt ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Beispiele

Um informiert zu werden, wenn ein Gamepad angeschlossen wird, können Sie einen Handler im Fenster mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} hinzufügen, wie folgt:

```js
window.addEventListener("gamepadconnected", (event) => {
  // Alle Tasten- und Achsenwerte können über
  const gamepad = event.gamepad;
});
```

Alternativ können Sie die `window.ongamepadconnected` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `gamepadconnected` Ereignis einzurichten:

```js
window.ongamepadconnected = (event) => {
  // Alle Tasten- und Achsenwerte können über
  const gamepad = event.gamepad;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [gamepaddisconnected](/de/docs/Web/API/Window/gamepaddisconnected_event)
- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
