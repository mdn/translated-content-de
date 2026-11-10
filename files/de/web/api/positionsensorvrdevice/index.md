---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das Interface **`PositionSensorVRDevice`** der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Positionssensor einer VR-Hardware. Über die Methode [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) können Sie Informationen wie die aktuelle Position und Ausrichtung des Sensors relativ zum Head-Mounted Display abrufen.

## Instanzeigenschaften

_Dieses Interface definiert keine eigenen Eigenschaften, erbt aber die Eigenschaften seines übergeordneten Interfaces [`VRDisplay`](/de/docs/Web/API/VRDisplay)._

- [`VRDisplay.displayId`](/de/docs/Web/API/VRDisplay/displayId) {{ReadOnlyInline}}
  - : Gibt die ID dieses bestimmten `VRDevice` zurück. Die ID sollte auch nach einem Neustart des Browsers gleich bleiben, damit darauf basierende Konfigurationsdaten gespeichert werden können.
- [`VRDisplay.displayName`](/de/docs/Web/API/VRDisplay/displayName) {{ReadOnlyInline}}
  - : Ein menschenlesbarer Name zur Identifizierung des `VRDevice`.

## Instanzmethoden

- [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame (z. B. innerhalb des aktuellen Callbacks von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) oder für den vorherigen Frame in einem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück. Normalerweise sollten Sie diese Methode statt `getImmediateState()` verwenden.
- [`PositionSensorVRDevice.getImmediateState()`](/de/docs/Web/API/PositionSensorVRDevice/getImmediateState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den momentanen Zustand des Positionssensors zurück. Diese Methode ist nur für seltene Sonderfälle vorgesehen, beispielsweise um die unmittelbare Position eines Sensors für die Handausrichtung abzutasten – oder wird zumindest künftig dafür vorgesehen sein.
- [`PositionSensorVRDevice.resetSensor()`](/de/docs/Web/API/PositionSensorVRDevice/resetSensor) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Kann bei Bedarf verwendet werden, um den Sensor zurückzusetzen und die_ Positions- und Ausrichtungswerte auf null zu setzen.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen [2D-Canvas](/de/docs/Web/API/CanvasRenderingContext2D)-Szene bei jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren.

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

Hier rufen wir mit [`PositionSensorVRDevice.getState()`](/de/docs/Web/API/PositionSensorVRDevice/getState) ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt ab und speichern es in `posState`. Anschließend prüfen wir mithilfe von [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation), ob für den aktuellen Frame Positions- und Ausrichtungsinformationen vorliegen. Diese Eigenschaften geben `null` zurück, wenn beispielsweise das Head-Mounted Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was sonst zu einem Fehler führen würde.

Anschließend geben wir die x-, y- und z-Werte für Position und Ausrichtung zu Informationszwecken aus. Außerdem aktualisieren wir mit diesen Werten die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient`, mit denen die Darstellung der Szene bei jedem Frame aktualisiert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
