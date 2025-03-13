---
title: Beschleunigungssensor
slug: Web/API/Accelerometer
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Das **`Accelerometer`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät wirkende Beschleunigung entlang aller drei Achsen.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den `'accelerometer'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) gewähren.

Diese Funktion kann durch eine auf Ihrem Server festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Accelerometer()`](/de/docs/Web/API/Accelerometer/Accelerometer) {{Experimental_Inline}}
  - : Erstellt ein neues `Accelerometer`-Objekt.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Accelerometer` Eigenschaften von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Accelerometer.x`](/de/docs/Web/API/Accelerometer/x) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das die Beschleunigung des Geräts entlang der x-Achse des Geräts enthält.
- [`Accelerometer.y`](/de/docs/Web/API/Accelerometer/y) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das die Beschleunigung des Geräts entlang der y-Achse des Geräts enthält.
- [`Accelerometer.z`](/de/docs/Web/API/Accelerometer/z) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Double zurück, das die Beschleunigung des Geräts entlang der z-Achse des Geräts enthält.

## Instanz-Methoden

_`Accelerometer` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`Accelerometer` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Die Beschleunigung wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback gelesen. Im folgenden Beispiel geschieht dies sechzigmal pro Sekunde.

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
