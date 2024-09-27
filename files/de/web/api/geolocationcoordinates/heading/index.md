---
title: "GeolocationCoordinates: heading-Eigenschaft"
short-title: heading
slug: Web/API/GeolocationCoordinates/heading
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die schreibgeschützte **`heading`**-Eigenschaft des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Interfaces ist ein `double`, das die Richtung angibt, in die sich das Gerät bewegt. Dieser Wert, der in Grad angegeben ist, zeigt an, wie weit das Gerät vom wahren Norden abweicht. `0` Grad repräsentiert den wahren Norden, und die Richtung wird im Uhrzeigersinn ermittelt (was bedeutet, dass Osten `90` Grad und Westen `270` Grad sind). Wenn [`GeolocationCoordinates.speed`](/de/docs/Web/API/GeolocationCoordinates/speed) `0` ist oder das Gerät nicht in der Lage ist, Richtungsinformationen bereitzustellen, ist `heading` `null`.

## Wert

Ein `double`, das die Richtung angibt, in die sich das Gerät bewegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)
