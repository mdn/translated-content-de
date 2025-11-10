---
title: "Window: gamepadconnected Ereignis"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `gamepadconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad angeschlossen wurde oder das erste Mal eine Taste/Achse des Gamepads benutzt wird.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Leitfaden/Berechtigungsrichtlinie) des Dokuments nicht erlaubt ist.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("gamepadconnected", (event) => { })

ongamepadconnected = (event) => { }
```

## Beispiele

Um informiert zu werden, wenn ein Gamepad angeschlossen wird, können Sie einen Handler zum Fenster mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
window.addEventListener("gamepadconnected", (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
});
```

Alternativ können Sie die `window.ongamepadconnected` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `gamepadconnected`-Ereignis einzurichten:

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
