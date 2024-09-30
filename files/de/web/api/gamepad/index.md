---
title: Gamepad
slug: Web/API/Gamepad
l10n:
  sourceCommit: 4f8a4458308af009a9598f6fa6b8a2f6992905ec
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Das **`Gamepad`**-Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ein einzelnes Gamepad oder einen anderen Controller und ermöglicht den Zugriff auf Informationen wie Tastendrücke, Achsenpositionen und ID.

Ein Gamepad-Objekt kann auf zwei Arten zurückgegeben werden: über die `gamepad`-Eigenschaft der [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse oder durch Abrufen einer beliebigen Position im Array, das von der Methode [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zurückgegeben wird.

> [!NOTE]
> Die Unterstützung von Gamepad-Funktionen variiert je nach Kombination von Plattformen und Controllern. Auch wenn der Controller eine bestimmte Funktion (zum Beispiel haptisches Feedback) unterstützt, kann es sein, dass die Plattform diese Funktion für diesen Controller nicht unterstützt.

## Instanz-Eigenschaften

- [`Gamepad.axes`](/de/docs/Web/API/Gamepad/axes) {{ReadOnlyInline}}
  - : Ein Array, das die Steuerungen mit Achsen darstellt, die auf dem Gerät vorhanden sind (z.B. analoge Daumensticks).
- [`Gamepad.buttons`](/de/docs/Web/API/Gamepad/buttons) {{ReadOnlyInline}}
  - : Ein Array von [`gamepadButton`](/de/docs/Web/API/GamepadButton)-Objekten, die die Tasten darstellen, die auf dem Gerät vorhanden sind.
- [`Gamepad.connected`](/de/docs/Web/API/Gamepad/connected) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob das Gamepad noch mit dem System verbunden ist.
- [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) eines zugeordneten [`VRDisplay`](/de/docs/Web/API/VRDisplay) zurück (falls relevant) — das `VRDisplay`, das das Gamepad zur Steuerung der angezeigten Szene verwendet.
- [`Gamepad.hand`](/de/docs/Web/API/Gamepad/hand) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Enum, das definiert, in welcher Hand der Controller gehalten wird oder wahrscheinlich gehalten wird.
- [`Gamepad.hapticActuators`](/de/docs/Web/API/Gamepad/hapticActuators) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array, das [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekte enthält, von denen jedes die auf dem Controller verfügbare haptische Feedback-Hardware darstellt.
- [`Gamepad.vibrationActuator`](/de/docs/Web/API/Gamepad/vibrationActuator) {{ReadOnlyInline}}
  - : Ein [`GamepadHapticActuator`](/de/docs/Web/API/GamepadHapticActuator)-Objekt, das die auf dem Controller verfügbare haptische Feedback-Hardware darstellt.
- [`Gamepad.id`](/de/docs/Web/API/Gamepad/id) {{ReadOnlyInline}}
  - : Ein String, der Identifikationsinformationen über den Controller enthält.
- [`Gamepad.index`](/de/docs/Web/API/Gamepad/index) {{ReadOnlyInline}}
  - : Ein Integer, der automatisch inkrementiert wird, um für jedes aktuell mit dem System verbundene Gerät einzigartig zu sein.
- [`Gamepad.mapping`](/de/docs/Web/API/Gamepad/mapping) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Browser die Steuerelemente auf dem Gerät auf ein bekanntes Layout umgemappt hat.
- [`Gamepad.pose`](/de/docs/Web/API/Gamepad/pose) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`GamepadPose`](/de/docs/Web/API/GamepadPose)-Objekt, das die Poseninformationen eines WebVR-Controllers darstellt (z.B. seine Position und Orientierung im 3D-Raum).
- [`Gamepad.timestamp`](/de/docs/Web/API/Gamepad/timestamp) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die letzte Zeit repräsentiert, in der die Daten für dieses Gamepad aktualisiert wurden.

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
