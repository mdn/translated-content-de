---
title: GamepadEvent
slug: Web/API/GamepadEvent
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Das `GamepadEvent`-Interface der Gamepad API enthält Referenzen auf mit dem System verbundene Gamepads, auf die die Gamepad-Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) reagieren.

{{InheritanceDiagram}}

## Konstruktor

- [`GamepadEvent()`](/de/docs/Web/API/GamepadEvent/GamepadEvent)
  - : Gibt ein neues `GamepadEvent`-Objekt zurück.

## Instanz-Eigenschaften

- [`GamepadEvent.gamepad`](/de/docs/Web/API/GamepadEvent/gamepad) {{ReadOnlyInline}}
  - : Gibt ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurück, das Zugriff auf die zugehörigen Gamepad-Daten für das ausgelöste Ereignis bietet.

## Beispiele

Die Eigenschaft `gamepad`, die bei einem ausgelösten [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) Ereignis aufgerufen wird.

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

Und bei einem [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignis.

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

[Nutzung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
