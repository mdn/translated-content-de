---
title: Magnetometer
slug: Web/API/Magnetometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Das **`Magnetometer`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert Informationen über das Magnetfeld, das vom primären Magnetometersensor des Geräts erfasst wird.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung zum Zugriff auf den `'magnetometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann dieses Feature durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Magnetometer()`](/de/docs/Web/API/Magnetometer/Magnetometer) {{Experimental_Inline}}
  - : Erstellt ein neues `Magnetometer`-Objekt.

## Instanzeigenschaften

- [`Magnetometer.x`](/de/docs/Web/API/Magnetometer/x) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `double` zurück, das das Magnetfeld um die x-Achse des Geräts enthält.
- [`Magnetometer.y`](/de/docs/Web/API/Magnetometer/y) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `double` zurück, das das Magnetfeld um die y-Achse des Geräts enthält.
- [`Magnetometer.z`](/de/docs/Web/API/Magnetometer/z) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein `double` zurück, das das Magnetfeld um die z-Achse des Geräts enthält.

## Instanzmethoden

_Das `Magnetometer` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_Das `Magnetometer` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Das Magnetometer wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback gelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
