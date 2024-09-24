---
title: "PositionSensorVRDevice: Methode getImmediateState()"
short-title: getImmediateState()
slug: Web/API/PositionSensorVRDevice/getImmediateState
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getImmediateState()`** Methode des {{domxref("VRDisplay")}}-Interfaces gibt den aktuellen unmittelbaren Zustand des Positionssensors zurück. Diese Methode soll nur selten verwendet werden, für bestimmte spezielle Anwendungsfälle, zum Beispiel beim Abtasten der unmittelbaren Position eines Handorientierungssensors – oder es wird zumindest in Zukunft so sein.

Für die meisten Standardanwendungen möchten Sie wahrscheinlich stattdessen {{domxref("PositionSensorVRDevice.getState")}} verwenden.

## Syntax

```js-nolint
getImmediateState()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("VRPose")}} Objekt.

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen {{domxref("CanvasRenderingContext2D")}}-Szene in jedem Frame einer {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} Schleife zu aktualisieren. Die Hauptfunktion, die die Ansichts-Daten aktualisiert, ist wie folgt:

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
    orientPara.textContent = `Orientierung: x${roundToTwo(
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

Hier erfassen wir ein {{domxref("VRPose")}} Objekt mit `getImmediateState()` und speichern es in `posState` (das eigentliche Live-Demo verwendet `getState()`, aber beide scheinen derzeit dasselbe zu tun.) Wir überprüfen dann, ob Informationen zur Position und Orientierung im aktuellen Frame vorhanden sind, indem wir {{domxref("VRPose.position")}} und {{domxref("VRPose.orientation")}} verwenden (diese geben `null` zurück, wenn zum Beispiel das Head-Mounted Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was einen Fehler verursachen würde.)

Wir geben dann die x-, y- und z-Position sowie die Orientierungswerte zu Informationszwecken aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die in jedem Frame zur Aktualisierung der Szenenrendering verwendet werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
