---
title: "PositionSensorVRDevice: resetSensor()-Methode"
short-title: resetSensor()
slug: Web/API/PositionSensorVRDevice/resetSensor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`resetSensor()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle _kann verwendet werden, um den Sensor bei Bedarf zurückzusetzen und die_ Positions- und Orientierungswerte auf null zu setzen.

## Syntax

```js-nolint
resetSensor()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Demo verwendet die WebVR-API, um die Ansicht einer einfachen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Szene bei jedem Frame einer [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-Schleife zu aktualisieren. Es enthält unter anderem einen "Reset Sensor"-Button in der Benutzeroberfläche, der beim Drücken die `resetSensor()`-Funktion auf dem Positionssensor ausführt. Der JavaScript-Code sieht wie folgt aus:

```js
document.querySelector("button").onclick = () => {
  gPositionSensor.resetSensor();
};
```

Wenn die Taste gedrückt wird, werden die aktuelle Position, Orientierung usw. des Sensors/Head-Mounted Displays auf 0 gesetzt — dies macht die Methode nützlich für die Kalibrierung, wenn eine App erstmals geladen wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
