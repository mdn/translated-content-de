---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`PositionSensorVRDevice`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Positionssensor der VR-Hardware. Sie können Informationen wie die aktuelle Position und Orientierung des Sensors in Bezug auf das Head-Mounted Display über die Methode [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) abrufen.

## Instanzmethoden

- [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame zurück (z. B. innerhalb des aktuellen [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks) oder für den vorherigen Frame, eingeschlossen in einem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt. Dies ist die Methode, die Sie normalerweise verwenden möchten, im Gegensatz zu `getImmediateState()`.
- [`PositionSensorVRDevice.getImmediateState()`](/de/docs/Web/API/PositionSensorVRDevice/getImmediateState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen augenblicklichen Zustand des Positionssensors zurück. Dies soll nur selten verwendet werden, für bestimmte spezielle Anwendungen, z. B. zum Abtasten der unmittelbaren Position eines Handorientierungssensors — oder zumindest soll es das in der Zukunft sein.
- [`PositionSensorVRDevice.resetSensor()`](/de/docs/Web/API/PositionSensorVRDevice/resetSensor) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen und die_ Positions- und Orientierungswerte auf null zurückzusetzen.

## Instanzeigenschaften

_Dieses Interface definiert keine eigenen Eigenschaften, aber es erbt die Eigenschaften seines Elterninterfaces, [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte sich über Neustarts des Browsers hinweg nicht ändern, was es ermöglicht, Konfigurationsdaten basierend darauf zu speichern.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein menschenlesbarer Name zur Identifizierung des `VRDevice`.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen [2D-Leinwand](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren.

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

Hier greifen wir auf ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zu, indem wir [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) verwenden und es in `posState` speichern. Wir prüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn zum Beispiel das Head-Mounted Display ausgeschaltet oder nicht auf den Positionssensor gerichtet ist, was zu einem Fehler führen würde.)

Wir geben dann die x-, y- und z-Position und Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` Variablen zu aktualisieren, die verwendet werden, um das Szenen-Rendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
