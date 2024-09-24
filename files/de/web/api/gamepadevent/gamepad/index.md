---
title: "GamepadEvent: gamepad-Eigenschaft"
short-title: gamepad
slug: Web/API/GamepadEvent/gamepad
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Die **`GamepadEvent.gamepad`**-Eigenschaft der
**{{domxref("GamepadEvent")}}-Schnittstelle** liefert ein {{domxref("Gamepad")}}
Objekt, das Zugriff auf die zugehörigen Gamepad-Daten für ausgelöste
{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} Ereignisse bietet.

## Wert

Ein {{domxref("Gamepad")}} Objekt.

## Beispiele

Die `gamepad`-Eigenschaft wird bei einem ausgelösten
{{domxref("Window.gamepadconnected_event", "gamepadconnected")}} Ereignis aufgerufen.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

[Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
