---
title: Gyroscope
slug: Web/API/Gyroscope
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`Gyroscope`**-Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.

Um diesen Sensor zu verwenden, muss der Benutzer über die [Permissions API](/de/docs/Web/API/Permissions_API) die Berechtigung für den `'gyroscope'`-Gerätesensor erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Gyroscope()`](/de/docs/Web/API/Gyroscope/Gyroscope)
  - : Erstellt ein neues `Gyroscope`-Objekt.

## Instanz-Eigenschaften

- [`Gyroscope.x`](/de/docs/Web/API/Gyroscope/x) {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der x-Achse des Geräts enthält.
- [`Gyroscope.y`](/de/docs/Web/API/Gyroscope/y) {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der y-Achse des Geräts enthält.
- [`Gyroscope.z`](/de/docs/Web/API/Gyroscope/z) {{ReadOnlyInline}}
  - : Gibt einen Double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der z-Achse des Geräts enthält.

## Instanz-Methoden

_`Gyroscope` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen Eltern-Interfaces, [`Sensor`](/de/docs/Web/API/Sensor) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_`Gyroscope` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seinem Eltern-Interface, [`Sensor`](/de/docs/Web/API/Sensor)._

## Beispiel

Das Gyroskop wird typischerweise im [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis-Callback ausgelesen. Im folgenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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
