---
title: GravitySensor
slug: Web/API/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`GravitySensor`**-Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät wirkende Schwerkraft entlang aller drei Achsen.

Um diesen Sensor zu nutzen, muss der Benutzer die Berechtigung für den `'accelerometer'` Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Zusätzlich kann diese Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GravitySensor()`](/de/docs/Web/API/GravitySensor/GravitySensor)
  - : Erstellt ein neues `GravitySensor`-Objekt.

## Instanz Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`Accelerometer`](/de/docs/Web/API/Accelerometer), [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_`GravitySensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Eltern-Interfaces, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`GravitySensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seinem Eltern-Interface, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Die Schwerkraft wird typischerweise in der [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignisrückruffunktion gelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
