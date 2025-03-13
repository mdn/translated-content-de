---
title: OrientationSensor
slug: Web/API/OrientationSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`OrientationSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) ist die Basisklasse für Orientierungssensoren. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften und Methoden, die von Schnittstellen genutzt werden, die von ihr erben.

Diese Funktion kann durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Schnittstellen basierend auf OrientationSensor

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der OrientationSensor-Schnittstelle basieren.

- [`AbsoluteOrientationSensor`](/de/docs/Web/API/AbsoluteOrientationSensor)
- [`RelativeOrientationSensor`](/de/docs/Web/API/RelativeOrientationSensor)

## Instanz-Eigenschaften

- [`OrientationSensor.quaternion`](/de/docs/Web/API/OrientationSensor/quaternion) {{ReadOnlyInline}}
  - : Gibt ein vier Element umfassendes {{jsxref('Array')}} zurück, dessen Elemente die Komponenten des Einheitsquaternions enthalten, das die Ausrichtung des Geräts repräsentiert.

## Instanz-Methoden

- [`OrientationSensor.populateMatrix()`](/de/docs/Web/API/OrientationSensor/populateMatrix)
  - : Füllt das gegebene Objekt mit der Rotationsmatrix basierend auf der neuesten Sensorablesung.

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
sensor.addEventListener("error", (error) => {
  if (event.error.name === "NotReadableError") {
    console.log("Sensor is not available.");
  }
});
sensor.start();
```

### Berechtigungsbeispiel

Die Verwendung von Orientierungssensoren erfordert die Anforderung von Berechtigungen für mehrere Gerätesensoren. Da die [`Permissions`](/de/docs/Web/API/Permissions)-Schnittstelle Versprechen verwendet, ist es eine gute Möglichkeit, Berechtigungen mit {{jsxref('Promise.all')}} anzufordern.

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
