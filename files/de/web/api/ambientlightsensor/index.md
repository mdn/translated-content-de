---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Das **`AmbientLightSensor`** Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) gibt den aktuellen Lichtpegel oder die Beleuchtungsstärke des Umgebungslichts um das Hostgerät zurück.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den `'ambient-light-sensor'` Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `AmbientLightSensor` Objekt.

## Instanzeigenschaften

- {{domxref('AmbientLightSensor.illuminance')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuellen Lichtpegel in [Lux](https://en.wikipedia.org/wiki/Lux) des Umgebungslichts um das Hostgerät zurück.

## Instanzmethoden

_`AmbientLightSensor` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`AmbientLightSensor` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, {{domxref('Sensor')}}._

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
