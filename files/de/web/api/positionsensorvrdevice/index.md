---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`PositionSensorVRDevice`** Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Positionssensor der VR-Hardware. Sie können Informationen wie die aktuelle Position und Ausrichtung des Sensors im Verhältnis zum Head-Mounted-Display über die Methode [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) abrufen.

## Instanzmethoden

- [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame zurück (z. B. innerhalb des aktuellen [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks) oder für den vorherigen Frame, enthalten in einem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt. Dies ist die Methode, die Sie normalerweise verwenden würden, im Gegensatz zu `getImmediateState()`.
- [`PositionSensorVRDevice.getImmediateState()`](/de/docs/Web/API/PositionSensorVRDevice/getImmediateState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen sofortigen Zustand des Positionssensors zurück. Diese Methode ist dafür gedacht, nur selten verwendet zu werden, für bestimmte spezielle Anwendungen, zum Beispiel um die unmittelbare Position eines Handorientierungssensors abzufragen — oder zumindest wird sie das in der Zukunft sein.
- [`PositionSensorVRDevice.resetSensor()`](/de/docs/Web/API/PositionSensorVRDevice/resetSensor) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen und die_ Positions- und Ausrichtungswerte auf Null zurückzusetzen.

## Instanzeigenschaften

_Diese Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften ihrer übergeordneten Schnittstelle, [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte über Browser-Neustarts hinweg gleich bleiben, sodass Konfigurationsdaten basierend auf ihr gespeichert werden können.
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

Hier greifen wir ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt mit [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) ab und speichern es in `posState`. Wir prüfen dann, ob Positions- und Ausrichtungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn z. B. das Head-Mounted-Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was einen Fehler verursachen würde).

Wir geben dann die x-, y- und z-Position sowie die Ausrichtungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die verwendet werden, um die Szenenwiedergabe in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
