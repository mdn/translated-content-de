---
title: Gyroscope
slug: Web/API/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`Gyroscope`**-Interface der [Sensor-APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.

Um diesen Sensor zu verwenden, muss der Benutzer die Berechtigung für den Sensor des Geräts `'gyroscope'` über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Zusätzlich kann diese Funktion durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Gyroscope()`](/de/docs/Web/API/Gyroscope/Gyroscope)
  - : Erstellt ein neues `Gyroscope`-Objekt.

## Instanzeigenschaften

- [`Gyroscope.x`](/de/docs/Web/API/Gyroscope/x) {{ReadOnlyInline}}
  - : Gibt ein Double zurück, das die Winkelgeschwindigkeit des Geräts entlang der x-Achse des Geräts enthält.
- [`Gyroscope.y`](/de/docs/Web/API/Gyroscope/y) {{ReadOnlyInline}}
  - : Gibt ein Double zurück, das die Winkelgeschwindigkeit des Geräts entlang der y-Achse des Geräts enthält.
- [`Gyroscope.z`](/de/docs/Web/API/Gyroscope/z) {{ReadOnlyInline}}
  - : Gibt ein Double zurück, das die Winkelgeschwindigkeit des Geräts entlang der z-Achse des Geräts enthält.

## Instanzmethoden

_`Gyroscope` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Interfaces, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`Gyroscope` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seinem übergeordneten Interface, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Das Gyroskop wird typischerweise im Callback-Ereignis [`reading`](/de/docs/Web/API/Sensor/reading_event) ausgelesen. Im untenstehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
