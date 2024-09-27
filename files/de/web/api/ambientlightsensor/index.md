---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Das **`AmbientLightSensor`** Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) gibt das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das hostende Gerät zurück.

Um diesen Sensor zu verwenden, muss der Benutzer über die [Permissions API](/de/docs/Web/API/Permissions_API) die Erlaubnis zum Zugriff auf den `'ambient-light-sensor'` Gerätesensor erteilen.

Diese Funktion kann durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) auf Ihrem Server blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AmbientLightSensor()`](/de/docs/Web/API/AmbientLightSensor/AmbientLightSensor) {{Experimental_Inline}}
  - : Erstellt ein neues `AmbientLightSensor`-Objekt.

## Instanz-Eigenschaften

- [`AmbientLightSensor.illuminance`](/de/docs/Web/API/AmbientLightSensor/illuminance) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das aktuelle Lichtniveau in [Lux](https://en.wikipedia.org/wiki/Lux) des Umgebungslichtlevels um das hostende Gerät zurück.

## Instanzmethoden

_`AmbientLightSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Eltern-Interfaces, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`AmbientLightSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seinem Eltern-Interface, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("Current light level:", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
