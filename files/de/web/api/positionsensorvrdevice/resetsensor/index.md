---
title: "PositionSensorVRDevice: resetSensor() Methode"
short-title: resetSensor()
slug: Web/API/PositionSensorVRDevice/resetSensor
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`resetSensor()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen, wodurch die Positions- und Orientierungswerte auf null gesetzt werden.

## Syntax

```js-nolint
resetSensor()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Demo verwendet die WebVR API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Szene in jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren. Es enthält unter anderem eine "Reset Sensor"-Schaltfläche in der Benutzeroberfläche, die beim Drücken die `resetSensor()`-Funktion am Positionssensor ausführt. Der JavaScript-Code sieht folgendermaßen aus:

```js
document.querySelector("button").onclick = () => {
  gPositionSensor.resetSensor();
};
```

Wenn die Schaltfläche gedrückt wird, werden die aktuelle Position, Orientierung usw. des Sensors/Head-Mounted Displays auf 0 gesetzt — dies macht die Methode nützlich für die Kalibrierung, wenn eine App zum ersten Mal geladen wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
