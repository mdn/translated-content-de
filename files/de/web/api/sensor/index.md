---
title: Sensor
slug: Web/API/Sensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`Sensor`** Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) ist die Basisklasse für alle anderen Sensor-Interfaces. Dieses Interface kann nicht direkt verwendet werden. Stattdessen bietet es Eigenschaften, Ereignishandler und Methoden, auf die über Interfaces zugegriffen wird, die von ihm erben.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

Wenn das `Sensor`-Objekt initial erstellt wird, befindet es sich im _Leerlauf_, was bedeutet, dass es keine Messungen durchführt. Sobald die [`start()`](/de/docs/Web/API/Sensor/start)-Methode aufgerufen wird, bereitet es sich darauf vor, Daten zu lesen, und sobald es bereit ist, wird das [`activate`](/de/docs/Web/API/Sensor/activate_event)-Ereignis gesendet, und der Sensor wird _aktiviert_. Dann wird jedes Mal, wenn neue Daten verfügbar sind, ein [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis gesendet.

Im Falle eines Fehlers wird das [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignis gesendet, das Lesen stoppt, und das `Sensor`-Objekt wird wieder _idle_. Die [`start()`](/de/docs/Web/API/Sensor/start)-Methode muss erneut aufgerufen werden, bevor es weiter Daten lesen kann.

## Auf `Sensor` basierende Schnittstellen

Unten ist eine Liste von Schnittstellen, die auf dem `Sensor`-Interface basieren.

- [`Accelerometer`](/de/docs/Web/API/Accelerometer)
- [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)
- [`GravitySensor`](/de/docs/Web/API/GravitySensor)
- [`Gyroscope`](/de/docs/Web/API/Gyroscope)
- [`LinearAccelerationSensor`](/de/docs/Web/API/LinearAccelerationSensor)
- [`Magnetometer`](/de/docs/Web/API/Magnetometer)
- [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)

## Instanzeigenschaften

- [`Sensor.activated`](/de/docs/Web/API/Sensor/activated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Sensor aktiv ist.
- [`Sensor.hasReading`](/de/docs/Web/API/Sensor/hasReading) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Sensor eine Messung hat.
- [`Sensor.timestamp`](/de/docs/Web/API/Sensor/timestamp) {{ReadOnlyInline}}
  - : Gibt den Zeitstempel der neuesten Sensormessung zurück.

## Instanzmethoden

- [`Sensor.start()`](/de/docs/Web/API/Sensor/start)
  - : Aktiviert einen der auf `Sensor` basierenden Sensoren.
- [`Sensor.stop()`](/de/docs/Web/API/Sensor/stop)
  - : Deaktiviert einen der auf `Sensor` basierenden Sensoren.

## Ereignisse

- [`activate`](/de/docs/Web/API/Sensor/activate_event)
  - : Wird ausgelöst, wenn ein Sensor aktiviert wird.
- [`error`](/de/docs/Web/API/Sensor/error_event)
  - : Wird ausgelöst, wenn eine Ausnahme bei einem Sensor auftritt.
- [`reading`](/de/docs/Web/API/Sensor/reading_event)
  - : Wird ausgelöst, wenn eine neue Messung bei einem Sensor verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
