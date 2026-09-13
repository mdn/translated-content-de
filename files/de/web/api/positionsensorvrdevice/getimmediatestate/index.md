---
title: "PositionSensorVRDevice: getImmediateState() Methode"
short-title: getImmediateState()
slug: Web/API/PositionSensorVRDevice/getImmediateState
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getImmediateState()`** Methode des [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle gibt den aktuellen momentanen Zustand des Positionssensors zurück. Diese ist nur selten zu verwenden, für spezielle Anwendungsfälle, zum Beispiel um die unmittelbare Position eines Handorientierungssensors zu erfassen – oder zumindest wird sie das in Zukunft sein.

Für die meisten Standardanwendungen möchten Sie stattdessen wahrscheinlich [`PositionSensorVRDevice.getState`](/de/docs/Web/API/PositionSensorVRDevice/getState) verwenden.

## Syntax

```js-nolint
getImmediateState()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt.

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Schleife zu aktualisieren. Die Hauptfunktion, die die Ansichts-Daten aktualisiert, ist wie folgt:

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

Hier holen wir ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt mit `getImmediateState()` und speichern es in `posState` (das eigentliche Live-Demo verwendet `getState()`, aber beide scheinen derzeit dasselbe zu tun.) Wir überprüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) nutzen (diese geben `null` zurück, wenn, zum Beispiel, das Head-Mounted-Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was zu einem Fehler führen würde).

Wir geben dann die x-, y- und z-Position und Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die verwendet werden, um das Szenen-Rendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
