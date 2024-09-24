---
title: Magnetometer
slug: Web/API/Magnetometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`Magnetometer`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert Informationen über das Magnetfeld, wie es vom primären Magnetometersensor des Geräts erfasst wird.

Um diesen Sensor zu verwenden, muss der Benutzer die Erlaubnis für den `'magnetometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Magnetometer.Magnetometer", "Magnetometer()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `Magnetometer`-Objekt.

## Instanzeigenschaften

- {{domxref('Magnetometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der das Magnetfeld entlang der x-Achse des Geräts enthält.
- {{domxref('Magnetometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der das Magnetfeld entlang der y-Achse des Geräts enthält.
- {{domxref('Magnetometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der das Magnetfeld entlang der z-Achse des Geräts enthält.

## Instanzmethoden

_`Magnetometer` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Elternschnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`Magnetometer` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner Elternschnittstelle, {{domxref('Sensor')}}._

## Beispiel

Das Magnetometer wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}} Ereignis-Callback ausgelesen. Im unten stehenden Beispiel erfolgt dies sechzig Mal pro Sekunde.

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
