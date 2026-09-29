---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Das **`GeolocationPosition`**-Interface repräsentiert die Position des betreffenden Geräts zu einem bestimmten Zeitpunkt. Die durch ein [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekt dargestellte Position umfasst die zweidimensionale Position des Geräts auf einem die Erde repräsentierenden Sphäroid sowie seine Höhe und Geschwindigkeit.

## Instanzeigenschaften

_Das `GeolocationPosition`-Interface erbt keine Eigenschaften._

- [`GeolocationPosition.coords`](/de/docs/Web/API/GeolocationPosition/coords) {{ReadOnlyInline}}
  - : Gibt ein [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekt zurück, das den aktuellen Standort definiert.
- [`GeolocationPosition.timestamp`](/de/docs/Web/API/GeolocationPosition/timestamp) {{ReadOnlyInline}}
  - : Gibt einen Zeitstempel als {{Glossary("Unix_time", "Unix-Zeit")}} in Millisekunden zurück, der den Zeitpunkt angibt, zu dem der Standort ermittelt wurde.

## Instanzmethoden

_Das `GeolocationPosition`-Interface erbt keine Methoden._

- [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `GeolocationPosition`-Objekt repräsentiert. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
