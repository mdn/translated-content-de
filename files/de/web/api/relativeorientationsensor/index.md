---
title: RelativeOrientationSensor
slug: Web/API/RelativeOrientationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`RelativeOrientationSensor`**-Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) beschreibt die physikalische Ausrichtung des Geräts, ohne das Bezugssystem der Erde zu berücksichtigen.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für die Gerätesensoren `'accelerometer'` und `'gyroscope'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Zusätzlich kann dieses Feature durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`RelativeOrientationSensor()`](/de/docs/Web/API/RelativeOrientationSensor/RelativeOrientationSensor)
  - : Erstellt ein neues `RelativeOrientationSensor`-Objekt.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) und [`Sensor`](/de/docs/Web/API/Sensor)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Vorfahren, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel, das lose auf [Intels Orientation Phone Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, instanziiert ein `RelativeOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde.

> [!NOTE]
> Das Intel-Demo, auf dem dieses basiert, verwendet den `AbsoluteOrientationSensor`. Bei jeder Messung wird [`OrientationSensor.quaternion`](/de/docs/Web/API/OrientationSensor/quaternion) verwendet, um ein visuelles Modell eines Telefons zu drehen.

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

### Berechtigungsbeispiel

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da das [`Permissions`](/de/docs/Web/API/Permissions)-Interface Versprechen verwendet, ist es eine gute Methode, Berechtigungen mit {{jsxref('Promise.all')}} anzufordern.

```js
const sensor = new RelativeOrientationSensor();
Promise.all([
  navigator.permissions.query({ name: "accelerometer" }),
  navigator.permissions.query({ name: "gyroscope" }),
]).then((results) => {
  if (results.every((result) => result.state === "granted")) {
    sensor.start();
    // ...
  } else {
    console.log("No permissions to use RelativeOrientationSensor.");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
