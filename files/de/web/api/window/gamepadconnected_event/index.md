---
title: "Window: gamepadconnected-Ereignis"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("Gamepad API")}}

Das `gamepadconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde oder das erste Mal eine Taste/Achse des Gamepads benutzt wird.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) des Dokuments nicht erlaubt ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach außen weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gamepadconnected", (event) => { })

ongamepadconnected = (event) => { }
```

## Beispiele

Um informiert zu werden, wenn ein Gamepad verbunden wird, können Sie einen Handler zum Window hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, so:

```js
window.addEventListener("gamepadconnected", (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
});
```

Alternativ können Sie die `window.ongamepadconnected` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `gamepadconnected`-Ereignis zu etablieren:

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
