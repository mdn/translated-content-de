---
title: GravitySensor
slug: Web/API/GravitySensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`GravitySensor`**-Schnittstelle der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät entlang aller drei Achsen wirkende Schwerkraft.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den `'accelerometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Außerdem kann diese Funktion durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), die auf Ihrem Server festgelegt ist, blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GravitySensor()`](/de/docs/Web/API/GravitySensor/GravitySensor)
  - : Erzeugt ein neues `GravitySensor`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`Accelerometer`](/de/docs/Web/API/Accelerometer), [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanzmethoden

_`GravitySensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`GravitySensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Die Schwerkraft wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback gelesen. Im untenstehenden Beispiel passiert dies sechzig Mal pro Sekunde.

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
