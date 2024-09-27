---
title: "PositionSensorVRDevice: getImmediateState() Methode"
short-title: getImmediateState()
slug: Web/API/PositionSensorVRDevice/getImmediateState
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getImmediateState()`** Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay) Schnittstelle gibt den aktuellen sofortigen Zustand des Positionssensors zurück. Diese soll nur selten verwendet werden, für bestimmte Spezialanwendungen, zum Beispiel zum Abtasten der sofortigen Position eines Handorientierungssensors – oder zumindest wird es in Zukunft so sein.

Für die meisten Standardanwendungen verwenden Sie wahrscheinlich eher [`PositionSensorVRDevice.getState`](/de/docs/Web/API/PositionSensorVRDevice/getState).

## Syntax

```js-nolint
getImmediateState()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt.

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) Schleife zu aktualisieren. Die Hauptfunktion, die die Ansichtsdatenerneuerung durchführt, ist wie folgt:

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

Hier greifen wir ein [`VRPose`](/de/docs/Web/API/VRPose) Objekt mit `getImmediateState()` ab und speichern es in `posState` (das tatsächliche Live-Demo verwendet `getState()`, aber beide scheinen derzeit dasselbe zu tun.) Wir prüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) verwenden (diese geben `null` zurück, wenn zum Beispiel das Head-Mounted Display ausgeschaltet oder nicht auf den Positionssensor gerichtet ist, was einen Fehler verursachen würde.)

Wir geben dann die x-, y- und z-Position und -Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die verwendet werden, um das Szenenrendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
