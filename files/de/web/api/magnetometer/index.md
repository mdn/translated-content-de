---
title: Magnetometer
slug: Web/API/Magnetometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`Magnetometer`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert Informationen über das Magnetfeld, wie es vom primären Magnetometersensor des Geräts erkannt wird.

Um diesen Sensor zu verwenden, muss der Benutzer über die [Permissions API](/de/docs/Web/API/Permissions_API) die Erlaubnis für den `'magnetometer'`-Gerätesensor erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer) {{Experimental_Inline}}
  - : Erstellt ein neues `Magnetometer`-Objekt.

## Instanzeigenschaften

- [`Magnetometer.x`](/de/docs/Web/API/Magnetometer/x) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das das Magnetfeld um die x-Achse des Geräts enthält.
- [`Magnetometer.y`](/de/docs/Web/API/Magnetometer/y) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das das Magnetfeld um die y-Achse des Geräts enthält.
- [`Magnetometer.z`](/de/docs/Web/API/Magnetometer/z) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das das Magnetfeld um die z-Achse des Geräts enthält.

## Instanzmethoden

_`Magnetometer` besitzt keine eigenen Methoden. Allerdings erbt es Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`Magnetometer` besitzt keine eigenen Ereignisse. Allerdings erbt es Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Das Magnetometer wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback ausgelesen. Im folgenden Beispiel geschieht dies sechzigmal pro Sekunde.

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log(`Magnetic field along the X-axis ${magSensor.x}`);
  console.log(`Magnetic field along the Y-axis ${magSensor.y}`);
  console.log(`Magnetic field along the Z-axis ${magSensor.z}`);
});
magSensor.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
