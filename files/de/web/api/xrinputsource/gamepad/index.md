---
title: "XRInputSource: gamepad-Eigenschaft"
short-title: gamepad
slug: Web/API/XRInputSource/gamepad
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`gamepad`** des {{domxref("XRInputSource")}} gibt ein {{domxref("Gamepad")}}-Objekt zurück, das den Zustand der Tasten und Achsen der XR-Eingabequelle beschreibt, wenn es sich um ein Gamepad oder ein vergleichbares Gerät handelt. Ist das Gerät kein Gamepad-ähnliches Gerät, ist der Wert dieser Eigenschaft `null`.

Die zurückgegebene {{domxref("Gamepad")}}-Instanz verhält sich wie im [Gamepad API](/de/docs/Web/API/Gamepad_API) beschrieben. Es gibt jedoch einige Punkte zu beachten:

- `Gamepad`-Instanzen, die zu `XRInputSource` gehören, sind nicht im Array enthalten, das von {{domxref("navigator.getGamepads()")}} zurückgegeben wird. Gamepads sind streng mit der WebXR-Hardware verbunden und keine allgemeinen Gaming-Geräte.
- {{domxref("Gamepad.id")}} ist ein leerer String (`""`).
- {{domxref("Gamepad.index")}} ist `-1`.
- {{domxref("Gamepad.connected")}} ist `true`, bis das `XRInputSource` aus der Liste der aktiven XR-Eingabequellen entfernt wird oder die {{domxref("XRSession")}} beendet wird.
- Wenn eine Achse, die von {{domxref("Gamepad.axes")}} gemeldet wird, eine Achse eines Touchpads darstellt, ist der Wert 0, wenn die zugeordnete {{domxref("GamepadButton.touched")}}-Eigenschaft `false` ist.
- {{domxref("Gamepad.mapping")}} gibt "xr-standard" zurück.

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
