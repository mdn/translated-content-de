---
title: GamepadEvent
slug: Web/API/GamepadEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

Die GamepadEvent-Schnittstelle der Gamepad-API enthält Referenzen zu Gamepads, die mit dem System verbunden sind. Diese Schnittstelle wird bei den Gamepad-Ereignissen {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} als Antwort ausgelöst.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : Gibt ein neues `GamepadEvent`-Objekt zurück.

## Instanz-Eigenschaften

- {{ domxref("GamepadEvent.gamepad") }} {{ReadOnlyInline}}
  - : Gibt ein {{ domxref("Gamepad") }}-Objekt zurück, das Zugriff auf die zugehörigen Gamepad-Daten für das ausgelöste Ereignis bietet.

## Beispiele

Die gamepad-Eigenschaft wird bei einem ausgelösten {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}-Ereignis aufgerufen.

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

Und bei einem {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignis.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
