---
title: "PositionSensorVRDevice: getState()-Methode"
short-title: getState()
slug: Web/API/PositionSensorVRDevice/getState
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getState()`**-Methode der {{domxref("PositionSensorVRDevice")}}-Schnittstelle gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame zurück (z. B. innerhalb des aktuellen {{domxref("window.requestAnimationFrame")}}-Callbacks) oder für den vorherigen Frame, enthalten in einem {{domxref("VRPose")}}-Objekt. Dies ist die Methode, die Sie normalerweise verwenden möchten, im Gegensatz zu {{domxref("PositionSensorVRDevice.getImmediateState")}}.

## Syntax

```js-nolint
getState()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("VRPose")}}-Objekt.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen {{domxref("CanvasRenderingContext2D")}}-Szene in jedem Frame einer {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}-Schleife zu aktualisieren.

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

Hier erfassen wir ein {{domxref("VRPose")}}-Objekt mit `getState()` und speichern es in `posState`. Wir überprüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir {{domxref("VRPose.position")}} und {{domxref("VRPose.orientation")}} verwenden (diese geben `null` zurück, wenn beispielsweise das Head-Mounted Display ausgeschaltet oder nicht auf den Positionssensor gerichtet ist, was einen Fehler verursachen würde).

Wir geben dann die x-, y- und z-Positions- sowie Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die zur Aktualisierung der Szene-Rendering in jedem Frame verwendet werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
