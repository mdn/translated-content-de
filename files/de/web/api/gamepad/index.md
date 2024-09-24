---
title: Gamepad
slug: Web/API/Gamepad
l10n:
  sourceCommit: 4f8a4458308af009a9598f6fa6b8a2f6992905ec
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

Das **`Gamepad`**-Interface der [Gamepad API](/de/docs/Web/API/Gamepad_API) definiert ein einzelnes Gamepad oder einen anderen Controller und ermöglicht den Zugriff auf Informationen wie Tastenanschläge, Achspositionen und ID.

Ein Gamepad-Objekt kann auf zwei Arten zurückgegeben werden: über die `gamepad`-Eigenschaft der {{domxref("Window.gamepadconnected_event", "gamepadconnected")}}- und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}-Ereignisse oder durch Abrufen einer beliebigen Position im von der Methode {{domxref("Navigator.getGamepads()")}} zurückgegebenen Array.

> [!NOTE]
> Die Unterstützung von Gamepad-Funktionen variiert je nach Kombination von Plattformen und Controllern. Selbst wenn der Controller eine bestimmte Funktion unterstützt (zum Beispiel haptisches Feedback), kann es sein, dass die Plattform diese Funktion für diesen Controller nicht unterstützt.

## Instanz-Eigenschaften

- {{domxref("Gamepad.axes")}} {{ReadOnlyInline}}
  - : Ein Array, das die Steuerungselemente mit Achsen auf dem Gerät darstellt (z. B. analoge Daumensticks).
- {{domxref("Gamepad.buttons")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("gamepadButton")}}-Objekten, die die auf dem Gerät vorhandenen Tasten darstellen.
- {{domxref("Gamepad.connected")}} {{ReadOnlyInline}}
  - : Ein Boolean, der anzeigt, ob das Gamepad noch mit dem System verbunden ist.
- {{domxref("Gamepad.displayId")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die {{domxref("VRDisplay.displayId")}} eines zugehörigen {{domxref("VRDisplay")}} zurück (falls relevant) — das `VRDisplay`, das die vom Gamepad gesteuerte Szene anzeigt.
- {{domxref("Gamepad.hand")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Enum, das angibt, in welcher Hand der Controller gehalten wird oder am wahrscheinlichsten gehalten wird.
- {{domxref("Gamepad.hapticActuators")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array, das {{domxref("GamepadHapticActuator")}}-Objekte enthält, die jeweils die verfügbaren haptischen Rückmeldungshardware auf dem Controller darstellen.
- {{domxref("Gamepad.vibrationActuator")}} {{ReadOnlyInline}}
  - : Ein {{domxref("GamepadHapticActuator")}}-Objekt, das die verfügbaren haptischen Rückmeldungshardware auf dem Controller darstellt.
- {{domxref("Gamepad.id")}} {{ReadOnlyInline}}
  - : Ein String, der Identifikationsinformationen über den Controller enthält.
- {{domxref("Gamepad.index")}} {{ReadOnlyInline}}
  - : Eine Ganzzahl, die automatisch inkrementiert wird, um für jedes aktuell mit dem System verbundene Gerät eindeutig zu sein.
- {{domxref("Gamepad.mapping")}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Browser die Steuerungselemente auf dem Gerät in ein bekanntes Layout umgemappt hat.
- {{domxref("Gamepad.pose")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("GamepadPose")}}-Objekt, das die Poseninformationen eines WebVR-Controllers darstellt (z. B. seine Position und Orientierung im 3D-Raum).
- {{domxref("Gamepad.timestamp")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die letzte Aktualisierungszeit der Daten für dieses Gamepad darstellt.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Gamepad-API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
