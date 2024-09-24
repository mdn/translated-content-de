---
title: Beschleunigungsmesser
slug: Web/API/Accelerometer
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

Das **`Accelerometer`**-Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die auf das Gerät angewendete Beschleunigung entlang aller drei Achsen.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den `'accelerometer'`, Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen.

Diese Funktion kann durch eine auf Ihrem Server gesetzte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Accelerometer.Accelerometer()", "Accelerometer()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `Accelerometer`-Objekt.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt `Accelerometer` Eigenschaften von seinen übergeordneten Schnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

- {{domxref('Accelerometer.x')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der die Beschleunigung des Geräts entlang der x-Achse des Geräts enthält.
- {{domxref('Accelerometer.y')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der die Beschleunigung des Geräts entlang der y-Achse des Geräts enthält.
- {{domxref('Accelerometer.z')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Double-Wert zurück, der die Beschleunigung des Geräts entlang der z-Achse des Geräts enthält.

## Instanz-Methoden

_`Accelerometer` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`Accelerometer` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, {{domxref('Sensor')}}._

## Beispiel

Die Beschleunigung wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}}-Ereignis-Callback gelesen. Im folgenden Beispiel erfolgt dies sechzig Mal pro Sekunde.

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
