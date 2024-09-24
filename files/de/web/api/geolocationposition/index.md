---
title: GeolocationPosition
slug: Web/API/GeolocationPosition
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationPosition`** Schnittstelle repräsentiert die Position des betreffenden Geräts zu einem gegebenen Zeitpunkt. Die Position wird durch ein {{domxref("GeolocationCoordinates")}}-Objekt dargestellt und umfasst die 2D-Position des Geräts auf einem Sphäroid, das die Erde repräsentiert, sowie dessen Höhe und Geschwindigkeit.

## Instanzeigenschaften

_Die `GeolocationPosition` Schnittstelle erbt keine Eigenschaften._

- {{domxref("GeolocationPosition.coords")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("GeolocationCoordinates")}}-Objekt zurück, das den aktuellen Standort definiert.
- {{domxref("GeolocationPosition.timestamp")}} {{ReadOnlyInline}}
  - : Gibt einen Zeitstempel zurück, der als {{Glossary("Unix time")}} in Millisekunden angegeben ist und die Zeit darstellt, zu der der Standort abgerufen wurde.

## Instanzmethoden

_Die `GeolocationPosition` Schnittstelle erbt keine Methoden._

- {{domxref("GeolocationPosition.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `GeolocationPosition`-Objekts zurück und ermöglicht die Serialisierung mit {{jsxref("JSON.stringify()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
