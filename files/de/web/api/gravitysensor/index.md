---
title: GravitationSensor
slug: Web/API/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`GravitySensor`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Ablesung die auf das Gerät entlang der drei Achsen ausgeübte Gravitation.

Um diesen Sensor zu verwenden, muss der Benutzer der `'accelerometer'` Gerät-Sensor über die [Permissions API](/de/docs/Web/API/Permissions_API) die Erlaubnis erteilen. Darüber hinaus kann diese Funktion durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt wurde, blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("GravitySensor.GravitySensor", "GravitySensor()")}}
  - : Erstellt ein neues `GravitySensor`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren, {{domxref('Accelerometer')}}, {{domxref('Sensor')}}, und {{domxref('EventTarget')}}._

## Instanz-Methoden

_`GravitySensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`GravitySensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, {{domxref('Sensor')}}._

## Beispiel

Die Gravitation wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}} Ereignis-Callback gelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

```js
let gravitySensor = new GravitySensor({ frequency: 60 });

gravitySensor.addEventListener("reading", (e) => {
  console.log(`Gravity along the X-axis ${gravitySensor.x}`);
  console.log(`Gravity along the Y-axis ${gravitySensor.y}`);
  console.log(`Gravity along the Z-axis ${gravitySensor.z}`);
});

gravitySensor.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
