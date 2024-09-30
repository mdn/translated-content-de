---
title: "XRInputSource: gamepad-Eigenschaft"
short-title: gamepad
slug: Web/API/XRInputSource/gamepad
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`gamepad`** gibt ein [`Gamepad`](/de/docs/Web/API/Gamepad)-Objekt zurück, das den Zustand der Tasten und Achsen der XR-Eingabequelle beschreibt, wenn es sich um einen Gamepad-ähnlichen oder vergleichbaren Gerätetyp handelt. Sollte das Gerät nicht wie ein Gamepad sein, ist der Wert dieser Eigenschaft `null`.

Die zurückgegebene [`Gamepad`](/de/docs/Web/API/Gamepad)-Instanz verhält sich so, wie es in der [Gamepad API](/de/docs/Web/API/Gamepad_API) beschrieben ist. Es gibt jedoch einige wichtige Punkte zu beachten:

- `Gamepad`-Instanzen, die zu `XRInputSource` gehören, sind nicht in dem Array enthalten, das durch [`navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird. Gamepads sind ausschließlich mit der WebXR-Hardware verbunden und keine Allzweck-Gaming-Geräte.
- [`Gamepad.id`](/de/docs/Web/API/Gamepad/id) ist ein leerer String (`""`).
- [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) ist `-1`.
- [`Gamepad.connected`](/de/docs/Web/API/Gamepad/connected) ist `true`, bis die `XRInputSource` aus der Liste der aktiven XR-Eingabequellen entfernt wird oder die [`XRSession`](/de/docs/Web/API/XRSession) beendet wird.
- Wenn eine Achse, die durch [`Gamepad.axes`](/de/docs/Web/API/Gamepad/axes) gemeldet wird, eine Achse eines Touchpads darstellt, ist der Wert 0, wenn die zugehörige [`GamepadButton.touched`](/de/docs/Web/API/GamepadButton/touched)-Eigenschaft `false` ist.
- [`Gamepad.mapping`](/de/docs/Web/API/Gamepad/mapping) gibt "xr-standard" zurück.

## Beispiele

### Verwendung einer Gamepad-Eingabequelle

```js
for (const source of frame.session.inputSources) {
  const gamepad = source.gamepad;
  if (gamepad) {
    if (gamepad.buttons[2].pressed) {
      // do something
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
