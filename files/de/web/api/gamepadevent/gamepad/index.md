---
title: "GamepadEvent: gamepad-Eigenschaft"
short-title: gamepad
slug: Web/API/GamepadEvent/gamepad
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadEvent.gamepad`**-Eigenschaft der
**[`GamepadEvent`](/de/docs/Web/API/GamepadEvent)-Schnittstelle** gibt ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurück, das Zugriff auf die zugehörigen Gamepad-Daten für ausgelöste [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse bietet.

## Wert

Ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt.

## Beispiele

Die `gamepad`-Eigenschaft wird bei einem ausgelösten [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)-Ereignis aufgerufen.

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
