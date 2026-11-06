---
title: "GeolocationCoordinates: Eigenschaft altitudeAccuracy"
short-title: altitudeAccuracy
slug: Web/API/GeolocationCoordinates/altitudeAccuracy
l10n:
  sourceCommit: c16932d73afd08c1d5fb7743e209382f183c40c3
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`altitudeAccuracy`** der Schnittstelle [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) ist ein strikt positiver `double`-Wert. Er gibt die Genauigkeit von `altitude` in Metern mit einem Konfidenzniveau von 68 % an. Der Wert ist `null`, wenn die Implementierung keine Höhenmessung unterstützt.

## Wert

Ein positiver `double`-Wert, der die Genauigkeit von `altitude` in Metern mit einem Konfidenzniveau von 68 % angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
