---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`AmbientLightSensor`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) gibt den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den Geräten-Sensor `'ambient-light-sensor'` durch die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine auf Ihrem Server gesetzte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`AmbientLightSensor()`](/de/docs/Web/API/AmbientLightSensor/AmbientLightSensor) {{Experimental_Inline}}
  - : Erstellt ein neues `AmbientLightSensor`-Objekt.

## Instanz-Eigenschaften

- [`AmbientLightSensor.illuminance`](/de/docs/Web/API/AmbientLightSensor/illuminance) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuellen Lichtpegel in [Lux](https://en.wikipedia.org/wiki/Lux) des Umgebungslichts um das Hostgerät zurück.

## Instanz-Methoden

_`AmbientLightSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Elternschnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`AmbientLightSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner Elternschnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

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
