---
title: "Window: gamepaddisconnected-Ereignis"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `gamepaddisconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) des Dokuments untersagt ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gamepaddisconnected", (event) => { })

ongamepaddisconnected = (event) => { }
```

## Beispiele

Um benachrichtigt zu werden, wenn ein Gamepad getrennt wird, können Sie einen Handler zum Fenster hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie folgt:

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Lost connection with the gamepad.");
});
```

Alternativ können Sie die `window.ongamepaddisconnected`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `gamepaddisconnected`-Ereignis einzurichten:

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
- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
