---
title: "PositionSensorVRDevice: Methode getState()"
short-title: getState()
slug: Web/API/PositionSensorVRDevice/getState
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getState()`**-Methode des [`PositionSensorVRDevice`](/de/docs/Web/API/PositionSensorVRDevice)-Interfaces gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame zurück (z.B. innerhalb des aktuellen [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks) oder für den vorherigen Frame, enthalten in einem [`VRPose`](/de/docs/Web/API/VRPose)-Objekt. Dies ist die Methode, die Sie normalerweise verwenden möchten, im Vergleich zu [`PositionSensorVRDevice.getImmediateState`](/de/docs/Web/API/PositionSensorVRDevice/getImmediateState).

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren.

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

Hier holen wir ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt mit `getState()` und speichern es in `posState`. Wir prüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn zum Beispiel das Head-Mounted-Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was einen Fehler verursachen würde.)

Anschließend geben wir die x-, y- und z-Position und -Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die zur Aktualisierung der Szenenrendering in jedem Frame verwendet werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
