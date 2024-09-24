---
title: RelativeOrientationSensor
slug: Web/API/RelativeOrientationSensor
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`RelativeOrientationSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) beschreibt die physische Ausrichtung des Geräts ohne Berücksichtigung des Erdbezugskoordinatensystems.

Um diesen Sensor zu verwenden, muss der Benutzer die Erlaubnis für die Gerätesensoren `'accelerometer'` und `'gyroscope'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("RelativeOrientationSensor.RelativeOrientationSensor", "RelativeOrientationSensor()")}}
  - : Erstellt ein neues `RelativeOrientationSensor`-Objekt.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinen Vorfahren {{domxref('OrientationSensor')}} und {{domxref('Sensor')}}._

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinen Vorfahren {{domxref('OrientationSensor')}} und {{domxref('Sensor')}}._

## Events

_Keine spezifischen Events; erbt Events von seinem Vorfahren, {{domxref('Sensor')}}._

## Beispiele

### Einfaches Beispiel

Das folgende Beispiel, das lose auf [Intels Orientation Phone Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, instanziiert einen `RelativeOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde.

> [!NOTE]
> Das Intel-Demo, auf dem dies basiert, verwendet den `AbsoluteOrientationSensor`. Bei jeder Ablesung wird {{domxref('OrientationSensor.quaternion')}} verwendet, um ein visuelles Modell eines Telefons zu drehen.

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

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da die {{domxref('Permissions')}}-Schnittstelle Versprechen verwendet, ist eine gute Möglichkeit, Berechtigungen anzufordern, die Verwendung von {{jsxref('Promise.all')}}.

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
