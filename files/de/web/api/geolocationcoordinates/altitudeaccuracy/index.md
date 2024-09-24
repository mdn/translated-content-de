---
title: "GeolocationCoordinates: altitudeAccuracy-Eigenschaft"
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: 066d55a090927fa19ba19c2a4b2417470e1a979f
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`altitudeAccuracy`** des {{domxref("GeolocationCoordinates")}}-Interfaces ist ein streng positiver `double`, der die Genauigkeit der in Metern ausgedrückten `altitude` mit einem 95%igen Konfidenzintervall darstellt. Dieser Wert ist `null`, wenn die Implementierung die Messung der Höhe nicht unterstützt.

## Wert

Ein positiver `double`, der die Genauigkeit der in Metern ausgedrückten `altitude` mit einem 95%igen Konfidenzintervall darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
