---
title: Sensor
slug: Web/API/Sensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`Sensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) ist die Basisklasse für alle anderen Sensor-Schnittstellen. Diese Schnittstelle kann nicht direkt verwendet werden. Stattdessen bietet sie Eigenschaften, Ereignishandler und Methoden, die von Schnittstellen, die von ihr erben, genutzt werden.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

Bei der erstmaligen Erstellung ist das `Sensor`-Objekt _inaktiv_, das heißt, es nimmt keine Messungen vor. Sobald die {{domxref("Sensor.start()", "start()")}}-Methode aufgerufen wird, bereitet es sich darauf vor, Daten zu lesen und sobald es bereit ist, wird das {{domxref("Sensor/activate_event", "activate")}}-Ereignis gesendet und der Sensor wird _aktiviert_. Es sendet dann ein {{domxref("Sensor/reading_event", "reading")}}-Ereignis, jedes Mal wenn neue Daten verfügbar sind.

Bei einem Fehler wird das {{domxref("Sensor/error_event", "error")}}-Ereignis gesendet, das Lesen stoppt und das `Sensor`-Objekt wird wieder _inaktiv_. Die {{domxref("Sensor.start()", "start()")}}-Methode muss erneut aufgerufen werden, bevor es weitere Daten lesen kann.

## Auf dem `Sensor` basierende Schnittstellen

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `Sensor`-Schnittstelle basieren.

- {{domxref('Accelerometer')}}
- {{domxref('AmbientLightSensor')}}
- {{domxref('GravitySensor')}}
- {{domxref('Gyroscope')}}
- {{domxref('LinearAccelerationSensor')}}
- {{domxref('Magnetometer')}}
- {{domxref('OrientationSensor')}}

## Instanzeigenschaften

- {{domxref('Sensor.activated')}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Sensor aktiv ist.
- {{domxref('Sensor.hasReading')}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Sensor eine Messung hat.
- {{domxref('Sensor.timestamp')}} {{ReadOnlyInline}}
  - : Gibt den Zeitstempel der neuesten Sensorablesung zurück.

## Instanzmethoden

- {{domxref('Sensor.start()')}}
  - : Aktiviert einen der auf `Sensor` basierenden Sensoren.
- {{domxref('Sensor.stop()')}}
  - : Deaktiviert einen der auf `Sensor` basierenden Sensoren.

## Ereignisse

- {{domxref('Sensor.activate_event', 'activate')}}
  - : Wird ausgelöst, wenn ein Sensor aktiviert wird.
- {{domxref('Sensor.error_event', 'error')}}
  - : Wird ausgelöst, wenn eine Ausnahme bei einem Sensor auftritt.
- {{domxref('Sensor.reading_event', 'reading')}}
  - : Wird ausgelöst, wenn eine neue Messung auf einem Sensor verfügbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
