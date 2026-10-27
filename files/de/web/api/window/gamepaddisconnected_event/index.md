---
title: "Window: gamepaddisconnected-Ereignis"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("Gamepad API")}}

Das `gamepaddisconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

Das Ereignis wird nicht ausgelöst, wenn die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) des Dokuments dies über {{httpheader('Permissions-Policy/gamepad','gamepad')}} untersagt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("gamepaddisconnected", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Handler zuweisen:

```js-nolint
ongamepaddisconnected = (event) => { }
```

## Beispiele

Um benachrichtigt zu werden, wenn ein Gamepad getrennt wird, können Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Handler zum Fenster hinzufügen:

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Lost connection with the gamepad.");
});
```

Alternativ können Sie über die Event-Handler-Eigenschaft `window.ongamepaddisconnected` einen Handler für das `gamepaddisconnected`-Ereignis festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ongamepaddisconnected` hinzugefügte Event-Listener ersetzt werden:

```js
window.ongamepaddisconnected = (event) => {
  console.log("Lost connection with the gamepad.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [gamepadconnected](/de/docs/Web/API/Window/gamepadconnected_event)
- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
