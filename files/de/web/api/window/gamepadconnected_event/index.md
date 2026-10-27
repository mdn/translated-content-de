---
title: "Window: gamepadconnected-Ereignis"
short-title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Gamepad API")}}

Das `gamepadconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad verbunden wurde, oder wenn zum ersten Mal eine Taste oder Achse des Gamepads verwendet wird.

Das Ereignis wird nicht ausgelöst, wenn die {{httpheader('Permissions-Policy/gamepad','gamepad')}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) des Dokuments dies untersagt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gamepadconnected", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ongamepadconnected = (event) => { }
```

## Beispiele

Um benachrichtigt zu werden, wenn ein Gamepad verbunden wird, können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Handler zu `window` hinzufügen:

```js
window.addEventListener("gamepadconnected", (event) => {
  // All buttons and axes values can be accessed through
  const gamepad = event.gamepad;
});
```

Alternativ können Sie über die Event-Handler-Eigenschaft `window.ongamepadconnected` einen Handler für das `gamepadconnected`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ongamepadconnected` hinzugefügte Event-Listener ersetzt werden:

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
- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
