---
title: Gamepad
slug: Web/API/Gamepad
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Das **`Gamepad`** Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ein einzelnes Gamepad oder einen anderen Controller, wodurch der Zugriff auf Informationen wie Tastenanschläge, Achsenpositionen und ID ermöglicht wird.

Ein Gamepad-Objekt kann auf zwei Arten zurückgegeben werden: über die `gamepad`-Eigenschaft der [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse oder durch Abfrage einer beliebigen Position im Array, das von der [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) Methode zurückgegeben wird.

> [!NOTE]
> Die Unterstützung von Gamepad-Funktionen variiert zwischen verschiedenen Kombinationen von Plattformen und Controllern. Selbst wenn der Controller eine bestimmte Funktion (zum Beispiel haptisches Feedback) unterstützt, heißt das nicht, dass die Plattform diese Funktion für diesen Controller unterstützt.

## Instanz-Eigenschaften

- [`Gamepad.axes`](/de/docs/Web/API/Gamepad/axes) {{ReadOnlyInline}}
  - : Ein Array, das die Steuerungen mit auf dem Gerät vorhandenen Achsen darstellt (z.B. analoge Joysticks).
- [`Gamepad.buttons`](/de/docs/Web/API/Gamepad/buttons) {{ReadOnlyInline}}
  - : Ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton) Objekten, die die auf dem Gerät vorhandenen Tasten darstellen.
- [`Gamepad.connected`](/de/docs/Web/API/Gamepad/connected) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Gamepad noch mit dem System verbunden ist.
- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) eines zugehörigen [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück (falls relevant) — das `VRDisplay`, das das Gamepad steuert, um die angezeigte Szene darzustellen.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Enum, das definiert, in welcher Hand der Controller gehalten wird oder wahrscheinlich gehalten wird.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator) Objekte enthält, von denen jedes eine auf dem Controller verfügbare haptische Rückmeldungshardware darstellt.
- [`Gamepad.vibrationActuator`](/de/docs/Web/API/Gamepad/vibrationActuator) {{ReadOnlyInline}}
  - : Ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator) Objekt, das die auf dem Controller verfügbare haptische Rückmeldungshardware darstellt.
- [`Gamepad.id`](/de/docs/Web/API/Gamepad/id) {{ReadOnlyInline}}
  - : Ein String, der identifizierende Informationen über den Controller enthält.
- [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) {{ReadOnlyInline}}
  - : Eine ganze Zahl, die automatisch hochgezählt wird, um für jedes derzeit mit dem System verbundene Gerät eindeutig zu sein.
- [`Gamepad.mapping`](/de/docs/Web/API/Gamepad/mapping) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Browser die Steuerungen auf dem Gerät auf ein bekanntes Layout umgelegt hat.
- [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`GamepadPose`](/de/docs/Web/API/GamepadPose) Objekt, das die Pose-Informationen darstellt, die mit einem WebVR-Controller verbunden sind (z.B. seine Position und Ausrichtung im 3D-Raum).
- [`Gamepad.timestamp`](/de/docs/Web/API/Gamepad/timestamp) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die letzte Zeit darstellt, zu der die Daten für dieses Gamepad aktualisiert wurden.

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
