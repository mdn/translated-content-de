---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`LinearAccelerationSensor`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die Beschleunigung, die ohne den Beitrag der Schwerkraft auf das Gerät entlang aller drei Achsen angewendet wird.

Um diesen Sensor zu verwenden, muss der Benutzer die Erlaubnis für den `'accelerometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann diese Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`LinearAccelerationSensor()`](/de/docs/Web/API/LinearAccelerationSensor/LinearAccelerationSensor)
  - : Erstellt ein neues `LinearAccelerationSensor`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`Accelerometer`](/de/docs/Web/API/Accelerometer), [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_`LinearAccelerationSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`LinearAccelerationSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Lineare Beschleunigung wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback gelesen. Im folgenden Beispiel erfolgt dies sechzig Mal pro Sekunde.

```js
let laSensor = new LinearAccelerationSensor({ frequency: 60 });

laSensor.addEventListener("reading", (e) => {
  console.log(`Linear acceleration along the X-axis ${laSensor.x}`);
  console.log(`Linear acceleration along the Y-axis ${laSensor.y}`);
  console.log(`Linear acceleration along the Z-axis ${laSensor.z}`);
});
laSensor.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
