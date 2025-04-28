---
title: RelativeOrientationSensor
slug: Web/API/RelativeOrientationSensor
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`RelativeOrientationSensor`** Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) beschreibt die physische Orientierung des Geräts ohne Berücksichtigung des Erd-Referenzkoordinatensystems.

Um diesen Sensor zu nutzen, muss der Benutzer die Erlaubnis für die Gerätesensoren `'accelerometer'` und `'gyroscope'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Zusätzlich kann diese Funktion durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`RelativeOrientationSensor()`](/de/docs/Web/API/RelativeOrientationSensor/RelativeOrientationSensor)
  - : Erstellt ein neues `RelativeOrientationSensor` Objekt.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Vorfahren, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel, das lose auf [Intels Orientation Phone-Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, instanziiert einen `RelativeOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde.

> [!NOTE]
> Die Intel-Demo, auf der dies basiert, verwendet den `AbsoluteOrientationSensor`. Bei jeder Messung wird [`OrientationSensor.quaternion`](/de/docs/Web/API/OrientationSensor/quaternion) verwendet, um ein visuelles Modell eines Telefons zu drehen.

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new RelativeOrientationSensor(options);

sensor.addEventListener("reading", () => {
  // model is a Three.js object instantiated elsewhere.
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener("error", (error) => {
  if (event.error.name === "NotReadableError") {
    console.log("Sensor is not available.");
  }
});
sensor.start();
```

### Berechtigungs-Beispiel

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da das [`Permissions`](/de/docs/Web/API/Permissions) Interface Versprechen verwendet, ist eine gute Möglichkeit, Berechtigungen anzufordern, die Verwendung von {{jsxref('Promise.all')}}.

```js
const sensor = new RelativeOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // …
  } else {
    console.log("No permissions to use RelativeOrientationSensor.");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
