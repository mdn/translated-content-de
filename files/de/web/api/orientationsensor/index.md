---
title: Orientierungssensor
slug: Web/API/OrientationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`OrientationSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) ist die Basisklasse für Orientierungssensoren. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften und Methoden, auf die über Schnittstellen zugegriffen wird, die von ihr erben.

Dieses Feature kann durch eine auf Ihrem Server gesetzte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Schnittstellen, die auf OrientationSensor basieren

Im Folgenden finden Sie eine Liste der Schnittstellen, die auf der OrientationSensor-Schnittstelle basieren.

- {{domxref('AbsoluteOrientationSensor')}}
- {{domxref('RelativeOrientationSensor')}}

## Instanzeigenschaften

- {{domxref("OrientationSensor.quaternion")}} {{ReadOnlyInline}}
  - : Gibt ein vier Elemente umfassendes {{jsxref('Array')}} zurück, dessen Elemente die Komponenten des Einheitsquaternions enthalten, das die Orientierung des Geräts darstellt.

## Instanzmethoden

- {{domxref("OrientationSensor.populateMatrix()")}}
  - : Füllt das gegebene Objekt mit der Rotationsmatrix basierend auf der neuesten Sensorlesung.

## Beispiele

### Einfaches Beispiel

Im folgenden Beispiel, das lose auf [Intels Orientation Phone-Demo](https://intel.github.io/generic-sensor-demos/orientation-phone/) basiert, wird ein `AbsoluteOrientationSensor` mit einer Frequenz von 60 Mal pro Sekunde instanziiert. Bei jeder Messung wird {{domxref('OrientationSensor.quaternion')}} verwendet, um ein visuelles Modell eines Telefons zu drehen.

```js
const options = { frequency: 60, referenceFrame: "device" };
const sensor = new AbsoluteOrientationSensor(options);

sensor.addEventListener("reading", () => {
  // model ist ein Three.js-Objekt, das anderswo instanziiert wurde.
  model.quaternion.fromArray(sensor.quaternion).inverse();
});
sensor.addEventListener("error", (error) => {
  if (event.error.name === "NotReadableError") {
    console.log("Sensor ist nicht verfügbar.");
  }
});
sensor.start();
```

### Berechtigungsbeispiel

Die Verwendung von Orientierungssensoren erfordert das Anfordern von Berechtigungen für mehrere Gerätesensoren. Da die {{domxref('Permissions')}}-Schnittstelle Versprechen verwendet, ist eine gute Möglichkeit, Berechtigungen anzufordern, die Verwendung von {{jsxref('Promise.all')}}.

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
    console.log("Keine Berechtigung zur Nutzung des AbsoluteOrientationSensor.");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
