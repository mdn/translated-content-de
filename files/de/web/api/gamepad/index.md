---
title: Gamepad
slug: Web/API/Gamepad
l10n:
  sourceCommit: 3020adac456187cf18edeb20613482fb73b38c1e
---

{{APIRef("Gamepad API")}}

Das **`Gamepad`**-Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ein einzelnes Gamepad oder einen anderen Controller und ermöglicht den Zugriff auf Informationen wie Tastendrücke, Achsenpositionen und ID.

Ein Gamepad-Objekt kann auf zwei Arten zurückgegeben werden: über die `gamepad`-Eigenschaft der [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Events oder durch den Zugriff auf eine beliebige Position im Array, das von der Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

> [!NOTE]
> Die Unterstützung von Gamepad-Funktionen variiert je nach Kombination von Plattformen und Controllern. Selbst wenn der Controller eine bestimmte Funktion unterstützt (zum Beispiel haptisches Feedback), muss die Plattform diese Funktion für diesen Controller nicht unterstützen.

## Instanz-Eigenschaften

- [`Gamepad.axes`](/de/docs/Web/API/Gamepad/axes) {{ReadOnlyInline}}
  - : Ein Array, das die Steuerungen mit Achsen auf dem Gerät darstellt (z.B. analoge Daumensticks).
- [`Gamepad.buttons`](/de/docs/Web/API/Gamepad/buttons) {{ReadOnlyInline}}
  - : Ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen.
- [`Gamepad.connected`](/de/docs/Web/API/Gamepad/connected) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Gamepad noch mit dem System verbunden ist.
- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) eines zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück (falls relevant) — das `VRDisplay`, dessen angezeigte Szene vom Gamepad gesteuert wird.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Enum, das definiert, in welcher Hand der Controller gehalten wird oder höchstwahrscheinlich gehalten werden würde.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekte enthält, die jeweils die auf dem Controller verfügbare haptische Hardware repräsentieren.
- [`Gamepad.vibrationActuator`](/de/docs/Web/API/Gamepad/vibrationActuator) {{ReadOnlyInline}}
  - : Ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekt, das die haptische Hardware auf dem Controller repräsentiert.
- [`Gamepad.id`](/de/docs/Web/API/Gamepad/id) {{ReadOnlyInline}}
  - : Ein String, der Identifizierungsinformationen über den Controller enthält.
- [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) {{ReadOnlyInline}}
  - : Ein Integer, der automatisch inkrementiert wird, um für jedes derzeit mit dem System verbundene Gerät eindeutig zu sein.
- [`Gamepad.mapping`](/de/docs/Web/API/Gamepad/mapping) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Browser die Steuerungen auf dem Gerät zu einem bekannten Layout umgemappt hat.
- [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das die Informationen über die Pose eines WebVR-Controllers darstellt (z.B. seine Position und Ausrichtung im 3D-Raum).
- [`Gamepad.timestamp`](/de/docs/Web/API/Gamepad/timestamp) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den letzten Zeitpunkt darstellt, zu dem die Daten für dieses Gamepad aktualisiert wurden.

## Beispiel

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

- [Verwendung der Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
