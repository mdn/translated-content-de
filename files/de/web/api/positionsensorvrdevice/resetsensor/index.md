---
title: "PositionSensorVRDevice: Methode resetSensor()"
short-title: resetSensor()
slug: Web/API/PositionSensorVRDevice/resetSensor
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`resetSensor()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle _kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen und die_ Positions- und Orientierungswerte auf null zurückzusetzen.

## Syntax

```js-nolint
resetSensor()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren. Es verfügt unter anderem über einen "Sensor zurücksetzen"-Button in der Benutzeroberfläche, der beim Drücken die Funktion `resetSensor()` auf dem Positionssensor ausführt. Der JavaScript-Code sieht folgendermaßen aus:

```js
document.querySelector("button").onclick = () => {
  gPositionSensor.resetSensor();
};
```

Wenn der Button gedrückt wird, wird die aktuelle Position, Ausrichtung usw. des Sensors/Head-Mounted Displays auf 0 gesetzt — das macht die Methode nützlich für die Kalibrierung, wenn eine App erstmals geladen wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
