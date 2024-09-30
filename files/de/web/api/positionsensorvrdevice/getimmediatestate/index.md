---
title: "PositionSensorVRDevice: getImmediateState()-Methode"
short-title: getImmediateState()
slug: Web/API/PositionSensorVRDevice/getImmediateState
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getImmediateState()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt den aktuellen, momentanen Zustand des Positionssensors zurück. Dies ist nur selten vorgesehen, für bestimmte spezielle Anwendungsfälle, beispielsweise um die unmittelbare Position eines Handorientierungssensors abzutasten — oder es wird zumindest in Zukunft so sein.

Für die meisten Standardanwendungen sollten Sie wahrscheinlich stattdessen [`PositionSensorVRDevice.getState`](/de/docs/Web/API/PositionSensorVRDevice/getState) verwenden.

## Syntax

```js-nolint
getImmediateState()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen Szene mit [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren. Die Hauptfunktion, die die Ansichts-Daten aktualisiert, ist wie folgt:

```js
function setView() {
  const posState = gPositionSensor.getImmediateState();
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

Hier erfassen wir ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt mit `getImmediateState()` und speichern es in `posState` (das eigentliche Live-Demo verwendet `getState()`, aber beide scheinen aktuell das Gleiche zu tun). Wir überprüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn beispielsweise das Head-Mounted Display ausgeschaltet ist oder nicht auf den Positionssensor gezeigt wird, was einen Fehler verursachen würde).

Wir geben dann die x-, y- und z-Positionen sowie Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die verwendet werden, um das Szenen-Rendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
