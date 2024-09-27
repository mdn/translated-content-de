---
title: "Window: gamepaddisconnected Ereignis"
short-title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das `gamepaddisconnected`-Ereignis wird ausgelöst, wenn der Browser erkennt, dass ein Gamepad getrennt wurde.

Das Ereignis wird nicht ausgelöst, wenn es durch die {{httpheader('Permissions-Policy/gamepad','gamepad')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) des Dokuments nicht zugelassen ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht gebubbelt.

## Beispiele

Um informiert zu werden, wenn ein Gamepad getrennt wird, können Sie einen Handler mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Fenster hinzufügen, wie folgt:

```js
window.addEventListener("gamepaddisconnected", (event) => {
  console.log("Lost connection with the gamepad.");
});
```

Alternativ können Sie die `window.ongamepaddisconnected` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `gamepaddisconnected`-Ereignis festzulegen:

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
