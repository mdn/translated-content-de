---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`PositionSensorVRDevice`** Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert den Positionssensor der VR-Hardware. Sie können Informationen wie die aktuelle Position und Orientierung des Sensors in Bezug auf das Head-Mounted Display über die Methode {{domxref("PositionSensorVRDevice.getState()")}} abrufen.

## Instanzmethoden

- {{domxref("PositionSensorVRDevice.getState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen Zustand des Positionssensors für den aktuellen Frame (z.B. innerhalb des aktuellen {{domxref("window.requestAnimationFrame")}}-Callbacks) oder für den vorherigen Frame zurück, enthalten in einem {{domxref("VRPose")}}-Objekt. Dies ist die Methode, die Sie normalerweise verwenden sollten, im Gegensatz zu `getImmediateState()`.
- {{domxref("PositionSensorVRDevice.getImmediateState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt den aktuellen sofortigen Zustand des Positionssensors zurück. Dies soll nur selten für bestimmte spezielle Verwendungen genutzt werden, zum Beispiel um die unmittelbare Position eines Handorientierungssensors zu erfassen — oder zumindest wird es das in Zukunft sein.
- {{domxref("PositionSensorVRDevice.resetSensor()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : _Kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen und die_ Positions- und Orientierungswerte auf null zurückzusetzen.

## Instanzeigenschaften

_Diese Schnittstelle definiert keine eigenen Eigenschaften, erbt jedoch die Eigenschaften ihrer übergeordneten Schnittstelle, {{domxref("VRDisplay")}}._

- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}}
  - : Gibt die ID für dieses spezifische `VRDevice` zurück. Die ID sollte sich zwischen Neustarts des Browsers nicht ändern, sodass Konfigurationsdaten darauf basierend gespeichert werden können.
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}}
  - : Ein lesbarer Name zur Identifizierung des `VRDevice`.

## Beispiele

Das folgende Beispiel verwendet die WebVR API, um die Ansicht einer einfachen [2D-Canvas](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}}-Schleife zu aktualisieren.

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

Hier greifen wir mit {{domxref("PositionSensorVRDevice.getState()")}} auf ein {{domxref("VRPose")}}-Objekt zu und speichern es in `posState`. Wir prüfen dann, ob Positions- und Orientierungsinformationen im aktuellen Frame vorhanden sind, indem wir {{domxref("VRPose.position")}} und {{domxref("VRPose.orientation")}} verwenden (diese geben `null` zurück, wenn zum Beispiel das Head-Mounted Display ausgeschaltet ist oder nicht auf den Positionssensor zeigt, was zu einem Fehler führen würde.)

Anschließend geben wir die x-, y- und z-Positions- und Orientierungswerte zur Information aus und verwenden diese Werte, um die Variablen `xPos`, `yPos`, `zPos`, `xOrient`, `yOrient` und `zOrient` zu aktualisieren, die verwendet werden, um das Szenenrendering in jedem Frame zu aktualisieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
