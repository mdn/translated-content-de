---
title: Sensor
slug: Web/API/Sensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`Sensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) ist die Basisklasse für alle anderen Sensor-Schnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften, Ereignis-Handler und Methoden, die von Schnittstellen genutzt werden, die von ihr erben.

Diese Funktion kann durch eine auf Ihrem Server eingerichtete [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

Wenn das `Sensor`-Objekt erstmals erstellt wird, ist es _inaktiv_, das heißt, es nimmt keine Messungen vor. Sobald die [`start()`](/de/docs/Web/API/Sensor/start)-Methode aufgerufen wird, bereitet es sich darauf vor, Daten zu lesen und, sobald es bereit ist, wird das [`activate`](/de/docs/Web/API/Sensor/activate_event)-Ereignis gesendet und der Sensor wird _aktiviert_. Er sendet dann jedes Mal ein [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis, wenn neue Daten verfügbar sind.

Im Falle eines Fehlers wird das [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignis gesendet, das Lesen wird gestoppt und das `Sensor`-Objekt wird wieder _inaktiv_. Die [`start()`](/de/docs/Web/API/Sensor/start)-Methode muss erneut aufgerufen werden, bevor weitere Daten gelesen werden können.

## Schnittstellen basierend auf `Sensor`

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `Sensor`-Schnittstelle basieren.

- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)

## Instanz-Eigenschaften

- [`Sensor.activated`](/de/docs/Web/API/Sensor/activated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Sensor aktiv ist.
- [`Sensor.hasReading`](/de/docs/Web/API/Sensor/hasReading) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Sensor eine Messung hat.
- [`Sensor.timestamp`](/de/docs/Web/API/Sensor/timestamp) {{ReadOnlyInline}}
  - : Gibt den Zeitstempel der neuesten Sensor-Messung zurück.

## Instanz-Methoden

- [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
  - : Aktiviert einen der Sensoren, die auf `Sensor` basieren.
- [`Sensor.stop()`](/de/docs/Web/API/Sensor/stop)
  - : Deaktiviert einen der Sensoren, die auf `Sensor` basieren.

## Ereignisse

- [`activate`](/de/docs/Web/API/Sensor/activate_event)
  - : Wird ausgelöst, wenn ein Sensor aktiviert wird.
- [`error`](/de/docs/Web/API/Sensor/error_event)
  - : Wird ausgelöst, wenn eine Ausnahme bei einem Sensor auftritt.
- [`reading`](/de/docs/Web/API/Sensor/reading_event)
  - : Wird ausgelöst, wenn eine neue Messung auf einem Sensor verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
