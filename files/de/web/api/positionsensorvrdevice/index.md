---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`PositionSensorVRDevice`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Positionssensor der VR-Hardware. Sie können Informationen wie die aktuelle Position und Ausrichtung des Sensors in Bezug auf das Head-Mounted Display über die Methode [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) abrufen.

## Instanzmethoden

- [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame zurück (z.B. innerhalb des aktuellen [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Callbacks) oder für den vorherigen Frame, enthalten in einem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt. Dies ist die Methode, die Sie normalerweise verwenden wollen, im Gegensatz zu `getImmediateState()`.
- [`PositionSensorVRDevice.getImmediateState()`](/de/docs/Web/API/PositionSensorVRDevice/getImmediateState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen, unmittelbaren Zustand des Positionssensors zurück. Dies ist nur selten zu verwenden, für bestimmte spezielle Verwendungszwecke, wie z.B. das Abtasten der unmittelbaren Position eines Handorientierungssensors — oder zumindest wird es in Zukunft sein.
- [`PositionSensorVRDevice.resetSensor()`](/de/docs/Web/API/PositionSensorVRDevice/resetSensor) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Kann verwendet werden, um den Sensor zurückzusetzen, wenn gewünscht, wodurch die_ Positions- und Orientierungswerte auf Null zurückgesetzt werden.

## Instanzeigenschaften

_Dieses Interface definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften seines übergeordneten Interfaces, [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezielle `VRDevice` zurück. Die ID sollte sich über Browser-Neustarts hinweg nicht ändern, was es ermöglicht, Konfigurationsdaten darauf basierend zu speichern.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein menschenlesbarer Name zur Identifizierung des `VRDevice`.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen [2D-Canvas](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren.

```js
function setView() {
  const posState = gPositionSensor.getState();
  if (posState.hasPosition) {
    posPara.textContent = `Position: x${roundToTwo(
      posState.position.x,
    )} y${roundToTwo(posState.position.y)} z${roundToTwo(posState.position.z)}`;
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    zPos = -posState.position.z > 0.01 ? -posState.position.z : 0.01;
  }

  if (posState.hasOrientation) {
    orientPara.textContent = `Orientation: x${roundToTwo(
      posState.orientation.x,
    )} y${roundToTwo(posState.orientation.y)} z${roundToTwo(
      posState.orientation.z,
    )}`;
    xOrient = posState.orientation.x * WIDTH;
    yOrient = -posState.orientation.y * HEIGHT * 2;
    zOrient = posState.orientation.z * 180;
  }
}
```

Hier greifen wir auf ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zu, indem wir [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) verwenden und es in `posState` speichern. Wir prüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn z.B. das Head-Mounted Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was einen Fehler verursachen würde).

Wir geben dann die x-, y- und z-Positions- und Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die dazu verwendet werden, das Szenen-Rendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
