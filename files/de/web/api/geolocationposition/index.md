---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationPosition`**-Schnittstelle repräsentiert die Position des betreffenden Geräts zu einem bestimmten Zeitpunkt. Die Position, dargestellt durch ein [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekt, umfasst die 2D-Position des Geräts auf einem die Erde repräsentierenden Sphäroiden, aber auch seine Höhe und Geschwindigkeit.

## Instanz-Eigenschaften

_Die `GeolocationPosition`-Schnittstelle erbt keine Eigenschaften._

- [`GeolocationPosition.coords`](/de/docs/Web/API/GeolocationPosition/coords) {{ReadOnlyInline}}
  - : Gibt ein [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekt zurück, das den aktuellen Standort definiert.
- [`GeolocationPosition.timestamp`](/de/docs/Web/API/GeolocationPosition/timestamp) {{ReadOnlyInline}}
  - : Gibt einen Zeitstempel zurück, der als [Unix-Zeit](/de/docs/Glossary/Unix_time) in Millisekunden angegeben wird und die Zeit repräsentiert, zu der der Standort ermittelt wurde.

## Instanz-Methoden

_Die `GeolocationPosition`-Schnittstelle erbt keine Methoden._

- [`GeolocationPosition.toJSON()`](/de/docs/Web/API/GeolocationPosition/toJSON)
  - : Gibt eine JSON-Darstellung des `GeolocationPosition`-Objekts zurück und ermöglicht die Serialisierung mit {{jsxref("JSON.stringify()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
