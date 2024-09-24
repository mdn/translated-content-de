---
title: LinearAccelerationSensor
slug: Web/API/LinearAccelerationSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`LinearAccelerationSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät in allen drei Achsen angewandte Beschleunigung, jedoch ohne den Beitrag der Schwerkraft.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den Gerätesensor `'accelerometer'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann diese Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server eingestellt ist.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("LinearAccelerationSensor.LinearAccelerationSensor", "LinearAccelerationSensor()")}}
  - : Erstellt ein neues `LinearAccelerationSensor`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren, {{domxref('Accelerometer')}}, {{domxref("Sensor")}}, und {{domxref("EventTarget")}}._

## Instanz-Methoden

_`LinearAccelerationSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Elternschnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`LinearAccelerationSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner Elternschnittstelle, {{domxref('Sensor')}}._

## Beispiel

Lineare Beschleunigung wird typischerweise im {{domxref('Sensor.reading_event', 'Lese')}}-Ereignis-Callback abgerufen. Im untenstehenden Beispiel geschieht dies sechzigmal pro Sekunde.

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
