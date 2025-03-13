---
title: AbsoluteOrientationSensor
slug: Web/API/AbsoluteOrientationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`AbsoluteOrientationSensor`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) beschreibt die physische Ausrichtung des Geräts in Bezug auf das Erdkoordinatensystem.

Um diesen Sensor zu verwenden, muss der Benutzer die Erlaubnis für die Gerätesensoren `'accelerometer'`, `'gyroscope'` und `'magnetometer'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AbsoluteOrientationSensor()`](/de/docs/Web/API/AbsoluteOrientationSensor/AbsoluteOrientationSensor)
  - : Erstellt ein neues `AbsoluteOrientationSensor`-Objekt.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Methoden von seinem Vorfahren, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel, das lose auf [Intels Orientation Phone Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, instanziiert einen `AbsoluteOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde. Bei jeder Lesung wird [`OrientationSensor.quaternion`](/de/docs/Web/API/OrientationSensor/quaternion) verwendet, um ein visuelles Modell eines Telefons zu drehen.

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

### Berechtigungs-Beispiel

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da das [`Permissions`](/de/docs/Web/API/Permissions)-Interface Versprechen (`promises`) verwendet, ist eine gute Methode, um Berechtigungen anzufordern, die Verwendung von {{jsxref('Promise.all')}}.

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
