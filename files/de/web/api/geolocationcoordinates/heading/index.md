---
title: "GeolocationCoordinates: heading-Eigenschaft"
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte Eigenschaft **`heading`** der {{domxref("GeolocationCoordinates")}}-Schnittstelle ist ein `double`, das die Richtung angibt, in die sich das Gerät bewegt. Dieser Wert, in Grad angegeben, zeigt an, wie weit das Gerät von der Nordrichtung abweicht. `0` Grad repräsentiert den geografischen Norden, und die Richtung wird im Uhrzeigersinn bestimmt (was bedeutet, dass Osten `90` Grad und Westen `270` Grad sind). Wenn {{domxref("GeolocationCoordinates.speed")}} `0` ist oder das Gerät keine Richtungsinformationen bereitstellen kann, ist `heading` `null`.

## Wert

Ein `double`, das die Richtung angibt, in die sich das Gerät bewegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("GeolocationCoordinates")}}
