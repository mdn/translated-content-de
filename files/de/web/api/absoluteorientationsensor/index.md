---
title: AbsoluteOrientationSensor
slug: Web/API/AbsoluteOrientationSensor
l10n:
  sourceCommit: 7b01ac3a570c1c053d1fbc9325c94cde4e71aebe
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`AbsoluteOrientationSensor`**-Schnittstelle der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) beschreibt die physische Ausrichtung des Geräts in Bezug auf das Erdkoordinatensystem.

Um diesen Sensor zu verwenden, muss der Benutzer die Erlaubnis für die Gerätesensoren `'accelerometer'`, `'gyroscope'` und `'magnetometer'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AbsoluteOrientationSensor()`](/de/docs/Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor)
  - : Erstellt ein neues `AbsoluteOrientationSensor`-Objekt.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Methoden von seinem Vorfahren, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel, das lose auf [Intels Orientation Phone-Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, instanziiert einen `AbsoluteOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde. Bei jeder Ablesung wird [`OrientationSensor.quaternion`](/de/docs/Web/API/OrientationSensor/quaternion) verwendet, um ein visuelles Modell eines Telefons zu drehen.

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new AbsoluteOrientationSensor(options);

sensor.addEventListener("reading", () => {
  // model is a Three.js object instantiated elsewhere.
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener("error", (event) => {
  if (event.error.name === "NotReadableError") {
    console.log("Sensor is not available.");
  }
});
sensor.start();
```

### Berechtigungsbeispiel

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da die [`Permissions`](/de/docs/Web/API/Permissions)-Schnittstelle Versprechen verwendet, ist es eine gute Methode, Berechtigungen mit {{jsxref('Promise.all')}} anzufordern.

```js
const sensor = new AbsoluteOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "magnetometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // …
  } else {
    console.log("No permissions to use AbsoluteOrientationSensor.");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
