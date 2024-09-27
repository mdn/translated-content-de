---
title: Accelerometer
slug: Web/API/Accelerometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Die **`Accelerometer`**-Schnittstelle der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Ablesung die Beschleunigung, die auf das Gerät entlang aller drei Achsen angewendet wird.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den `'accelerometer'`, Geräte-Sensor über die [Permissions-API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist.

{{InheritanceDiagram}}

## Konstruktor

- [`Accelerometer()`](/de/docs/Web/API/Accelerometer/Accelerometer) {{Experimental_Inline}}
  - : Erstellt ein neues `Accelerometer`-Objekt.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Accelerometer` Eigenschaften von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Accelerometer.x`](/de/docs/Web/API/Accelerometer/x) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Doppelwert zurück, der die Beschleunigung des Geräts entlang der x-Achse des Geräts enthält.
- [`Accelerometer.y`](/de/docs/Web/API/Accelerometer/y) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Doppelwert zurück, der die Beschleunigung des Geräts entlang der y-Achse des Geräts enthält.
- [`Accelerometer.z`](/de/docs/Web/API/Accelerometer/z) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Doppelwert zurück, der die Beschleunigung des Geräts entlang der z-Achse des Geräts enthält.

## Instanz-Methoden

_`Accelerometer` hat keine eigenen Methoden. Es erbt jedoch Methoden seiner übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`Accelerometer` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Die Beschleunigung wird normalerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback ausgelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});

acl.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
