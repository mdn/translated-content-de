---
title: Gyroskop
slug: Web/API/Gyroscope
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`Gyroscope`**-Interface der [Sensor APIs](/de/docs/Web/API/Sensor_APIs) liefert bei jeder Messung die Winkelgeschwindigkeit des Geräts entlang aller drei Achsen.

Um diesen Sensor zu nutzen, muss der Benutzer die Berechtigung für den `'gyroscope'`-Gerätesensor über die [Permissions API](/de/docs/Web/API/Permissions_API) erteilen. Darüber hinaus kann diese Funktion durch eine auf Ihrem Server festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}
  - : Erstellt ein neues `Gyroscope`-Objekt.

## Instanz-Eigenschaften

- {{domxref('Gyroscope.x')}} {{ReadOnlyInline}}
  - : Gibt einen double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der x-Achse des Geräts enthält.
- {{domxref('Gyroscope.y')}} {{ReadOnlyInline}}
  - : Gibt einen double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der y-Achse des Geräts enthält.
- {{domxref('Gyroscope.z')}} {{ReadOnlyInline}}
  - : Gibt einen double-Wert zurück, der die Winkelgeschwindigkeit des Geräts entlang der z-Achse des Geräts enthält.

## Instanz-Methoden

_`Gyroscope` hat keine eigenen Methoden. Es erbt jedoch Methoden von seinen übergeordneten Schnittstellen, {{domxref("Sensor")}} und {{domxref("EventTarget")}}._

## Ereignisse

_`Gyroscope` hat keine eigenen Ereignisse. Es erbt jedoch Ereignisse von seiner übergeordneten Schnittstelle, {{domxref('Sensor')}}._

## Beispiel

Das Gyroskop wird typischerweise im {{domxref('Sensor.reading_event', 'reading')}}-Ereignis-Callback ausgelesen. Im unten stehenden Beispiel geschieht dies sechzig Mal pro Sekunde.

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

## Kompatibilität der Browser

{{Compat}}
