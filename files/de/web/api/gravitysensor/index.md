---
title: GravitySensor
slug: Web/API/GravitySensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`GravitySensor`**-Schnittstelle der [Sensoren-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät ausgeübte Schwerkraft entlang aller drei Achsen.

Um diesen Sensor zu verwenden, muss der Benutzer der `'accelerometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) die Erlaubnis erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`GravitySensor()`](/de/docs/Web/API/GravitySensor/GravitySensor)
  - : Erstellt ein neues `GravitySensor`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Vorfahren, [`Accelerometer`](/de/docs/Web/API/Accelerometer), [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_`GravitySensor` hat keine eigenen Methoden. Allerdings erbt es Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`GravitySensor` hat keine eigenen Ereignisse. Allerdings erbt es Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Die Schwerkraft wird typischerweise in der [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignisrückruffunktion gelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
