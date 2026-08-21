---
title: "Window: gamepaddisconnected-Ereignis"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("Gamepad API")}}

Das `gamepaddisconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) des Dokuments nicht erlaubt ist.

Dieses Ereignis ist nicht abbrechbar und hat keine Bubbling-Eigenschaften.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("gamepaddisconnected", (event) => { })

ongamepaddisconnected = (event) => { }
```

## Beispiele

Um informiert zu werden, wenn ein Gamepad getrennt wird, können Sie einen Handler mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Fenster hinzufügen, wie hier:

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
- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
