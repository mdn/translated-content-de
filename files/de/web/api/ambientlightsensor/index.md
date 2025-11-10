---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`AmbientLightSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) gibt das aktuelle Lichtniveau oder die Beleuchtungsstärke des Umgebungslichts um das Host-Gerät zurück.

Um diesen Sensor zu nutzen, muss der Benutzer die Erlaubnis für den Gerätesensor `'ambient-light-sensor'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AmbientLightSensor()`](/de/docs/Web/API/AmbientLightSensor/AmbientLightSensor) {{Experimental_Inline}}
  - : Erstellt ein neues `AmbientLightSensor`-Objekt.

## Instanzeigenschaften

- [`AmbientLightSensor.illuminance`](/de/docs/Web/API/AmbientLightSensor/illuminance) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das aktuelle Lichtniveau in [Lux](https://en.wikipedia.org/wiki/Lux) des Umgebungslichtes um das Host-Gerät zurück.

## Instanzmethoden

_`AmbientLightSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`AmbientLightSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

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
